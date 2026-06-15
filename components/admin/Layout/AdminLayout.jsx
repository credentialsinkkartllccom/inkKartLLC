'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import {
  Bell, Search, Menu, User, LogOut, Settings,
  ShoppingCart, MessageSquare, Clock, ChevronDown, Calendar
} from 'lucide-react';
import AdminSidebar from './AdminSidebar';
import { logout } from '@/redux/actions/userActions';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((s) => s.userLogin);
  const prevOrderCountRef = useRef(0);
  const prevChatCountRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      router.push('/admin/login');
      return;
    }

    const fetchNotifications = async () => {
      try {
        const headers = { Authorization: `Bearer ${userInfo.token}` };

        const ordersRes = await fetch('/api/orders?fetchAll=true', { headers });
        if (ordersRes.ok) {
          const orderData = await ordersRes.json();
          const orderCount = orderData.count ?? 0;
          if (prevOrderCountRef.current === 0) {
            prevOrderCountRef.current = orderCount;
          } else if (orderCount > prevOrderCountRef.current) {
            prevOrderCountRef.current = orderCount;
            const newest = orderData.orders?.[0];
            if (newest) {
              setNotifications(prev => [{
                id: Date.now(), type: 'order',
                message: `New Order #${String(newest._id).slice(-6)}`,
                time: 'Just now', read: false
              }, ...prev]);
            }
          }
        }

        const chatsRes = await fetch('/api/chats', { headers });
        if (chatsRes.ok) {
          const chatsData = await chatsRes.json();
          const chatsCount = Array.isArray(chatsData) ? chatsData.length : 0;
          if (prevChatCountRef.current === 0) {
            prevChatCountRef.current = chatsCount;
          } else if (chatsCount > prevChatCountRef.current) {
            prevChatCountRef.current = chatsCount;
            setNotifications(prev => [{
              id: Date.now() + 1, type: 'chat',
              message: 'New customer message received',
              time: 'Just now', read: false
            }, ...prev]);
          }
        }
      } catch (err) { /* silent */ }
    };

    fetchNotifications();
    const pollId = setInterval(fetchNotifications, 10000);
    return () => clearInterval(pollId);
  }, [userInfo, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin/login');
  };

  if (!mounted || !userInfo || !userInfo.isAdmin) return null;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-all"
            >
              <Menu size={20} />
            </button>

            {currentTime && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-500">
                <Calendar size={13} className="text-blue-600" />
                <span className="text-xs font-bold">
                  {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <span className="text-slate-300">•</span>
                <Clock size={13} className="text-blue-600" />
                <span className="text-xs font-black tabular-nums">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search */}
            <div className="hidden md:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={14} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-48"
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
                className={`p-2 rounded-xl transition-all relative ${isNotifOpen ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                <Bell size={20} />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full animate-pulse" />
                )}
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h4 className="font-black text-xs text-slate-900 uppercase tracking-widest">Notifications</h4>
                    <span className="text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded-full">
                      {notifications.filter(n => !n.read).length} NEW
                    </span>
                  </div>
                  <div className="max-h-72 overflow-y-auto">
                    {notifications.length > 0 ? notifications.map(n => (
                      <div key={n.id} className="p-4 border-b border-slate-50 flex gap-3 hover:bg-slate-50 cursor-pointer">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${n.type === 'order' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                          {n.type === 'order' ? <ShoppingCart size={16} /> : <MessageSquare size={16} />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{n.message}</p>
                          <span className="text-[10px] text-slate-400 font-semibold">{n.time}</span>
                        </div>
                        {!n.read && <div className="w-2 h-2 bg-blue-600 rounded-full ml-auto mt-1.5 shrink-0" />}
                      </div>
                    )) : (
                      <div className="p-10 text-center">
                        <Bell size={28} className="text-slate-200 mx-auto mb-2" />
                        <p className="text-xs font-black text-slate-300 uppercase tracking-widest">No new alerts</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
                className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-all"
              >
                <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center text-white text-sm font-black shadow-md">
                  {userInfo.name?.charAt(0)?.toUpperCase()}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-black text-slate-900 leading-none">{userInfo.name?.split(' ')[0]}</p>
                  <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Admin</p>
                </div>
                <ChevronDown size={12} className={`text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
                  <div className="p-4 border-b border-slate-50 bg-slate-50 text-center">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white text-xl font-black mx-auto mb-2">
                      {userInfo.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <p className="text-sm font-black text-slate-900">{userInfo.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold">{userInfo.email}</p>
                  </div>
                  <div className="p-2">
                    {[
                      { label: 'Settings', icon: Settings, path: '/admin/settings' },
                      { label: 'Analytics', icon: Bell, path: '/admin/analytics' },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={() => { router.push(item.path); setIsProfileOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-semibold text-xs"
                      >
                        <item.icon size={15} /> {item.label}
                      </button>
                    ))}
                    <div className="h-px bg-slate-100 my-1.5" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-all font-black text-xs"
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-50/50">
          <div className="max-w-screen-2xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
