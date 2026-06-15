"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from "react"; // eslint-disable-line no-unused-vars
import { useRouter, usePathname, useParams } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { 
  listProductDetails, 
  listProducts,
  createProductReview, 
  updateProductReview, 
  deleteProductReview 
} from "@/redux/actions/productActions";
import { addToCart } from "@/redux/actions/cartActions";
import { 
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_UPDATE_REVIEW_RESET 
} from "@/redux/constants/productConstants";
import { ShoppingCart, CreditCard, Star, MessageSquare, Shield, Truck, Package, RotateCcw, Award } from 'lucide-react';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useRouter();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products: relatedProducts } = productList;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("overview");

  // Review State & Selectors
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [canReview, setCanReview] = useState(false);
  const [showEligibilityToast, setShowEligibilityToast] = useState(false);
  
  // Toaster State
  const [showLoginToast, setShowLoginToast] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userHasReviewed = product?.reviews?.some((r) => r.user === userInfo?._id);

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } = productReviewCreate;

  useEffect(() => {
    if (product && product.category) {
        const categoryName = product.category.name || product.category;
        dispatch(listProducts('', categoryName, 1));
    }
    
    const checkEligibility = async () => {
        if (userInfo && product && product._id) {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/orders/check-review-eligibility/${product._id}`,
                    config
                );
                setCanReview(data.canReview);
            } catch (error) {
                console.error("Error checking review eligibility", error);
                setCanReview(false);
            }
        }
    };
    checkEligibility();

  }, [dispatch, product, userInfo]);

  useEffect(() => {
    if (successProductReview) {
        setRating(0);
        setComment("");
        setEditingReviewId(null);
        setShowReviewForm(false);
        dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        if(slug) dispatch(listProductDetails(slug));
    }
  }, [successProductReview, slug, dispatch]);

  const submitReviewHandler = (e) => {
    e.preventDefault();
    if (editingReviewId) {
       dispatch(updateProductReview(product._id, { rating, comment, reviewId: editingReviewId }));
       setEditingReviewId(null);
    } else {
       dispatch(createProductReview(product._id, { rating, comment }));
    }
  };

  const deleteReviewHandler = (reviewId) => {
      if(window.confirm('Are you sure you want to delete this review?')) {
          dispatch(deleteProductReview(product._id, reviewId));
          // Optimistic update or wait for success - for simplicity let's rely on refetch if success action triggers
          // But here, triggering listProductDetails on successDelete would be best.
          // Adding a small timeout to refetch or listening to DELETE_SUCCESS in useEffect would be better
          setTimeout(() => { if(slug) dispatch(listProductDetails(slug)) }, 1000); 
      }
  };

  const startEditReview = (review) => {
      setRating(review.rating);
      setComment(review.comment);
      setEditingReviewId(review._id);
      window.scrollTo({ top: document.querySelector('.tabs-container').offsetTop, behavior: 'smooth' });
  };
const handleReviewClick = () => {
    if (showReviewForm) {
      setShowReviewForm(false);
      return;
    }
    
    if (canReview) {
      setShowReviewForm(true);
    } else {
      setShowEligibilityToast(true);
      setTimeout(() => setShowEligibilityToast(false), 3000);
    }
  };

  
  // Zoom state
  const [isHovered, setIsHovered] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (slug) dispatch(listProductDetails(slug));
    window.scrollTo(0, 0); // Scroll to top on load
  }, [dispatch, slug]);

  useEffect(() => {
    setActiveImageIndex(0);
    setQty(1);
  }, [product]);

  if (loading) {
    return (
      <>
        <div className="loading-container">
           <div className="spinner"></div>
           <p>Loading Product Details...</p>
        </div>
        <style>{`
          .loading-container { padding-top: 120px; padding-bottom: 100px; text-align: center; min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
          .spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #0f3d91; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <div style={{ padding: "120px 20px", textAlign: "center", minHeight: "60vh" }}>
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : [];
  
  const activeImgSrc = images[activeImageIndex];

  const handleAddToCart = () => {
    if (!userInfo) {
       setShowLoginToast(true);
       setTimeout(() => setShowLoginToast(false), 3000);
       return;
    }
    dispatch(addToCart(product.slug || product._id, qty));
    navigate.push('/cart');
  };

  const buyNowHandler = () => {
      if (!userInfo) {
        setShowLoginToast(true);
        setTimeout(() => setShowLoginToast(false), 3000);
        return;
      }
      dispatch(addToCart(product.slug || product._id, qty));
      navigate.push('/cart?redirect=shipping');
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const getOverviewParagraphs = () => {
    if (!product) return [];
    const raw = product.overview || product.description || '';
    if (!raw) return null;
    
    // Decode HTML entities, strip tags, split into readable paragraphs
    const decoded = raw
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<li[^>]*>/gi, '• ')
      .replace(/<[^>]+>/g, '')
      .replace(/[ \t]+/g, ' ')
      .trim();

    // Split on double newlines or sentence-ending pattern followed by a capital letter (new section)
    const paragraphs = decoded
      .split(/\n\n+/)
      .flatMap(block => block.split(/(?<=[.!?])\s+(?=[A-Z])/))
      .map(p => p.trim())
      .filter(p => p.length > 0);

    return paragraphs;
  };
  const overviewParagraphs = getOverviewParagraphs();

  return (
    <div className="pd-wrapper">
      {showEligibilityToast && (
        <div className="fixed top-24 left-4 right-4 md:left-auto md:right-5 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3 animate-fade-in-down">
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="font-bold">Verification Failed</h4>
            <p className="text-sm">Please purchase and receive this item to review.</p>
          </div>
        </div>
      )}

      {/* Login Toast Notification */}
      {showLoginToast && (
        <div className="fixed top-24 left-4 right-4 md:left-auto md:right-5 bg-red-600 text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3 animate-fade-in-down">
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h4 className="font-bold">Access Denied</h4>
            <p className="text-sm">Please login to add items to cart</p>
          </div>
        </div>
      )}
      {/* Updated product details layout with 2-column design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-2 md:mt-6">
        {/* Left Column: Images */}
        <div className="flex flex-col gap-4">
          <div className="relative border border-slate-200 rounded-xl bg-white p-4 md:p-8 aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden">
            {product.countInStock > 0 && (
              <span className="absolute top-4 left-4 bg-[#024AD8] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1.5 z-10">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                IN STOCK
              </span>
            )}
            <div
              className="w-full h-full flex items-center justify-center cursor-crosshair"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={activeImgSrc}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? "scale(1.6)" : "scale(1)",
                  transition: isHovered ? "none" : "transform 0.3s ease",
                }}
              />
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
            {images.map((img, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveImageIndex(i)}
                onClick={() => setActiveImageIndex(i)}
                className={`border rounded-lg p-2 min-w-[80px] w-20 h-20 flex-shrink-0 flex items-center justify-center transition-all bg-white ${i === activeImageIndex ? 'border-[#024AD8] ring-1 ring-[#024AD8]' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <img src={img} alt={`${product.title} view ${i + 1}`} className="max-w-full max-h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col pt-2 overflow-hidden">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3">
            {product.brand && (
              <span className="bg-blue-50 text-[#024AD8] text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">{product.brand}</span>
            )}
            {product.category && (
              <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">{product.category.name || product.category}</span>
            )}
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900 mt-3 md:mt-4 leading-tight tracking-tight">{product.title || product.name}</h1>
          
          <div className="text-3xl md:text-[32px] font-black text-slate-900 mt-3 md:mt-4">${product.price?.toFixed(2)}</div>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="border border-slate-200 text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-[0.15em]">
              TECHNOLOGY: <span className="text-slate-900">INKJET</span>
            </span>
            <span className="border border-slate-200 text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-[0.15em]">
              USE: <span className="text-slate-900">HOME</span>
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 block">QUANTITY</label>
            <div className="flex items-center border border-slate-200 rounded w-max bg-white">
              <button onClick={() => setQty(Math.max(1, qty - 1))} disabled={qty <= 1} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition border-r border-slate-200 font-bold disabled:opacity-50">−</button>
              <input type="text" readOnly value={qty} className="w-12 h-10 text-center font-bold text-sm outline-none bg-transparent" />
              <button onClick={() => setQty(Math.min(product.countInStock, qty + 1))} disabled={qty >= product.countInStock} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition border-l border-slate-200 font-bold disabled:opacity-50">+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6">
            <button 
              className="flex-1 bg-black text-white font-bold text-sm py-3 md:py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed" 
              onClick={handleAddToCart} 
              disabled={product.countInStock === 0}
            >
              <ShoppingCart size={18} strokeWidth={2.5} />
              {product.countInStock === 0 ? "OUT OF STOCK" : "Add to Cart"}
            </button>
            <button 
              className="flex-1 bg-[#024AD8] text-white font-bold text-sm py-3 md:py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#0133a1] transition disabled:opacity-50 disabled:cursor-not-allowed" 
              onClick={buyNowHandler} 
              disabled={product.countInStock === 0}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Buy Now
            </button>
          </div>

          {/* 4 Features Grid */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
            <div className="flex gap-3 items-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#024AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <div>
                <h5 className="text-[11px] font-bold text-slate-800">Free Shipping</h5>
                <p className="text-[9px] text-slate-400 mt-0.5">Orders over $249</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#024AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
              <div>
                <h5 className="text-[11px] font-bold text-slate-800">Easy Returns</h5>
                <p className="text-[9px] text-slate-400 mt-0.5">30-day window</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#024AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <div>
                <h5 className="text-[11px] font-bold text-slate-800">Warranty</h5>
                <p className="text-[9px] text-slate-400 mt-0.5">Manufacturer covered</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#024AD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <div>
                <h5 className="text-[11px] font-bold text-slate-800">Authentic</h5>
                <p className="text-[9px] text-slate-400 mt-0.5">HP authorized</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* TABS SECTION */}
<div className="mt-12 md:mt-20 border-t border-slate-200 pt-8 md:pt-10">
  {/* TAB HEADER */}
  <div className="flex gap-4 md:gap-10 border-b border-slate-200 mb-6 md:mb-10 overflow-x-auto custom-scrollbar">
    {["overview", "specs", "reviews"].map((t) => (
      <button
        key={t}
        onClick={() => setTab(t)}
        className={`pb-4 text-sm font-bold uppercase tracking-wider border-b-4 transition-all whitespace-nowrap
          ${
            tab === t
              ? "text-blue-900 border-blue-900"
              : "text-slate-400 border-transparent hover:text-slate-600"
          }`}
      >
        {t === "specs" ? "Specifications" : t}
      </button>
    ))}
  </div>

  {/* TAB CONTENT */}
  <div className="w-full">
    {/* OVERVIEW */}
    {tab === "overview" && (
      <div className="overview-content animate-fadeIn">
        {overviewParagraphs === null ? (
          <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No overview available for this product.</p>
        ) : (
          overviewParagraphs.map((para, i) => (
            <p key={i} style={{
              fontSize: '15.5px',
              lineHeight: '1.9',
              color: '#475569',
              fontWeight: '400',
              marginBottom: i < overviewParagraphs.length - 1 ? '20px' : '0',
            }}>
              {para}
            </p>
          ))
        )}
      </div>
    )}

    {/* SPECS */}
    {tab === "specs" && (
      <div className="animate-fadeIn">
        {product.technicalSpecification ? (
          <div className="overflow-x-auto custom-scrollbar">
            <div 
              dangerouslySetInnerHTML={{ __html: product.technicalSpecification }} 
              className="html-content text-slate-700 min-w-max md:min-w-0"
            />
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border border-slate-200 rounded-xl overflow-hidden min-w-[400px] md:min-w-0">
              <tbody>
                {[
                  { l: "Brand", v: product.brand },
                  { l: "Category", v: product.category?.name || product.category },
                  { l: "Color", v: product.color },
                  { l: "Screen Size", v: product.screenSize },
                  { l: "Width", v: product.width },
                  { l: "Height", v: product.height },
                  { l: "Depth", v: product.depth },
                ]
                  .filter((row) => row.v)
                  .map((row, i) => (
                    <tr key={i} className="even:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-600 w-1/3">
                        {row.l}
                      </td>
                      <td className="px-6 py-4 text-slate-800">{row.v}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )}

    {/* REVIEWS */}
    {tab === "reviews" && (
      <div className="animate-fadeIn space-y-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-6 border-b pb-6">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="text-yellow-400">
                {"★".repeat(Math.round(product.rating || 0))}
              </div>
              <span className="text-sm text-slate-500">
                {product.rating?.toFixed(1) || "0.0"} / 5
              </span>
            </div>
          </div>

          {userInfo ? (
            !userHasReviewed ? (
                <button
                    onClick={handleReviewClick}
                    className="px-6 py-3 border-2 border-slate-900 rounded-xl font-bold text-xs uppercase hover:bg-slate-900 hover:text-white transition"
                >
                    {showReviewForm ? "Cancel" : "Write Review"}
                </button>
            ) : (
                <div className="px-6 py-3 border border-emerald-100 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-xs uppercase tracking-wider">
                    Feedback shared
                </div>
            )
          ) : (
            <Link href="/signin"
              className="px-6 py-3 border-2 border-slate-200 rounded-xl font-bold text-xs uppercase text-slate-400 hover:text-slate-900"
            >
              Sign in to Review
            </Link>
          )}
        </div>

        {/* REVIEW FORM */}
        {(showReviewForm || editingReviewId) && (
          <form
            onSubmit={submitReviewHandler}
            className="bg-slate-50 p-6 rounded-2xl border space-y-4"
          >
            <div>
              <label className="block text-xs font-bold uppercase mb-2">
                Rating
              </label>
              <div className="flex gap-2 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={
                      rating >= star
                        ? "text-yellow-400"
                        : "text-slate-300 hover:text-yellow-200"
                    }
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <textarea
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 rounded-xl border focus:border-slate-900"
              placeholder="Write your review..."
              required
            />

            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase">
              {editingReviewId ? "Update Review" : "Submit Review"}
            </button>
          </form>
        )}

        {/* REVIEW LIST */}
        {product.reviews?.length > 0 ? (
          <div className="space-y-8">
            {product.reviews.map((r) => (
              <div key={r._id} className="border-b pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold">
                      {r.name?.charAt(0) || "U"}
                    </div>
                    <div>
                      <p className="font-bold uppercase text-sm">
                        {r.name || "Anonymous"}
                      </p>
                      <div className="text-yellow-400 text-xs">
                        {"★".repeat(r.rating)}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">
                    {r.createdAt?.substring(0, 10)}
                  </span>
                </div>

                <p className="text-slate-600 italic pl-14">
                  “{r.comment}”
                </p>

                {userInfo && r.user === userInfo._id && (
                  <div className="pl-14 mt-3 flex gap-4 text-xs font-bold uppercase">
                    <button
                      onClick={() => startEditReview(r)}
                      className="hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteReviewHandler(r._id)}
                      className="text-rose-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 uppercase text-xs ">
            No reviews yet
          </p>
        )}
      </div>
    )}
  </div>
</div>

        {/* RELATED PRODUCTS */}
        {relatedProducts && relatedProducts.filter(p => p._id !== product._id).length > 0 && (
          <div className="related-section">
            <div className="related-header">
              <span className="related-label">Similar Products</span>
              <h2 className="related-title">You Might Also Like</h2>
            </div>
            <div className="related-grid">
              {relatedProducts
                .filter(p => p._id !== product._id)
                .slice(0, 4)
                .map(p => {
                  const relImg = p.images?.[0] || p.image || 'https://via.placeholder.com/300x300?text=Product';
                  const relPrice = typeof p.price === 'number' ? p.price.toFixed(2) : p.price;
                  const relInStock = p.countInStock > 0;
                  return (
                    <Link
                      href={`/product/${p.slug || p._id}`}
                      key={p._id}
                      className="related-card"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="related-img-box">
                        <img src={relImg} alt={p.title || p.name} onError={e => e.target.src = 'https://via.placeholder.com/300x300?text=Product'} />
                      </div>
                      <div className="related-info">
                        {p.brand && <span className="related-brand">{p.brand}</span>}
                        <h4 className="related-name">{p.title || p.name}</h4>
                        <div className="related-footer">
                          <span className="related-price">${relPrice}</span>
                          <span className={`related-stock ${relInStock ? 'in' : 'out'}`}>
                            {relInStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}

        {/* CSS STYLES */}
        <style>{`
          .pd-wrapper { padding: 40px 20px 80px; max-width: 1400px; margin: 0 auto; font-family: 'Inter', sans-serif; color: #1e293b; overflow-x: hidden; }
          .related-section { margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 32px; }
          @media (min-width: 768px) {
            .related-section { margin-top: 80px; padding-top: 40px; }
          }
          .related-header { margin-bottom: 24px; }
          @media (min-width: 768px) {
            .related-header { margin-bottom: 32px; }
          }
          .related-label { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.1em; color: #64748b; text-transform: uppercase; margin-bottom: 8px; }
          .related-title { font-size: 20px; font-weight: 800; }
          @media (min-width: 768px) {
            .related-title { font-size: 24px; }
          }
          .related-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
          .related-card { display: block; background: #fff; border: 1px solid #f1f5f9; border-radius: 16px; overflow: hidden; transition: transform 0.2s; }
          .related-card:hover { transform: translateY(-4px); }
          .related-img-box { aspect-ratio: 1; background: #f8fafc; overflow: hidden; }
          .related-img-box img { width: 100%; height: 100%; object-fit: cover; }
          .related-info { padding: 12px; }
          @media (min-width: 768px) {
            .related-info { padding: 16px; }
          }
          .related-brand { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; }
          .related-name { font-size: 13px; font-weight: 600; margin: 4px 0 8px; height: 38px; overflow: hidden; }
          @media (min-width: 768px) {
            .related-name { font-size: 14px; margin: 4px 0 12px; height: 40px; }
          }
          .related-footer { display: flex; justify-content: space-between; align-items: center; }
          .related-price { font-weight: 800; color: #0f172a; font-size: 14px;}
          .related-stock { font-size: 9px; font-weight: 700; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; }
          @media (min-width: 768px) {
            .related-stock { font-size: 10px; padding: 2px 8px; }
          }
          .related-stock.in { background: #ecfdf5; color: #059669; }
          .related-stock.out { background: #fef2f2; color: #e11d48; }
          @media (max-width: 1024px) { .related-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 580px) { .related-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
          @media (max-width: 400px) { .related-grid { grid-template-columns: 1fr; gap: 16px; } }
          .overview-content { max-width: 800px; padding: 8px 0 24px; word-wrap: break-word; }
          .html-content table { width: 100%; min-width: 600px; }
          @media (max-width: 1024px) {
            .pd-wrapper { padding-top: 20px; }
          }
          @media (max-width: 480px) {
             .pd-wrapper { padding: 24px 16px 40px; }
          }
        `}</style>
      </div>
  );
};

export default ProductDetails;
