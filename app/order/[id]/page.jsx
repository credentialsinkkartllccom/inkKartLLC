"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { getOrderDetails } from '@/redux/actions/orderActions';
import { FiPackage, FiTruck, FiCheckCircle, FiClock, FiMapPin, FiCalendar, FiArrowLeft, FiAlertCircle, FiCopy } from "react-icons/fi";
import './OrderDetails.css';

const OrderDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useRouter();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, [dispatch, id]);

    // Activate reveal animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('revealed');
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [order]);

    // Calculate step for timeline
    const getStatusStep = (status) => {
        if (status === 'Cancelled' || status === 'Failed') return -1;
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
        { label: 'Asset Placed', icon: FiClock },
        { label: 'Logistics Ready', icon: FiTruck },
        { label: 'Out for Deployment', icon: FiMapPin },
        { label: 'Deployed', icon: FiCheckCircle },
    ];

    if (loading) return (
        <div className="order-details-page">
            <div className="flex flex-col items-center justify-center py-40">
                <div className="w-12 h-12 border-4 border-slate-100 border-t-[#0096D6] rounded-full animate-spin mb-4"></div>
                <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400">Authenticating Access...</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="order-details-page">
            <div className="p-20 text-center">
                <FiAlertCircle className="mx-auto text-red-500 text-3xl mb-4" />
                <h3 className="text-red-800 font-bold uppercase tracking-widest text-[10px] mb-4">Error Accessing Registry</h3>
                <Link href="/orders" className="text-[10px] font-black underline uppercase tracking-widest">Back to Directory</Link>
            </div>
        </div>
    );

    if (!order) return null;

    return (
        <div className="order-details-page">
            <header className="order-details-hero-elite reveal">
                <div className="order-details-hero-container">
                    <p>#{order._id.toUpperCase()}</p>
                    <h1>Order <span className="text-[var(--accent)]">Details</span></h1>
                    <div className="flex items-center justify-center gap-6 mt-6">
                        <Link href="/orders" className="flex items-center gap-2 text-[10px] font-black text-white hover:text-[var(--accent)] no-underline uppercase tracking-widest">
                            <FiArrowLeft /> Back to Directory
                        </Link>
                        <span className="w-1 h-1 bg-[var(--bg)]/20"></span>
                        <div className="flex items-center gap-2 text-[10px] font-black text-[var(--accent)] uppercase tracking-widest">
                            <FiCalendar /> {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                    </div>
                </div>
            </header>

            <main className="order-details-main">
                <div className="order-details-container-elite">
                    <div className="order-details-grid-elite">
                        
                        {/* LEFT: Timeline & Items */}
                        <div className="main-side reveal-left">
                            <section className="timeline-card-elite">
                                <div className="flex justify-between items-center mb-12 pb-6 border-b border-f0f0f0">
                                    <h3 className="font-black text-xs uppercase tracking-widest">Deployment Timeline</h3>
                                    <span className={`px-4 py-2 border font-black text-[9px] uppercase tracking-[2px] ${
                                        order.isDelivered ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                                        order.isPaid ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                                    }`}>
                                        {order.status || (order.isDelivered ? 'Delivered' : 'Processing')}
                                    </span>
                                </div>

                                <div className="timeline-elite">
                                    {currentStep === -1 ? (
                                        <div className="flex items-center gap-4 p-4 bg-red-50 border border-red-100">
                                            <FiAlertCircle className="text-red-500" size={24} />
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-red-900 tracking-widest">Deployment Failed</p>
                                                <p className="text-[9px] font-bold text-red-600 uppercase tracking-widest mt-1">This operation has been terminated. Please contact support.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="timeline-line-bg"></div>
                                            <div className="timeline-line-active" style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}></div>
                                            
                                            {steps.map((step, index) => (
                                                <div key={index} className={`timeline-step-elite ${index < currentStep ? 'active' : ''} ${index === currentStep - 1 ? 'current' : ''}`}>
                                                    <div className="step-icon-box">
                                                        <step.icon size={16} />
                                                    </div>
                                                    <span className="step-label-elite">{step.label}</span>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </section>

                            <section className="items-card-elite">
                                <div className="items-header-elite">
                                    <h3>Order Assets</h3>
                                </div>
                                <div className="items-list-elite">
                                    {order.orderItems.map((item, index) => (
                                        <div key={index} className="order-item-detail-row">
                                            <div className="w-20 h-20 bg-[#fbfbfb] border border-[#f0f0f0] p-4 flex items-center justify-center">
                                                <img 
                                                    src={item.image.startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${item.image}`} 
                                                    alt={item.name} 
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="item-info">
                                                <Link href={`/product/${item.product}`} className="no-underline">
                                                    <h4 className="font-black text-sm uppercase text-[var(--primary)] hover:text-[var(--accent)] transition-colors">{item.name}</h4>
                                                </Link>
                                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-2">Qty: {item.qty} Unit(s)</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-black text-lg">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT: Informational Sidebar */}
                        <div className="sidebar-side reveal-right">
                            <div className="space-y-10">
                                <section className="info-panel-elite">
                                    <h3>Shipping Registry</h3>
                                    <div className="info-content-elite">
                                        <p><strong>Recipient:</strong> {order.user?.name || order.shippingAddress.name || 'N/A'}</p>
                                        <p><strong>Protocol:</strong> {order.shippingAddress.address}</p>
                                        <p><strong>Region:</strong> {order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                                        <p><strong>Coordinates:</strong> {order.shippingAddress.country}</p>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-f0f0f0">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-4">Verification ID</span>
                                        <div className="flex items-center justify-between p-4 bg-[#fbfbfb] border border-[#f0f0f0]">
                                            <span className="font-mono text-[11px] font-bold text-slate-600 truncate mr-4">{order._id.toUpperCase()}</span>
                                            <FiCopy className="cursor-pointer text-slate-400 hover:text-black" onClick={() => navigator.clipboard.writeText(order._id)} />
                                        </div>
                                    </div>
                                </section>

                                <section className="info-panel-elite">
                                    <h3>Payment Summary</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <span>Subtotal</span>
                                            <span className="text-black">${order.itemsPrice?.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <span>Logistics Allocation</span>
                                            <span className="text-black">${order.shippingPrice?.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <span>Regulatory Assess.</span>
                                            <span className="text-black">${order.taxPrice?.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="pt-8 mt-8 border-t-2 border-dashed border-f0f0f0 flex justify-between items-end">
                                        <span className="font-black uppercase tracking-[4px] text-xs">Final Invoice</span>
                                        <span className="text-4xl font-black tracking-tighter">${order.totalPrice?.toFixed(2)}</span>
                                    </div>
                                    <div className={`mt-8 p-4 text-center font-black text-[9px] uppercase tracking-widest border ${
                                        order.isPaid ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-red-50 text-red-700 border-red-100'
                                    }`}>
                                        {order.isPaid ? 'Payment Authorized' : 'Payment Not Confirmed'}
                                    </div>

                                    {!order.isPaid && (
                                        <div className="mt-8 pt-8 border-t border-f0f0f0">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-4">Finalize Next Payment Process</span>
                                            <button 
                                                onClick={() => navigate(`/checkout/payment/${order._id}`)}
                                                className="w-full py-5 bg-[var(--primary)] text-white font-black text-[10px] uppercase tracking-[4px] hover:bg-[var(--accent)] transition-all border-none cursor-pointer"
                                            >
                                                Proceed to Payment Terminal
                                            </button>
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderDetails;
