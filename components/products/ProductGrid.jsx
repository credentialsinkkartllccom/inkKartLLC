"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts('', '', 1));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="elite-loading">
         <div className="elite-spinner"></div>
         <p>SYNCHRONIZING INVENTORY</p>
         <style>{`
            .elite-loading { text-align: center; padding: 100px; width: 100%; display: flex; flex-direction: column; align-items: center; background: #fff; }
            .elite-spinner { width: 40px; height: 40px; border: 2px solid #eee; border-top: 2px solid #0096D6; border-radius: 50%; animation: spin 0.8s cubic-bezier(0.16, 1, 0.3, 1) infinite; margin-bottom: 20px; }
            .elite-loading p { font-family: 'DM Sans'; font-weight: 900; font-size: 10px; letter-spacing: 5px; color: #111; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
         `}</style>
      </div>
    );
  }

  if (error) {
     return <div className="elite-error">INTEGRITY ERROR: {error}</div>;
  }

  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div className="elite-grid-full">
      {safeProducts.map(p => (
        <ProductCard key={p._id || p.id} product={p} />
      ))}
      <style>{`
        .elite-grid-full {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5px;
          background: #f0f0f0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
          margin: 40px 0;
        }

        .elite-grid-full > div {
           background: #fff;
        }

        .elite-error {
           padding: 100px;
           text-align: center;
           color: #ef4444;
           font-family: 'DM Sans';
           font-weight: 900;
           font-size: 12px;
           letter-spacing: 5px;
           text-transform: uppercase;
           background: #fff;
        }

        @media (max-width: 1400px) {
          .elite-grid-full { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 1000px) {
          .elite-grid-full { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .elite-grid-full { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;


