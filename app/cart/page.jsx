"use client";

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { removeFromCart, addToCart } from "@/redux/actions/cartActions";
import { ShoppingCart, Trash2, Lock } from 'lucide-react';
import './Cart.css';

const Cart = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [giftWrap, setGiftWrap] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);
    const totalWithGift = subtotal + (giftWrap ? 10 : 0);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="cart-page">
            {/* ── Header ── */}
            <header className="cart-hero-elite">
                <div className="cart-hero-container">
                    <span className="cart-hero-badge">Shopping Cart</span>
                    <h1>Your <span style={{ color: '#60a5fa' }}>Cart</span></h1>
                    <p>
                        Review your items and proceed to checkout when you&apos;re ready.
                        {cartCount > 0 && <> &nbsp;·&nbsp; <strong style={{ color: '#fff' }}>{cartCount} {cartCount === 1 ? 'item' : 'items'}</strong></>}
                    </p>
                </div>
            </header>

            <main className="cart-section">
                <div className="cart-container-elite">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-elite">
                            <ShoppingCart size={48} style={{ color: '#cbd5e1', margin: '0 auto 20px', display: 'block' }} />
                            <h2>Your cart is empty</h2>
                            <p className="shopping-hub-subtitle" style={{ marginBottom: '28px' }}>
                                Looks like you haven&apos;t added anything yet. Browse our printers and ink to get started.
                            </p>
                            <Link href="/printers" className="checkout-btn-elite" style={{ display: 'inline-block', width: 'auto', padding: '14px 36px', textDecoration: 'none' }}>
                                Shop Printers
                            </Link>
                        </div>
                    ) : (
                        <div className="cart-grid-elite">

                            {/* ── LEFT: Items ── */}
                            <div className="cart-items-panel">
                                {/* Table header */}
                                <div className="hidden lg:grid grid-cols-12 gap-4 px-7 py-4 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider rounded-t-xl">
                                    <span className="col-span-6">Product</span>
                                    <span className="col-span-2 text-center">Price</span>
                                    <span className="col-span-2 text-center">Quantity</span>
                                    <span className="col-span-2 text-right">Remove</span>
                                </div>

                                {cartItems.map((item) => (
                                    <div key={item.product} className="cart-item-row">
                                        {/* Product info */}
                                        <div className="cart-product-info">
                                            <div className="item-img-box">
                                                <img
                                                    src={item.image?.startsWith('http') ? item.image : (item.image ? `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${item.image}` : 'https://placehold.co/80x80?text=+')}
                                                    alt={item.title}
                                                    onError={e => e.target.src = 'https://placehold.co/80x80?text=+'}
                                                />
                                            </div>
                                            <div className="item-text">
                                                <Link href={`/product/${item.slug || item.product}`}>
                                                    <h3>{item.title}</h3>
                                                </Link>
                                                <div className="item-status">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" style={{ animation: 'pulse 2s infinite' }}></span>
                                                    In Stock
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div style={{ textAlign: 'center' }}>
                                            <span className="sum-val">${item.price.toFixed(2)}</span>
                                        </div>

                                        {/* Qty */}
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div className="qty-control">
                                                <button
                                                    className="qty-btn"
                                                    disabled={item.qty <= 1}
                                                    onClick={() => dispatch(addToCart(item.product, Math.max(1, Number(item.qty) - 1)))}
                                                >−</button>
                                                <span className="qty-val">{item.qty}</span>
                                                <button
                                                    className="qty-btn"
                                                    disabled={item.qty >= item.countInStock}
                                                    onClick={() => dispatch(addToCart(item.product, Math.min(item.countInStock, Number(item.qty) + 1)))}
                                                >+</button>
                                            </div>
                                        </div>

                                        {/* Remove */}
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <button
                                                className="remove-item-btn"
                                                onClick={() => dispatch(removeFromCart(item.product))}
                                                title="Remove item"
                                            >
                                                <Trash2 size={17} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ── RIGHT: Summary ── */}
                            <div className="summary-panel-elite">
                                <h2>Order Summary</h2>

                                <div className="summary-row">
                                    <span className="sum-label">Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
                                    <span className="sum-val">${subtotal.toFixed(2)}</span>
                                </div>

                                {/* Gift wrap option */}
                                <div className="summary-row gift-wrap-option" onClick={() => setGiftWrap(!giftWrap)}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div className={`gift-checkbox ${giftWrap ? 'active' : 'inactive'}`}>
                                            {giftWrap && (
                                                <svg width="11" height="11" viewBox="0 0 20 20" fill="white">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                </svg>
                                            )}
                                        </div>
                                        <span className="sum-label">Gift wrapping</span>
                                    </div>
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>+$10.00</span>
                                </div>

                                <div className="total-row-elite">
                                    <span className="total-label">Total</span>
                                    <span className="total-val">${totalWithGift.toFixed(2)}</span>
                                </div>

                                <p className="logistics-notice" style={{ marginTop: '10px', marginBottom: '0' }}>
                                    Shipping and taxes calculated at checkout
                                </p>

                                <button onClick={() => router.push('/checkout')} className="checkout-btn-elite">
                                    Proceed to Checkout
                                </button>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '14px', opacity: 0.5 }}>
                                    <Lock size={12} />
                                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', letterSpacing: '0.3px' }}>
                                        Secure 256-bit SSL encryption
                                    </span>
                                </div>

                                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                                    <Link href="/printers" style={{ fontSize: '13px', color: '#024ad8', fontWeight: 600, textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                                        ← Continue Shopping
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Cart;
