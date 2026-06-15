"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '@/redux/actions/productActions';
import { Filter as FiFilter } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import ProductFilterSidebar from '@/components/products/ProductFilterSidebar';

const InkTonerContent = () => {
    const dispatch = useDispatch();
    const navigate = useRouter();
    const searchParams = useSearchParams();

    const productList = useSelector((state) => state.productList || {});
    const { loading, error, products, page: reduxPage, pages: totalPages } = productList;

    const [sortBy, setSortBy] = useState('featured');
    const [allProducts, setAllProducts] = useState([]);
    const [currPage, setCurrPage] = useState(1);

    // Filter states
    const [filters, setFilters] = useState({
        search: searchParams.get('search') || '',
        brand: [],
        category: [],
        printerType: [],
        useCase: [],
        priceRange: { min: 0, max: 1000 },
        rating: 0
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Guaranteed visibility: Pull larger batch and then manual filter
    useEffect(() => {
        setAllProducts([]);
        setCurrPage(1);
        dispatch(listProducts(filters.search, '', 1, '', 100));
    }, [dispatch, filters.search]);

    useEffect(() => {
        if (products && Array.isArray(products) && !loading) {
            if (reduxPage === 1) {
                setAllProducts(products);
            } else {
                setAllProducts(prev => {
                    const existingIds = new Set(prev.map(p => p._id));
                    const uniqueNew = products.filter(p => !existingIds.has(p._id));
                    return [...prev, ...uniqueNew];
                });
            }
        }
    }, [products, reduxPage, loading]);

    const handleLoadMore = () => {
        if (currPage < totalPages && !loading) {
            const nextPage = currPage + 1;
            setCurrPage(nextPage);
            dispatch(listProducts(filters.search, '', nextPage, '', 100));
        }
    };

    const filteredAndSorted = useMemo(() => {
        let filtered = allProducts.filter(p => {
            const catName = (p.category?.name || p.category || '').toLowerCase();
            const fullName = (p.title || p.name || '').toLowerCase();
            const brand = (p.brand || '').toLowerCase();
            
            // 1. Core Category Filter (Consumables only)
            const isConsumableCat = catName.includes('ink') || catName.includes('toner') || catName.includes('cartridge') || catName.includes('consumable');
            const isPrinterCat = catName.includes('printer') || catName.includes('laser') || catName.includes('inkjet');
            const isConsumableTitle = fullName.includes('ink') || fullName.includes('toner') || fullName.includes('cartridge') || fullName.includes('refill');
            const isPrinterTitle = fullName.includes('printer') || fullName.includes('mfp') || fullName.includes('multifunction');
            const hasTechnology = p.technology && p.technology.length > 0;

            // It's a consumable if: category says consumable, OR title says ink/toner but not printer
            // Also exclude items that are printers (have technology field) unless category is explicitly consumable
            const isLikelyConsumable = (isConsumableCat && !isPrinterCat) || (isConsumableTitle && !isPrinterTitle && !hasTechnology);
            
            if (!isLikelyConsumable) return false;

            // 2. Sidebar Search
            if (filters.search && !fullName.includes(filters.search.toLowerCase())) return false;

            // 3. Brand Filter
            if (filters.brand.length > 0) {
                const brandMatch = filters.brand.some(b => {
                    const lowB = b.toLowerCase();
                    return brand === lowB || fullName.includes(lowB);
                });
                if (!brandMatch) return false;
            }

            // 4. Category Filter
            if (filters.category.length > 0 && !filters.category.map(c => c.toLowerCase()).includes(catName)) return false;

            // 5. Price Range
            if (p.price < filters.priceRange.min || p.price > filters.priceRange.max) return false;

            // 6. Rating
            if (filters.rating > 0 && (p.rating || 0) < filters.rating) return false;

            return true;
        });

        let sorted = [...filtered];
        switch (sortBy) {
            case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
            case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
            case 'rating': sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
            default: break;
        }
        return sorted;
    }, [allProducts, sortBy, filters]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('revealed');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal, .reveal-zoom').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [filteredAndSorted]);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isSidebarOpen]);

    return (
        <div className="category-view-elite">
            <header className="cat-hero-dark reveal" style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
                color: '#ffffff'
            }}>
                <div className="cat-hero-container">
                    <span className="cat-pretitle" style={{ color: '#ffffff' }}>High-Yield Assets</span>
                    <h1 className="cat-main-title" style={{ color: '#ffffff' }}>Ink <span style={{ color: '#ffffff' }}>& Toner.</span></h1>
                    <p className="cat-meta-desc" style={{ color: '#f8fafc' }}>
                        Maximize your equipment's uptime with genuine high-yield consumables. 
                        Engineered for precise color reproduction and enterprise-grade reliability 
                        across all major hardware architectures.
                    </p>
                </div>
                <div className="cat-hero-bg-accent"></div>
            </header>

            <main className="cat-page-layout">
                <ProductFilterSidebar 
                    filters={filters} 
                    setFilters={setFilters} 
                    isOpen={isSidebarOpen} 
                    onClose={() => setIsSidebarOpen(false)} 
                />

                <div className="cat-main-content">
                    <div className="cat-utility-bar reveal">
                        <div className="utility-left">
                            <span className="results-indicator">AVAILABLE ASSETS: {filteredAndSorted.length}</span>
                        </div>
                        
                        <div className="utility-right">
                            <button className="mobile-filter-trigger" onClick={() => setIsSidebarOpen(true)}>
                                <FiFilter /> <span>Filters</span>
                            </button>
                            <select className="sort-select-luxury" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="featured">Recommended</option>
                                <option value="price-low">Price: Ascending</option>
                                <option value="price-high">Price: Descending</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    <div className="cat-product-grid-refined">
                        {filteredAndSorted.length > 0 ? (
                            filteredAndSorted.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        ) : (
                            !loading && (
                                <div className="no-results-premium reveal">
                                    <div className="no-results-content">
                                        <span className="no-results-tag">Zero Matches found</span>
                                        <h3 className="no-results-title">SYNCHRONIZATION ERROR</h3>
                                        <p className="no-results-desc">No consumables match your current configuration. Consider recalibrating filters.</p>
                                        <button className="reset-inline-btn" onClick={() => setFilters({
                                            search: '', brand: [], category: [], printerType: [], useCase: [], priceRange: { min: 0, max: 1000 }, rating: 0
                                        })}>Clear All Parameters</button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {loading && (
                        <div className="cat-loading-status">
                            <div className="luxury-spinner"></div>
                            <span>Querying Inventory...</span>
                        </div>
                    )}

                    {!loading && currPage < totalPages && (
                        <div className="load-more-center">
                            <button onClick={handleLoadMore} className="boutique-load-btn">
                                Load Additional Assets
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <style>{`
                .category-view-elite { background: var(--bg); min-height: 100vh; }
                .cat-hero-dark { padding: 100px 40px 80px; background: var(--secondary); color: var(--primary); position: relative; overflow: hidden; margin-bottom: 40px; border-bottom: 1px solid var(--border); }
                .cat-hero-container { max-width: 1400px; margin: 0 auto; position: relative; z-index: 2; }
                .cat-pretitle { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 5px; color: var(--accent); text-transform: uppercase; margin-bottom: 20px; display: block; }
                .cat-main-title { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 48px; letter-spacing: -2px; line-height: 1.1; margin-bottom: 40px; }
                .cat-meta-desc { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--text-muted); max-width: 600px; line-height: 1.8; letter-spacing: 0.5px; }
                .cat-hero-bg-accent { position: absolute; top: -50%; right: -10%; width: 60%; height: 200%; background: linear-gradient(45deg, rgba(2, 74, 216, 0.05), transparent); transform: rotate(15deg); }
                .cat-page-layout { display: flex; max-width: 1400px; margin: 0 auto; min-height: 100vh; }
                .cat-main-content { flex: 1; padding: 0 40px 80px; border-left: 1px solid var(--border); }
                .cat-utility-bar { display: flex; justify-content: space-between; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--border); margin-bottom: 50px; flex-wrap: wrap; gap: 15px; }
                .results-indicator { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 2px; color: var(--text-muted); white-space: nowrap; }
                .utility-right { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
                .mobile-filter-trigger { display: none; background: var(--primary); color: #fff; border: none; padding: 12px 24px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; align-items: center; gap: 10px; cursor: pointer; border-radius: 8px; position: relative; z-index: 10; transition: all 0.3s; }
                .mobile-filter-trigger:active { transform: scale(0.95); background: var(--accent); }
                .sort-select-luxury { background: none; border: none; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; color: var(--primary); padding: 5px; outline: none; transition: color 0.3s; }
                .sort-select-luxury:hover { color: var(--accent); }

                .no-results-premium { grid-column: 1 / -1; padding: 150px 20px; text-align: center; background: #fff; border: 1px dashed var(--border); margin: 40px; border-radius: 16px; }
                .no-results-tag { display: block; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 4px; color: var(--accent); margin-bottom: 20px; }
                .no-results-title { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 36px; letter-spacing: -1px; color: var(--primary); margin-bottom: 15px; }
                .no-results-desc { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--text-muted); max-width: 400px; margin: 0 auto 30px; line-height: 1.8; }
                .reset-inline-btn { background: var(--primary); color: #fff; border: none; padding: 15px 30px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 3px; cursor: pointer; transition: all 0.4s; border-radius: 8px; }
                .reset-inline-btn:hover { background: var(--accent); transform: translateY(-5px); }
                .cat-product-grid-refined { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; background: transparent; }
                .cat-loading-status { text-align: center; padding: 60px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
                .luxury-spinner { width: 30px; height: 30px; border: 2px solid #eee; border-top-color: var(--accent); border-radius: 50%; animation: spin 1s infinite linear; }
                .load-more-center { display: flex; justify-content: center; margin-top: 80px; }
                .boutique-load-btn { background: var(--primary); color: #fff; padding: 20px 40px; border: none; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 3px; cursor: pointer; transition: all 0.4s; border-radius: 8px; }
                .boutique-load-btn:hover { background: var(--accent); transform: translateY(-5px); }
                @keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }
                @media (max-width: 1200px) { .cat-product-grid-refined { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 1024px) { 
                    .cat-page-layout { flex-direction: column; } 
                    .cat-main-content { border-left: none; padding: 0 20px 80px; } 
                    .mobile-filter-trigger { display: flex; }
                    .cat-utility-bar { margin-bottom: 30px; }
                }
                @media (max-width: 768px) { 
                    .cat-product-grid-refined { grid-template-columns: 1fr; } 
                    .cat-main-title { font-size: 32px; letter-spacing: -1px; margin-bottom: 25px; } 
                    .cat-hero-dark { padding: 120px 20px 60px; }
                    .results-indicator { font-size: 8px; }
                }
                @media (max-width: 480px) {
                    .cat-utility-bar { justify-content: center; text-align: center; }
                    .utility-left { width: 100%; display: flex; justify-content: center; border-bottom: 1px solid #f9f9f9; padding-bottom: 15px; }
                    .utility-right { width: 100%; justify-content: center; }
                }
            `}</style>
        </div>
    );
};

const InkToner = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
                <div className="luxury-spinner"></div>
            </div>
        }>
            <InkTonerContent />
        </Suspense>
    );
};

export default InkToner;
