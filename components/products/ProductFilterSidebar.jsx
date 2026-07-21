"use client";

import { Search as FiSearch, Star as FiStar, X as FiX } from 'lucide-react';

const ProductFilterSidebar = ({ filters, setFilters, isOpen, onClose }) => {
    
    const brands = ['Brother', 'Canon', 'Epson'];
    const categories = ['ELEX Shipping Calculator', 'Uncategorized'];
    const printerTypes = ['Inkjet Printers', 'Laser Printers', 'Laser Printers (B/W)'];
    const useCases = ['Home & Office', 'Home Printers', 'Office', 'Mobile', 'Photo'];
    const ratings = [5, 4, 3, 2, 1];

    const handleCheckboxChange = (category, value) => {
        setFilters(prev => {
            const currentSelected = prev[category] || [];
            if (currentSelected.includes(value)) {
                return { ...prev, [category]: currentSelected.filter(item => item !== value) };
            } else {
                return { ...prev, [category]: [...currentSelected, value] };
            }
        });
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            priceRange: { ...prev.priceRange, [name]: parseInt(value) || 0 }
        }));
    };

    const resetFilters = () => {
        setFilters({
            search: '',
            brand: [],
            category: [],
            printerType: [],
            useCase: [],
            priceRange: { min: 0, max: 1000 },
            rating: 0
        });
    };

    return (
        <>
        {/* Backdrop for Mobile */}
        <div className={`filter-backdrop ${isOpen ? 'show' : ''} `} onClick={onClose}></div>

        <aside className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="filter-header">
                <h2>Refine Search</h2>
                <div className="header-actions">
                    <button className="reset-btn" onClick={resetFilters}>Reset</button>
                    <button className="close-sidebar-btn" onClick={onClose}><FiX size={20} /></button>
                </div>
            </div>

            {/* Search */}
            <div className="filter-section">
                <h3>Search Products</h3>
                <div className="sidebar-search">
                    <FiSearch className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={filters.search} 
                        onChange={(e) => setFilters({...filters, search: e.target.value})}
                    />
                </div>
            </div>

            {/* Brands */}
            <div className="filter-section">
                <h3>Filter by Brand</h3>
                <div className="filter-options">
                    <label className="filter-option-item">
                        <input 
                            type="checkbox" 
                            checked={filters.brand.length === 0}
                            onChange={() => setFilters({...filters, brand: []})}
                        />
                        <span>All Brands</span>
                    </label>
                    {brands.map(brand => (
                        <label key={brand} className="filter-option-item">
                            <input 
                                type="checkbox" 
                                checked={filters.brand.includes(brand)}
                                onChange={() => handleCheckboxChange('brand', brand)}
                            />
                            <span>{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Category */}
            <div className="filter-section">
                <h3>Category</h3>
                <div className="filter-options">
                    <label className="filter-option-item">
                        <input 
                            type="checkbox" 
                            checked={filters.category.length === 0}
                            onChange={() => setFilters({...filters, category: []})}
                        />
                        <span>All Categories</span>
                    </label>
                    {categories.map(cat => (
                        <label key={cat} className="filter-option-item">
                            <input 
                                type="checkbox" 
                                checked={filters.category.includes(cat)}
                                onChange={() => handleCheckboxChange('category', cat)}
                            />
                            <span>{cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Printer Type */}
            <div className="filter-section">
                <h3>Printer Type</h3>
                <div className="filter-options">
                    <label className="filter-option-item">
                        <input 
                            type="checkbox" 
                            checked={filters.printerType.length === 0}
                            onChange={() => setFilters({...filters, printerType: []})}
                        />
                        <span>All Types</span>
                    </label>
                    {printerTypes.map(type => (
                        <label key={type} className="filter-option-item">
                            <input 
                                type="checkbox" 
                                checked={filters.printerType.includes(type)}
                                onChange={() => handleCheckboxChange('printerType', type)}
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Use Case */}
            <div className="filter-section">
                <h3>Use Case</h3>
                <div className="filter-options">
                    {useCases.map(useCase => (
                        <label key={useCase} className="filter-option-item">
                            <input 
                                type="checkbox" 
                                checked={filters.useCase.includes(useCase)}
                                onChange={() => handleCheckboxChange('useCase', useCase)}
                            />
                            <span>{useCase}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-slider-container">
                    <input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        value={filters.priceRange.max} 
                        name="max"
                        onChange={handlePriceChange}
                        className="luxury-range"
                    />
                    <div className="price-inputs">
                        <div className="p-field">
                            <span>Min</span>
                            <div className="p-input-wrap">
                                <b>$</b>
                                <input 
                                    type="number" 
                                    name="min" 
                                    value={filters.priceRange.min} 
                                    onChange={handlePriceChange}
                                />
                            </div>
                        </div>
                        <div className="p-field">
                            <span>Max</span>
                            <div className="p-input-wrap">
                                <b>$</b>
                                <input 
                                    type="number" 
                                    name="max" 
                                    value={filters.priceRange.max} 
                                    onChange={handlePriceChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rating */}
            <div className="filter-section">
                <h3>Filter by Rating</h3>
                <div className="filter-options">
                    <label className="filter-option-item">
                        <input 
                            type="radio" 
                            name="rating" 
                            checked={filters.rating === 0}
                            onChange={() => setFilters({...filters, rating: 0})}
                        />
                        <span>All Ratings</span>
                    </label>
                    {ratings.map(r => (
                        <label key={r} className="filter-option-item">
                            <input 
                                type="radio" 
                                name="rating" 
                                checked={filters.rating === r}
                                onChange={() => setFilters({...filters, rating: r})}
                            />
                            <div className="star-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} fill={i < r ? "var(--accent)" : "none"} stroke={i < r ? "var(--accent)" : "#ddd"} size={12} />
                                ))}
                                <span> & up</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <style>{`
                .filter-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.6);
                    backdrop-filter: blur(4px);
                    z-index: 10000;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    pointer-events: none;
                    display: none; /* Only show on mobile */
                }

                @media (max-width: 1024px) {
                    .filter-backdrop {
                        display: block;
                    }
                }

                .filter-backdrop.show {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                }

                .filter-sidebar {
                    background: #ffffff;
                    width: 300px;
                    padding: 40px 30px;
                    border-right: 1px solid #f0f0f0;
                    height: fit-content;
                    position: sticky;
                    top: 100px; /* Aligned with solid navbar */
                    color: #111;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 100; /* Go UNDER Navbar (9999) on desktop */
                }

                .filter-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    border-bottom: 2px solid #111;
                    padding-bottom: 15px;
                    color: #111;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .close-sidebar-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #111;
                    cursor: pointer;
                    padding: 0;
                }

                .filter-header h2 {
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 700;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin: 0;
                }

                .reset-btn {
                    background: none;
                    border: none;
                    font-family: 'Inter', sans-serif;
                    font-size: 11px;
                    font-weight: 700;
                    text-decoration: underline;
                    color: var(--accent);
                    cursor: pointer;
                    padding: 0;
                }

                .filter-section {
                    margin-bottom: 40px;
                }

                .filter-section h3 {
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 700;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 20px;
                    color: var(--primary);
                }

                .sidebar-search {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .sidebar-search .search-icon {
                    position: absolute;
                    left: 15px;
                    color: rgba(0,0,0,0.3);
                }

                .sidebar-search input {
                    width: 100%;
                    padding: 12px 15px 12px 45px;
                    background: var(--bg);
                    border: 1px solid var(--border);
                    font-family: 'Inter', sans-serif;
                    font-size: 12px;
                    outline: none;
                    transition: border-color 0.3s;
                }

                .sidebar-search input:focus {
                    border-color: var(--accent);
                }

                .filter-options {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .filter-option-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    user-select: none;
                }

                .filter-option-item input {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    border: 1px solid var(--border-dark);
                    background: #fff;
                    position: relative;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .filter-option-item input:checked {
                    background: var(--primary);
                    border-color: var(--primary);
                }

                .filter-option-item input:checked::after {
                    content: '✓';
                    position: absolute;
                    color: #fff;
                    font-size: 10px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .filter-option-item span {
                    font-family: 'Inter', sans-serif;
                    font-size: 13px;
                    color: var(--text-muted);
                    font-weight: 500;
                }

                .filter-option-item:hover span {
                    color: var(--primary);
                }

                .price-slider-container {
                    padding: 0 5px;
                }

                .luxury-range {
                    width: 100%;
                    height: 4px;
                    background: var(--border);
                    appearance: none;
                    outline: none;
                    margin-bottom: 25px;
                }

                .luxury-range::-webkit-slider-thumb {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    background: var(--primary);
                    cursor: pointer;
                    border-radius: 50%;
                }

                .price-inputs {
                    display: flex;
                    gap: 10px;
                }

                .p-field {
                    flex: 1;
                }

                .p-field span {
                    display: block;
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                    color: var(--text-muted);
                }

                .p-input-wrap {
                    display: flex;
                    align-items: center;
                    background: var(--bg);
                    border: 1px solid var(--border);
                    padding: 8px 10px;
                }

                .p-input-wrap b {
                    font-size: 12px;
                    color: var(--accent);
                    margin-right: 5px;
                }

                .p-input-wrap input {
                    width: 100%;
                    background: none;
                    border: none;
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 700;
                    font-size: 12px;
                    outline: none;
                    color: var(--primary);
                }

                .star-rating {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                }

                .star-rating span {
                    margin-left: 5px;
                    color: #999 !important;
                    font-size: 11px !important;
                }

                @media (max-width: 1024px) {
                    .filter-sidebar {
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: auto;
                        width: 100%;
                        max-width: 320px;
                        height: 100vh;
                        overflow-y: auto;
                        box-shadow: 20px 0 50px rgba(0,0,0,0.3);
                        transform: translateX(-100%);
                        border-right: none;
                        padding: 100px 30px 40px; /* Large top padding to clear the navbar */
                        z-index: 10001; /* Above Navbar on mobile drawer */
                    }

                    .filter-sidebar.open {
                        transform: translateX(0);
                    }

                    .close-sidebar-btn {
                        display: block;
                    }

                    .filter-section {
                        margin-bottom: 30px;
                    }
                }
            `}</style>
        </aside>
        </>
    );
};

export default ProductFilterSidebar;
