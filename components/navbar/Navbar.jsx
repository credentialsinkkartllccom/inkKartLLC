'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import axios from 'axios';
import { ShoppingCart, User, Search, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [mounted, setMounted] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);
    const isAdmin = userInfo && userInfo.isAdmin;

    const searchRef = useRef(null);
    const profileRef = useRef(null);

    // Mounted check to prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Scroll Listener for Frosted Glass Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Click Outside Handlers
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) setIsSearchOpen(false);
            if (profileRef.current && !profileRef.current.contains(e.target)) setShowUserMenu(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
        setShowUserMenu(false);
        setIsSearchOpen(false);
    }, [pathname]);

    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length >= 2) {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
                const { data } = await axios.get(
                    `${baseUrl}/products/search/suggestions`,
                    { params: { q: query } }
                );
                setSuggestions(data);
                setShowSuggestions(true);
            } catch (error) {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/printers?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setShowSuggestions(false);
        }
    };

    const handleSignOut = () => {
        dispatch(logout());
        router.push('/');
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <Link href="/" className="nav-logo">
                        <img src="/assets/logo.webp" alt="InkKartLLC" className="nav-logo-img" />
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="nav-links hidden md:flex">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/printers">Printers</Link></li>
                        <li><Link href="/ink-toner">Ink & Toner</Link></li>
                        <li><Link href="/blogs">Guides</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    {/* Icons Group */}
                    <div className="nav-icons-group">
                        {/* Search */}
                        <div className="search-wrapper" ref={searchRef} style={{ position: 'relative' }}>
                            <button className="icon-button" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Open Search">
                                <Search size={20} />
                            </button>
                            
                            {isSearchOpen && (
                                <div className="search-modal">
                                    <form onSubmit={handleSearchSubmit}>
                                        <input 
                                            type="text" 
                                            className="search-input-field"
                                            placeholder="Find printers, ink or toner..." 
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            autoFocus
                                        />
                                    </form>
                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="mt-2 border-t border-slate-100">
                                            {suggestions.slice(0, 5).map(s => (
                                                <div 
                                                    key={s._id} 
                                                    className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm font-medium"
                                                    onClick={() => {
                                                        router.push(s.slug ? `/product/${s.slug}` : `/printers?search=${s.title}`);
                                                        setIsSearchOpen(false);
                                                    }
                                                }
                                                >
                                                    <span>{s.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <Link href="/cart" className="icon-button" aria-label="View Shopping Cart">
                            <ShoppingCart size={22} />
                            {mounted && cartCount > 0 ? (
                                <span className="cart-indicator">{cartCount}</span>
                            ) : null}
                        </Link>

                        {/* Desktop User Menu */}
                        <div className="profile-wrapper hidden md:block" ref={profileRef} style={{ position: 'relative' }}>
                            <div className="user-profile-toggle" onClick={() => setShowUserMenu(!showUserMenu)}>
                                <div className="user-initials-avatar">
                                    {mounted && userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : (
                                        <User size={18} />
                                    )}
                                </div>
                                {mounted && userInfo?.name && (
                                    <span className="user-name-display">{userInfo.name.split(' ')[0]}</span>
                                )}
                            </div>

                            {showUserMenu && mounted && (
                                <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-[10001]">
                                    {userInfo ? (
                                        <>
                                            <div className="px-4 py-3 border-b border-slate-100 mb-1">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Signed in as</p>
                                                <p className="text-sm font-bold text-slate-900 truncate">{userInfo.email}</p>
                                            </div>
                                            {isAdmin && (
                                                <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-[#024ad8] hover:bg-blue-50">
                                                    <LayoutDashboard size={16} /> Admin Dashboard
                                                </Link>
                                            )}
                                            <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Account Status</Link>
                                            <Link href="/orders" className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">My Orders</Link>
                                            <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 border-t border-slate-100 mt-1">
                                                <LogOut size={16} /> Sign Out
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/signin" className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Sign In</Link>
                                            <Link href="/signup" className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Create Account</Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <button className="icon-button mobile-menu-only" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle Menu">
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Slidebar */}
                {isMobileOpen && (
                    <>
                        <div className="fixed inset-0 bg-black/50 z-[10001] md:hidden" onClick={() => setIsMobileOpen(false)}></div>
                        <div className="fixed top-0 right-0 min-h-[100vh] w-[300px] bg-white shadow-2xl z-[10002] md:hidden flex flex-col animate-slide-in-right">
                            {/* Slidebar Header */}
                            <div className="flex justify-between items-center p-6 border-b border-slate-100 flex-shrink-0">
                                <Link href="/" onClick={() => setIsMobileOpen(false)}>
                                    <img src="/assets/logo.webp" alt="InkKartLLC" className="h-10 w-auto object-contain" />
                                </Link>
                                <button className="icon-button" onClick={() => setIsMobileOpen(false)} aria-label="Close Menu">
                                    <X size={24} />
                                </button>
                            </div>
                            
                            {/* Slidebar Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                {/* User Profile Section */}
                                <div className="p-4 bg-slate-50 rounded-2xl">
                                    {userInfo ? (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#024ad8] to-blue-700 flex items-center justify-center text-white font-bold">
                                                {mounted && userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : <User size={18} />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-900 truncate">{userInfo.name}</p>
                                                <p className="text-xs text-slate-500 truncate">{userInfo.email}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#024ad8] to-blue-700 flex items-center justify-center text-white">
                                                <User size={18} />
                                            </div>
                                            <div className="flex gap-3">
                                                <Link href="/signin" className="text-sm font-semibold text-[#024ad8]" onClick={() => setIsMobileOpen(false)}>Sign In</Link>
                                                <span className="text-slate-300">|</span>
                                                <Link href="/signup" className="text-sm font-semibold text-[#024ad8]" onClick={() => setIsMobileOpen(false)}>Sign Up</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Main Nav Links */}
                                <ul className="space-y-2">
                                    {[
                                        { href: '/', label: 'Home' },
                                        { href: '/printers', label: 'Printers' },
                                        { href: '/ink-toner', label: 'Ink & Toner' },
                                        { href: '/blogs', label: 'Guides' },
                                        { href: '/about', label: 'About Us' },
                                        { href: '/contact', label: 'Contact' }
                                    ].map((link) => (
                                        <li key={link.href}>
                                            <Link 
                                                href={link.href} 
                                                className="block py-3 px-4 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#024ad8] transition-colors"
                                                onClick={() => setIsMobileOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* User Links (if logged in) */}
                                {userInfo && (
                                    <div className="pt-6 border-t border-slate-100 space-y-2">
                                        {isAdmin && (
                                            <Link href="/admin/dashboard" className="flex items-center gap-3 py-3 px-4 text-base font-semibold text-[#024ad8] hover:bg-slate-50 rounded-xl transition-colors" onClick={() => setIsMobileOpen(false)}>
                                                <LayoutDashboard size={18} /> Admin Dashboard
                                            </Link>
                                        )}
                                        <Link href="/profile" className="flex items-center gap-3 py-3 px-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors" onClick={() => setIsMobileOpen(false)}>
                                            <User size={18} /> Account Status
                                        </Link>
                                        <Link href="/orders" className="flex items-center gap-3 py-3 px-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors" onClick={() => setIsMobileOpen(false)}>
                                            <ShoppingCart size={18} /> My Orders
                                        </Link>
                                        <button onClick={() => { handleSignOut(); setIsMobileOpen(false); }} className="w-full flex items-center gap-3 py-3 px-4 text-base font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                                            <LogOut size={18} /> Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </nav>
            <div className="h-[72px]"></div>
        </>
    );
};

export default Navbar;
