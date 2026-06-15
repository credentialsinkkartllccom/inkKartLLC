"use client";

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, ShoppingCart, Eye, ArrowRight, Wifi, Zap, Shield, Cpu } from 'lucide-react';

const BrowsePrinters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [priceRange, setPriceRange] = useState(1000);

    const printers = [
        {
            id: 1,
            name: 'HP LaserJet Pro MFP 3301fdw',
            category: 'Laser',
            price: 539,
            brand: 'HP',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
            rating: 4.8,
            feature: 'Enterprise Security'
        },
        {
            id: 2,
            name: 'Canon PIXMA TR8620 All-in-One',
            category: 'Inkjet',
            price: 199,
            brand: 'Canon',
            image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=600',
            rating: 4.5,
            feature: 'Photo Quality'
        },
        {
            id: 3,
            name: 'Epson EcoTank ET-2800',
            category: 'Inkjet',
            price: 279,
            brand: 'Epson',
            image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600',
            rating: 4.7,
            feature: 'Eco-Friendly'
        },
        {
            id: 4,
            name: 'Brother HL-L2350DW Laser',
            category: 'Laser',
            price: 159,
            brand: 'Brother',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
            rating: 4.6,
            feature: 'High Volume'
        }
    ];

    const filteredPrinters = useMemo(() => {
        return printers.filter(printer => {
            const matchesSearch = printer.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrand === 'All' || printer.brand === selectedBrand;
            const matchesPrice = printer.price <= priceRange;
            return matchesSearch && matchesBrand && matchesPrice;
        });
    }, [searchTerm, selectedBrand, priceRange]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 w-full flex justify-center overflow-hidden bg-white border-b border-slate-100">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#024AD8]/5 via-transparent to-[#024AD8]/5" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.1),transparent_70%)]" />
                    
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                        <span className="text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase bg-blue-50 px-6 py-2 rounded-full border border-blue-100 mb-8 inline-block">
                            Inventory Terminal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-[#0F172A] leading-tight tracking-tight mb-8">
                            Browse <span className="text-[#024AD8]">Hardware.</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Discover the perfect architectural fit for your printing requirements. 
                            From enterprise laser systems to high-fidelity creative inkjet solutions.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-[#F8FAFC]">
                    <div className="container-custom mx-auto max-w-[1400px] px-6">
                        <div className="grid lg:grid-cols-4 gap-12">
                            
                            {/* Sidebar Filters */}
                            <aside className="lg:col-span-1 space-y-10">
                                <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-[#0F172A] font-['Poppins'] mb-8 flex items-center gap-3">
                                        <Filter size={18} className="text-[#024AD8]" />
                                        Refine Selection
                                    </h3>

                                    {/* Search */}
                                    <div className="mb-10">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Model Search</label>
                                        <div className="relative">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                            <input 
                                                type="text" 
                                                placeholder="Search assets..." 
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Brand */}
                                    <div className="mb-10">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Manufacturer</label>
                                        <div className="space-y-3">
                                            {['All', 'HP', 'Canon', 'Epson', 'Brother'].map(brand => (
                                                <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                                                    <div 
                                                        onClick={() => setSelectedBrand(brand)}
                                                        className={`w-5 h-5 rounded-md border transition-all flex items-center justify-center ${selectedBrand === brand ? 'bg-[#024AD8] border-[#024AD8]' : 'bg-slate-50 border-slate-200 group-hover:border-[#024AD8]'}`}
                                                    >
                                                        {selectedBrand === brand && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                                    </div>
                                                    <span className={`text-sm font-medium transition-colors ${selectedBrand === brand ? 'text-[#024AD8] font-bold' : 'text-slate-500 group-hover:text-[#024AD8]'}`}>
                                                        {brand}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Budget Ceiling</label>
                                            <span className="text-sm font-bold text-[#024AD8]">${priceRange}</span>
                                        </div>
                                        <input 
                                            type="range" 
                                            min="0" 
                                            max="1000" 
                                            step="50"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#024AD8]"
                                        />
                                        <div className="flex justify-between text-[10px] font-bold text-slate-300 mt-2 uppercase tracking-widest">
                                            <span>$0</span>
                                            <span>$1000+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Banner */}
                                <div className="bg-[#0F172A] rounded-[32px] p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#024AD8]/20 to-transparent rounded-bl-full" />
                                    <Shield size={32} className="text-[#024AD8] mb-6" />
                                    <h4 className="text-lg font-bold font-['Poppins'] mb-4">Elite Support</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        All assets include authorized manufacturer warranty and technical procurement support.
                                    </p>
                                    <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-[#024AD8] hover:underline">
                                        Request Brief
                                    </Link>
                                </div>
                            </aside>

                            {/* Product Grid */}
                            <div className="lg:col-span-3">
                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-400">
                                        Results: {filteredPrinters.length} Assets Found
                                    </span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-black uppercase tracking-[2px] text-slate-400">Sort By</span>
                                        <select className="bg-transparent text-sm font-bold text-[#0F172A] focus:outline-none cursor-pointer">
                                            <option>Recommended</option>
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
                                            <option>Top Rated</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-10">
                                    {filteredPrinters.length > 0 ? (
                                        filteredPrinters.map(printer => (
                                            <div key={printer.id} className="group bg-white rounded-[32px] border border-slate-100 p-8 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                                                <div className="relative aspect-square mb-8 bg-slate-50 rounded-[24px] overflow-hidden">
                                                    <img 
                                                        src={printer.image} 
                                                        alt={printer.name} 
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute top-4 left-4">
                                                        <span className="text-[10px] font-bold text-[#024AD8] tracking-widest uppercase bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                                            {printer.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <span className="text-[10px] font-bold text-[#024AD8] tracking-widest uppercase mb-1 block">
                                                            {printer.brand} • {printer.feature}
                                                        </span>
                                                        <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] group-hover:text-[#024AD8] transition-colors leading-tight">
                                                            {printer.name}
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                                                        <span className="text-sm font-bold text-[#0F172A]">{printer.rating}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-50">
                                                    <div>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Asset Value</span>
                                                        <span className="text-2xl font-black text-[#0F172A]">${printer.price}</span>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <button className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all">
                                                            <Eye size={20} />
                                                        </button>
                                                        <button className="h-12 px-6 rounded-xl bg-[#024AD8] text-white font-bold flex items-center gap-3 hover:bg-[#0133A1] transition-all shadow-lg shadow-blue-500/20">
                                                            <ShoppingCart size={18} />
                                                            Buy Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-32 text-center">
                                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                                <Search size={40} className="text-slate-300" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-4">No Assets Found</h3>
                                            <p className="text-slate-500 max-w-sm mx-auto mb-10">
                                                We couldn't find any printers matching your current filters. 
                                                Try adjusting your search or manufacturer selection.
                                            </p>
                                            <button 
                                                onClick={() => {setSearchTerm(''); setSelectedBrand('All'); setPriceRange(1000);}}
                                                className="text-[#024AD8] font-bold hover:underline uppercase tracking-widest text-xs"
                                            >
                                                Reset All Parameters
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BrowsePrinters;
