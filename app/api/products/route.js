import connectDB from '@/lib/db';
import Product from '@/models/Product';
import Category from '@/models/Category';
import { protect, admin } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const pageSize = Math.min(Number(searchParams.get('limit')) || 20, 200);
    const page = Number(searchParams.get('page')) || 1;
    const categoryName = searchParams.get('category');
    const search = searchParams.get('search');
    const brand = searchParams.get('brand');

    let query = {};

    if (categoryName && categoryName !== 'undefined' && categoryName !== 'null') {
      const escapedCategory = categoryName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      let category = await Category.findOne({
        name: { $regex: new RegExp(`^${escapedCategory}$`, 'i') },
      });
      if (!category) {
        category = await Category.findOne({ slug: categoryName });
      }
      if (category) {
        query.category = category._id;
      } else {
        return successResponse({ products: [], page: 1, pages: 0 });
      }
    }

    if (brand && brand !== 'all') {
      const escapedBrand = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      query.brand = { $regex: escapedBrand, $options: 'i' };
    }

    if (search) {
      const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      query.$or = [
        { title: { $regex: escapedSearch, $options: 'i' } },
        { description: { $regex: escapedSearch, $options: 'i' } },
        { brand: { $regex: escapedSearch, $options: 'i' } },
        { shortDetails: { $regex: escapedSearch, $options: 'i' } },
        { overview: { $regex: escapedSearch, $options: 'i' } },
      ];
    }

    const count = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('category', 'name')
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return successResponse({ products, page, pages: Math.ceil(count / pageSize), total: count });
  } catch (error) {
    return errorResponse(error.message, 500);
  }
}

export async function POST(req) {
  try {
    const user = await protect(req);
    admin(user);
    await connectDB();

    const formData = await req.formData();
    const files = formData.getAll('images');

    let imageUrls = [];
    if (files && files.length > 0) {
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const imageUrl = await uploadToCloudinary(buffer, file.name);
        imageUrls.push(imageUrl);
      }
    } else {
      const imagesStr = formData.get('images');
      if (imagesStr) {
        imageUrls = typeof imagesStr === 'string' ? JSON.parse(imagesStr) : imagesStr;
      }
    }

    const title = formData.get('title');
    const price = formData.get('price');
    const category = formData.get('category');

    if (!title || !price || !category) {
      return errorResponse('Please provide title, price, and category', 400);
    }

    const parseArrayField = (field) => {
      if (!field) return [];
      try {
        return typeof field === 'string' ? JSON.parse(field) : field;
      } catch (e) {
        return [];
      }
    };

    const reviews = formData.get('reviews');
    const parsedReviews = reviews ? (typeof reviews === 'string' ? JSON.parse(reviews) : reviews) : [];
    const slug = title.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-');

    const product = new Product({
      user: user._id,
      title,
      slug,
      brand: formData.get('brand') || 'Generic',
      category,
      price: Number(price) || 0,
      oldPrice: Number(formData.get('oldPrice')) || 0,
      countInStock: Number(formData.get('countInStock')) || 0,
      description: formData.get('description') || '',
      shortDetails: formData.get('shortDetails'),
      shortSpecification: formData.get('shortSpecification'),
      overview: formData.get('overview'),
      technicalSpecification: formData.get('technicalSpecification'),
      images: imageUrls,
      color: formData.get('color'),
      width: formData.get('width'),
      height: formData.get('height'),
      depth: formData.get('depth'),
      screenSize: formData.get('screenSize'),
      technology: parseArrayField(formData.get('technology')),
      usageCategory: parseArrayField(formData.get('usageCategory')),
      allInOneType: parseArrayField(formData.get('allInOneType')),
      wireless: formData.get('wireless') || '',
      mainFunction: parseArrayField(formData.get('mainFunction')),
      reviews: parsedReviews,
      numReviews: parsedReviews.length,
      rating:
        parsedReviews.length > 0
          ? parsedReviews.reduce((acc, item) => item.rating + acc, 0) / parsedReviews.length
          : 0,
    });

    const createdProduct = await product.save();
    return successResponse(createdProduct, 201);
  } catch (error) {
    return errorResponse(error.message, error.message.includes('authorized') ? 401 : 500);
  }
}
