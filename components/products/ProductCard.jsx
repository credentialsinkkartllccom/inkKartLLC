"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { ShoppingCart, Eye, Star, ArrowRight } from 'lucide-react';

const printerImg = "/Ink Kart LLClogo.png";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate.push(`/product/${product.slug || product._id}`);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product.slug || product._id, 1));
    navigate.push('/cart');
  };

  const imageUrl = product.image
    ? (product.image.startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${product.image}`)
    : (product.images && product.images.length > 0
        ? (product.images[0].startsWith('http') ? product.images[0] : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${product.images[0]}`)
        : printerImg);

  const price = typeof product.price === 'number' ? product.price.toFixed(2) : product.price;
  const rating = product.rating || 0;
  const numReviews = product.numReviews || 0;
  const inStock = product.countInStock > 0;

  return (
    <div
      className="group relative bg-white rounded-[32px] border border-slate-100 p-6 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden rounded-[24px] bg-slate-50 mb-6">
        <Link href={`/product/${product.slug || product._id}`} className="block w-full h-full">
          <img
            src={imageUrl}
            alt={product.title || product.name}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Product'; }}
            className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/5 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={handleDetails} 
            className="w-12 h-12 bg-white text-[#0F172A] rounded-xl flex items-center justify-center shadow-xl hover:bg-[#024AD8] hover:text-white transition-all transform hover:scale-110"
            title="Quick View"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={handleAddToCart} 
            className="w-12 h-12 bg-[#024AD8] text-white rounded-xl flex items-center justify-center shadow-xl hover:bg-[#0133A1] transition-all transform hover:scale-110"
            title="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {!inStock && (
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-red-100 shadow-sm uppercase tracking-wider">
              Out of Stock
            </span>
          )}
          {inStock && product.price < 50 && (
            <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm uppercase tracking-wider">
              Best Value
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-bold text-[#024AD8] tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-md">
            {product.category?.name || product.category || 'Printing System'}
          </span>
          {numReviews > 0 && (
            <div className="flex items-center gap-1.5">
              <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
              <span className="text-xs font-bold text-slate-700">{rating}</span>
            </div>
          )}
        </div>

        <Link 
          href={`/product/${product.slug || product._id}`} 
          className="text-lg font-bold text-[#0F172A] font-['Poppins'] line-clamp-2 hover:text-[#024AD8] transition-colors leading-tight"
        >
          {product.title || product.name}
        </Link>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Price</span>
            <span className="text-2xl font-black text-[#0F172A] leading-none mt-1">
              ${price}
            </span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-2 text-sm font-bold text-[#024AD8] hover:gap-3 transition-all group/btn"
          >
            Buy Now
            <ArrowRight size={16} className="transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
