"use client";

import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
    Search, Package, Truck, MapPin, CheckCircle, 
    AlertCircle, User, Mail, ShoppingCart, 
    ArrowRight, Info, Clock, Globe, XCircle
} from "lucide-react";
import './TrackOrder.css';

const TrackOrderContent = () => {
    const searchParams = useSearchParams();
    const urlId = searchParams.get('id');

    const [orderId, setOrderId] = useState(urlId || "");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach(el => observer.observe(el));

        if (urlId) {
            handleTrack(null, urlId);
        }

        return () => observer.disconnect();
    }, [urlId]);

    const handleTrack = async (e, idOverride) => {
        if (e) e.preventDefault();
        const idToUse = idOverride || orderId;
        const cleanId = idToUse.replace('#', '').replace('ORD-', '').trim();
        if (!cleanId) return;

        try {
            setLoading(true);
            setError(null);
            setOrder(null);
            
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
            const { data } = await axios.get(`${baseUrl}/orders/${cleanId}`);
            setOrder(data);
            setLoading(false);
            
            // Force reveal animation for new content
            setTimeout(() => {
                const results = document.querySelectorAll('.order-result-card.reveal');
                results.forEach(el => el.classList.add('revealed'));
            }, 100);
        } catch (err) {
            setError(err.response?.data?.message || "Order not found. Please check your Order ID.");
            setLoading(false);
        }
    };

    const getStatusStep = (status) => {
        if (status === 'Cancelled') return -1;
        switch (status) {
            case 'Processing': return 1;
            case 'Shipped': return 2;
            case 'Out for Delivery': return 3;
            case 'Delivered': return 4;
            default: return 1; 
        }
    };

    const currentStep = order ? getStatusStep(order.status) : 0;
    const steps = [
        { label: 'Logged', icon: Package },
        { label: 'Outbound', icon: Truck },
        { label: 'In Transit', icon: MapPin },
        { label: 'Final Delivery', icon: CheckCircle },
    ];

    return (
        <div className="track-order-page">
            <main>
                {/* --- HERO SECTION --- */}
                <header className="track-hero-elite">
                    <div className="track-hero-container">
                        <div className="reveal">
                            <span className="track-hero-badge">Logistics Terminal</span>
                            <h1 className="track-hero-title">Track Your <br/> <span className="text-blue-500">Order.</span></h1>
                            <p className="track-hero-desc">
                                Professional monitoring for your precision equipment. Enter your unique order 
                                identifier to access real-time status and delivery telemetry.
                            </p>
                            
                            <form className="track-search-form" onSubmit={handleTrack}>
                                <div className="track-input-wrap">
                                    <Search className="track-input-icon" size={20} />
                                    <input 
                                        type="text" 
                                        placeholder="Order ID (e.g., #IK-12345)" 
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="track-submit-btn" disabled={loading}>
                                    {loading ? 'Querying...' : 'Trace Order'}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="track-hero-accent"></div>
                </header>

                <section className="track-results-section">
                    <div className="container mx-auto max-w-5xl px-6 py-20">
                        {loading && (
                            <div className="loading-state py-20 text-center">
                                <div className="track-spinner mx-auto mb-6"></div>
                                <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Querying Global Servers...</p>
                            </div>
                        )}

                        {error && (
                            <div className="error-card-premium reveal py-12 px-8 bg-red-50 rounded-3xl border border-red-100 text-center">
                                <XCircle className="mx-auto mb-4 text-red-500" size={48} />
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Poppins']">Trace Error</h3>
                                <p className="text-red-600 font-medium">{error}</p>
                            </div>
                        )}

                        {order && (
                            <div className="order-result-card reveal">
                                <div className="card-header-luxury">
                                    <div className="header-info">
                                        <span className="order-label">Order Reference</span>
                                        <h2 className="order-id">ORD-{order._id.substring(19).toUpperCase()}</h2>
                                    </div>
                                    <div className={`status-pill ${order.status.toLowerCase().replace(/ /g, '-')}`}>
                                        {order.status}
                                    </div>
                                </div>

                                <div className="tracking-timeline-luxury">
                                    {currentStep === -1 ? (
                                        <div className="cancelled-notice">
                                            <AlertCircle size={24} />
                                            <div>
                                                <h3>Order Cancelled</h3>
                                                <p>This fulfillment sequence has been terminated.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="timeline-steps">
                                            {steps.map((step, idx) => {
                                                const stepNum = idx + 1;
                                                const isCompleted = stepNum <= currentStep;
                                                const isCurrent = stepNum === currentStep;
                                                
                                                return (
                                                    <div key={idx} className={`timeline-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}>
                                                        <div className="step-marker">
                                                            <step.icon size={20} />
                                                            {isCompleted && !isCurrent && <div className="step-check"><CheckCircle size={14} /></div>}
                                                        </div>
                                                        <span className="step-label">{step.label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                <div className="order-details-grid">
                                    <div className="details-col">
                                        <h4 className="details-title">Shipping Terminal</h4>
                                        <div className="details-content">
                                            <div className="detail-item">
                                                <User size={16} />
                                                <span>{order.shippingAddress.name || order.user?.name}</span>
                                            </div>
                                            <div className="detail-item">
                                                <MapPin size={16} />
                                                <span>{order.shippingAddress.address}, {order.shippingAddress.city}</span>
                                            </div>
                                            <div className="detail-item">
                                                <Globe size={16} />
                                                <span>{order.shippingAddress.country}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="details-col">
                                        <h4 className="details-title">Order Logistics</h4>
                                        <div className="details-content">
                                            <div className="detail-item">
                                                <Clock size={16} />
                                                <span>Placed: {new Date(order.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <div className="detail-item">
                                                <Truck size={16} />
                                                <span>Carrier: Standard Ground</span>
                                            </div>
                                            <div className="detail-item">
                                                <Info size={16} />
                                                <span>Service: Professional Fulfillment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-items-luxury">
                                    <h4 className="items-title">Equipment Summary</h4>
                                    <div className="items-list">
                                        {order.orderItems.map((item, idx) => (
                                            <div key={idx} className="item-row">
                                                <div className="item-main">
                                                    <div className="item-img-wrap">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="item-info">
                                                        <span className="item-category">InkKart Asset</span>
                                                        <h5 className="item-name">{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="item-meta">
                                                    <span className="item-qty">QTY: {item.qty}</span>
                                                    <span className="item-price">${item.price.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="order-total-luxury">
                                        <div className="total-row">
                                            <span>Subtotal</span>
                                            <span>${order.itemsPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="total-row">
                                            <span>Logistics</span>
                                            <span>${order.shippingPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="total-row final">
                                            <span>Grand Total</span>
                                            <span>${order.totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

const TrackOrder = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
                <div className="track-spinner"></div>
            </div>
        }>
            <TrackOrderContent />
        </Suspense>
    );
};

export default TrackOrder;
