'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {
  LayoutDashboard, Package, ShoppingCart, Users,
  MessageSquare, BarChart3, Settings, LogOut, X, FolderTree
} from 'lucide-react';
import { logout } from '@/redux/actions/userActions';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const navItems = [
    { name: 'Dashboard',     path: '/admin/dashboard',  icon: <LayoutDashboard size={20} /> },
    { name: 'Categories',    path: '/admin/categories', icon: <FolderTree size={20} /> },
    { name: 'Products',      path: '/admin/products',   icon: <Package size={20} /> },
    { name: 'Customers',     path: '/admin/customers',  icon: <Users size={20} /> },
    { name: 'Orders',        path: '/admin/orders',     icon: <ShoppingCart size={20} /> },
    { name: 'Customer Chat', path: '/admin/chat',       icon: <MessageSquare size={20} /> },
    { name: 'Analytics',     path: '/admin/analytics',  icon: <BarChart3 size={20} /> },
    { name: 'Settings',      path: '/admin/settings',   icon: <Settings size={20} /> },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin/login');
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col h-full
        shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-100 shrink-0">
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Package size={18} strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-sm font-black text-slate-900 tracking-tight">inkKartLLC</span>
            <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Admin Panel</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden ml-auto p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <p className="px-3 mb-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Main Menu</p>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-[#024AD8] text-white shadow-lg shadow-blue-500/20'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-[#024AD8]'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-900'}>
                  {item.icon}
                </span>
                <span className="font-semibold text-sm">{item.name}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 w-full text-left rounded-xl text-red-500 hover:bg-red-50 transition-all group"
          >
            <div className="p-1.5 bg-red-50 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-colors">
              <LogOut size={16} />
            </div>
            <span className="font-bold text-sm">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
