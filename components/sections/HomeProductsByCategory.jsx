"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import ProductCard from '../products/ProductCard';
import { Loader2, ChevronRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const HomeProductsByCategory = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        // Fetch a larger batch to ensure we have enough for both sections after filtering
        dispatch(listProducts('', '', 1, '', 40));
    }, [dispatch]);

    const getPrinters = () => {
        if (!products) return [];
        return products.filter(p => {
            const catName = (p.category?.name || p.category || '').toLowerCase();
            const fullName = (p.title || p.name || '').toLowerCase();
            
            // Inclusive printer check (Hardware)
            const isPrinterCat = catName.match(/printer|inkjet|laser|all in one|format|hardware/i);
            const isConsumable = catName.includes('ink') || catName.includes('toner');
            const hasPrinterTerms = fullName.match(/printer|mfp|laserjet|deskjet|designjet/i) && !fullName.match(/cartridge|ink|toner|tank/i);
            
            return (isPrinterCat && !isConsumable) || hasPrinterTerms;
        }).slice(0, 4);
    };

    const getInkToner = () => {
        if (!products) return [];
        return products.filter(p => {
            const catName = (p.category?.name || p.category || '').toLowerCase();
            const fullName = (p.title || p.name || '').toLowerCase();
            
            // Consumable check (Liquid & Powder)
            const isInkCat = catName.includes('ink') || catName.includes('toner') || catName.includes('supply');
            const hasInkTerms = fullName.match(/ink|toner|cartridge|supply|tank|bottle/i);
            
            return isInkCat || hasInkTerms;
        }).slice(0, 4);
    };

    const printerProducts = getPrinters();
    const inkTonerProducts = getInkToner();

    return (
        <section className="home-products-section">
            <div className="section-container">
                <div className="products-hero-header reveal">
                    <span className="section-badge">Featured Inventory</span>
                    <h2 className="section-title">Ink Kart LLC <span className="text-[var(--accent)]">Premium.</span></h2>
                </div>

                {loading ? (
                    <div className="loader-container">
                        <Loader2 className="animate-spin text-[var(--accent)]" size={40} />
                        <p>Synchronizing Asset Database...</p>
                    </div>
                ) : error ? (
                    <div className="error-container">
                        <p>{error}</p>
                    </div>
                ) : (
                    <>
                        {/* Hardware Systems / Printers Section */}
                        <div className="category-block reveal">
                            <div className="block-header">
                                <div className="header-text">
                                    <span className="block-label">Hardware Systems</span>
                                    <h3 className="block-title">Printers</h3>
                                </div>
                                <Link href="/printers" className="view-more-link">
                                    Explore Full Collection <ChevronRight size={16} />
                                </Link>
                            </div>
                            
                            <div className="products-grid-elite">
                                {printerProducts.length > 0 ? (
                                    printerProducts.map((product) => (
                                        <ProductCard key={product._id} product={product} />
                                    ))
                                ) : (
                                    <div className="no-products-mini">
                                        <ShoppingBag size={32} className="text-slate-200 mb-4" />
                                        <p>Hardware allocations pending.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Liquid & Powder Tech / Ink & Toner Section */}
                        <div className="category-block reveal" style={{ marginTop: '100px' }}>
                            <div className="block-header">
                                <div className="header-text">
                                    <span className="block-label">Liquid & Powder Tech</span>
                                    <h3 className="block-title">Ink & Toner</h3>
                                </div>
                                <Link href="/ink-toner" className="view-more-link">
                                    Explore Full Collection <ChevronRight size={16} />
                                </Link>
                            </div>
                            
                            <div className="products-grid-elite">
                                {inkTonerProducts.length > 0 ? (
                                    inkTonerProducts.map((product) => (
                                        <ProductCard key={product._id} product={product} />
                                    ))
                                ) : (
                                    <div className="no-products-mini">
                                        <ShoppingBag size={32} className="text-slate-200 mb-4" />
                                        <p>Substance allocations pending.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <style>{`
                .home-products-section {
                    padding: 120px 0;
                    background: #fbfbfb;
                    overflow: hidden;
                }
                .section-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 30px;
                }
                .products-hero-header {
                    text-align: center;
                    margin-bottom: 100px;
                }
                .section-badge {
                    font-family: 'DM Sans';
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    color: #0096D6;
                    display: block;
                    margin-bottom: 15px;
                }
                .section-title {
                    font-family: 'DM Sans';
                    font-size: 42px;
                    font-weight: 950;
                    text-transform: uppercase;
                    letter-spacing: -1.5px;
                    color: #111;
                    line-height: 1;
                    margin: 0;
                }

                .category-block {
                    position: relative;
                }
                .block-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 50px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 30px;
                }
                .block-label {
                    display: block;
                    font-family: 'DM Sans';
                    font-size: 8px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #0096D6;
                    margin-bottom: 8px;
                }
                .block-title {
                    font-family: 'DM Sans';
                    font-size: 28px;
                    font-weight: 950;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #111;
                    margin: 0;
                }
                .view-more-link {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'DM Sans';
                    font-weight: 900;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #4A6FA5;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .view-more-link:hover {
                    color: #111;
                    transform: translateX(5px);
                }

                .products-grid-elite {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                .loader-container {
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .loader-container p {
                    font-family: 'DM Sans';
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-top: 20px;
                    color: rgba(255,255,255,0.6);
                }
                .no-products-mini {
                    grid-column: span 4;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #fff;
                    border: 1px dashed #eee;
                    border-radius: 4px;
                }
                .no-products-mini p {
                    font-family: 'DM Sans';
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: rgba(255,255,255,0.8);
                }

                @media (max-width: 1280px) {
                    .products-grid-elite { grid-template-columns: repeat(3, 1fr); }
                }

                @media (max-width: 1024px) {
                    .products-grid-elite { grid-template-columns: repeat(2, 1fr); }
                    .block-title { font-size: 24px; }
                }

                @media (max-width: 768px) {
                    .home-products-section { padding: 80px 0; }
                    .section-title { font-size: 32px; }
                    .block-header { flex-direction: column; align-items: flex-start; gap: 20px; }
                    .view-more-link { width: 100%; border-top: 1px solid #eee; padding-top: 15px; }
                }

                @media (max-width: 480px) {
                    .products-grid-elite { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default HomeProductsByCategory;
