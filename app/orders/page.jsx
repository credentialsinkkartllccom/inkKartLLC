"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { listMyOrders } from '@/redux/actions/orderActions';
import { FiPackage, FiTruck, FiCheckCircle, FiClock, FiAlertCircle, FiCopy, FiChevronRight } from "react-icons/fi";
import './MyOrders.css';

const MyOrders = () => {
    const dispatch = useDispatch();
    const navigate = useRouter();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading, error, orders } = orderListMy;

    useEffect(() => {
        if (!userInfo) {
            navigate('/signin');
        } else {
            dispatch(listMyOrders());
        }
    }, [dispatch, navigate, userInfo]);

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
    }, [orders]);

    return (
        <div className="orders-page">
            <header className="orders-hero-elite reveal">
                <div className="orders-hero-container">
                    <p>Asset Deployment History</p>
                    <h1>My <span className="text-[var(--accent)]">Orders</span></h1>
                    <p className="mt-4">Authorized Secure Terminal • Historical Deployment Registry</p>
                </div>
            </header>

            <main className="orders-main-section">
                <div className="orders-container-elite">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 reveal">
                            <div className="w-12 h-12 border-4 border-slate-100 border-t-[#0096D6] rounded-full animate-spin mb-4"></div>
                            <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400">Synchronizing History...</p>
                        </div>
                    ) : error ? (
                        <div className="p-10 border border-red-50 text-center reveal">
                            <FiAlertCircle className="mx-auto text-red-500 text-3xl mb-4" />
                            <h3 className="text-red-800 font-bold uppercase tracking-widest text-[10px] mb-4">Error Synchronizing Registry</h3>
                            <button
                                onClick={() => dispatch(listMyOrders())}
                                className="px-8 py-3 bg-[var(--primary)] text-white font-black uppercase tracking-widest text-[10px] border-none cursor-pointer"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : orders && orders.length === 0 ? (
                        <div className="p-20 border border-[#f0f0f0] text-center reveal">
                            <FiPackage className="mx-auto text-slate-200 text-5xl mb-10" />
                            <h2 className="font-black text-2xl uppercase tracking-tighter mb-4">Registry Empty</h2>
                            <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-10">No hardware assets have been allocated to this profile.</p>
                            <Link href="/printers"
                                className="inline-block px-12 py-5 bg-[var(--primary)] text-white font-black uppercase tracking-[4px] text-[10px] no-underline hover:bg-[var(--accent)] transition-all"
                            >
                                Browse Inventory
                            </Link>
                        </div>
                    ) : (
                        <div className="orders-list-elite">
                            {orders.map((order, idx) => (
                                <div key={order._id} className={`order-card-elite reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                                    <div className="order-header-elite">
                                        <div className="header-meta-group">
                                            <div className="meta-item">
                                                <span className="meta-label">ID Registry</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="meta-value font-mono">#{order._id.slice(-8).toUpperCase()}</span>
                                                    <FiCopy
                                                        className="cursor-pointer text-slate-400 hover:text-[var(--accent)]"
                                                        onClick={() => navigator.clipboard.writeText(order._id)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Deployment Date</span>
                                                <span className="meta-value">{new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Asset Value</span>
                                                <span className="meta-value">${order.totalPrice.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <div className="status-badge-elite-container">
                                            {order.isDelivered ? (
                                                <span className="status-badge-elite success">Delivered</span>
                                            ) : order.isPaid ? (
                                                <span className="status-badge-elite processing">Processing</span>
                                            ) : (
                                                <span className="status-badge-elite pending">Pending</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="order-body-elite">
                                        <div className="order-items-preview">
                                            {order.orderItems.slice(0, 2).map((item, index) => (
                                                <div key={index} className="preview-item-box">
                                                    <div className="preview-img">
                                                        <img
                                                            src={item.image.startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${item.image}`}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                    <div className="preview-details">
                                                        <Link href={`/product/${item.slug || item.product}`} className="no-underline">
                                                            <h4>{item.name}</h4>
                                                        </Link>
                                                        <p className="font-black uppercase tracking-widest">Qty: {item.qty} × ${item.price}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {order.orderItems.length > 2 && (
                                                <p className="text-[9px] font-black uppercase tracking-widest text-[var(--accent)] ml-20">+ {order.orderItems.length - 2} Additional Assets</p>
                                            )}
                                        </div>

                                        <div className="order-actions-elite">
                                            <Link href={`/order/${order._id}`}
                                                className="order-btn-elite btn-primary-elite no-underline"
                                            >
                                                Full Registry
                                            </Link>
                                            <Link href={`/track-order?id=${order._id}`}
                                                className="order-btn-elite btn-secondary-elite no-underline"
                                            >
                                                Track Order
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default MyOrders;
