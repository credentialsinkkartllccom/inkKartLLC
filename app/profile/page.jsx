'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUserProfile } from '@/redux/actions/userActions';
import { listMyOrders } from '@/redux/actions/orderActions';
import {
  User, Package, LogOut, Mail, ShieldCheck,
  Edit3, Save, X, Eye, AlertCircle, Loader2,
  ChevronRight, Copy, CheckCircle, Menu, ExternalLink,
  ShoppingBag, Truck, Clock, RefreshCw,
} from 'lucide-react';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const statusConfig = {
  delivered: { label: 'Delivered',   bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: CheckCircle },
  paid:      { label: 'Processing',  bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    icon: Truck       },
  pending:   { label: 'Pending',     bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   icon: Clock       },
};

function getOrderStatus(order) {
  if (order.isDelivered) return statusConfig.delivered;
  if (order.isPaid)      return statusConfig.paid;
  return statusConfig.pending;
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={handleCopy} aria-label="Copy order ID"
      className="text-slate-400 hover:text-[#024ad8] transition-colors">
      {copied ? <CheckCircle size={13} className="text-emerald-500" /> : <Copy size={13} />}
    </button>
  );
}

// ─── Profile Tab ──────────────────────────────────────────────────────────────
function ProfileTab({ user, onSave }) {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((s) => s.userUpdateProfile || {});

  const [editing, setEditing]       = useState(false);
  const [firstName, setFirstName]   = useState(user.firstName || '');
  const [lastName, setLastName]     = useState(user.lastName  || '');
  const [password, setPassword]     = useState('');
  const [confirm, setConfirm]       = useState('');
  const [localErr, setLocalErr]     = useState('');

  useEffect(() => {
    if (success) {
      setEditing(false);
      setPassword('');
      setConfirm('');
      if (onSave) onSave();
    }
  }, [success]);

  const handleSave = () => {
    setLocalErr('');
    if (!firstName.trim() || !lastName.trim()) {
      setLocalErr('First and last name are required.');
      return;
    }
    if (password && password.length < 6) {
      setLocalErr('New password must be at least 6 characters.');
      return;
    }
    if (password && password !== confirm) {
      setLocalErr('Passwords do not match.');
      return;
    }
    const updates = { firstName: firstName.trim(), lastName: lastName.trim() };
    if (password) updates.password = password;
    dispatch(updateUserProfile(updates));
  };

  const handleCancel = () => {
    setEditing(false);
    setFirstName(user.firstName || '');
    setLastName(user.lastName   || '');
    setPassword('');
    setConfirm('');
    setLocalErr('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">Account Information</h2>
          <p className="text-sm text-slate-500 mt-0.5">Manage your personal details</p>
        </div>
        {!editing ? (
          <button onClick={() => setEditing(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#024ad8] hover:bg-[#0133a1] text-white text-xs font-bold rounded-xl transition-all shadow-sm shadow-blue-500/20">
            <Edit3 size={14} /> Edit Profile
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={handleCancel}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all">
              <X size={14} /> Cancel
            </button>
            <button onClick={handleSave} disabled={loading}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all disabled:opacity-60 shadow-sm shadow-emerald-500/20">
              {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              {loading ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>

      {/* Alerts */}
      {(localErr || error) && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
          <AlertCircle size={16} className="text-red-600 shrink-0" />
          <span className="text-sm font-semibold text-red-700">{localErr || error}</span>
        </div>
      )}
      {success && (
        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
          <CheckCircle size={16} className="text-emerald-600 shrink-0" />
          <span className="text-sm font-semibold text-emerald-700">Profile updated successfully.</span>
        </div>
      )}

      {/* Fields */}
      <div className="bg-slate-50 rounded-2xl divide-y divide-slate-100">

        {/* First Name */}
        <div className="flex items-center gap-4 p-5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <User size={18} className="text-[#024ad8]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">First Name</p>
            {editing ? (
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                className="w-full max-w-xs px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#024ad8] focus:ring-2 focus:ring-blue-500/10 transition-all"
              />
            ) : (
              <p className="text-sm font-semibold text-slate-800 truncate">{user.firstName || '—'}</p>
            )}
          </div>
        </div>

        {/* Last Name */}
        <div className="flex items-center gap-4 p-5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <User size={18} className="text-[#024ad8]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Last Name</p>
            {editing ? (
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                className="w-full max-w-xs px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#024ad8] focus:ring-2 focus:ring-blue-500/10 transition-all"
              />
            ) : (
              <p className="text-sm font-semibold text-slate-800 truncate">{user.lastName || '—'}</p>
            )}
          </div>
        </div>

        {/* Email (read-only) */}
        <div className="flex items-center gap-4 p-5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <Mail size={18} className="text-[#024ad8]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
            <p className="text-sm font-semibold text-slate-800 truncate">{user.email}</p>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg shrink-0">Verified</span>
        </div>

        {/* Role */}
        <div className="flex items-center gap-4 p-5">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-[#024ad8]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Account Role</p>
            <p className="text-sm font-semibold text-slate-800 capitalize">{user.isAdmin ? 'Administrator' : 'Customer'}</p>
          </div>
        </div>
      </div>

      {/* Change password section — only visible in edit mode */}
      {editing && (
        <div className="bg-slate-50 rounded-2xl p-5 space-y-4">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Change Password <span className="normal-case font-medium text-slate-400">(leave blank to keep current)</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">New Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" autoComplete="new-password"
                className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-[#024ad8] focus:ring-2 focus:ring-blue-500/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Confirm Password</label>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••" autoComplete="new-password"
                className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-[#024ad8] focus:ring-2 focus:ring-blue-500/10 transition-all"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Orders Tab ───────────────────────────────────────────────────────────────
function OrdersTab() {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((s) => s.orderListMy || {});

  useEffect(() => { dispatch(listMyOrders()); }, [dispatch]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-24">
      <Loader2 size={32} className="animate-spin text-[#024ad8] mb-4" />
      <p className="text-sm font-semibold text-slate-500">Loading your orders…</p>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
      <AlertCircle size={32} className="text-red-400 mx-auto mb-3" />
      <h3 className="text-base font-black text-red-800 mb-1">Could not load orders</h3>
      <p className="text-sm text-red-600 mb-4">{error}</p>
      <button onClick={() => dispatch(listMyOrders())}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-red-200 text-red-600 text-sm font-bold rounded-xl hover:bg-red-50 transition-all">
        <RefreshCw size={14} /> Try Again
      </button>
    </div>
  );

  if (!orders || orders.length === 0) return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-5">
        <ShoppingBag size={32} className="text-slate-300" />
      </div>
      <h3 className="text-lg font-black text-slate-800 mb-2">No orders yet</h3>
      <p className="text-sm text-slate-500 mb-6 max-w-xs">You haven&apos;t placed any orders yet. Start shopping!</p>
      <Link href="/printers"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#024ad8] hover:bg-[#0133a1] text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
        Browse Products
      </Link>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-black text-slate-900">Order History</h2>
        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
          {orders.length} order{orders.length !== 1 ? 's' : ''}
        </span>
      </div>

      {orders.map((order) => {
        const status = getOrderStatus(order);
        const StatusIcon = status.icon;
        return (
          <div key={order._id}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-md transition-all duration-200">

            {/* Order Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-slate-50 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {/* ID */}
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Order ID</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-slate-700">#{order._id.slice(-8).toUpperCase()}</span>
                    <CopyButton text={order._id} />
                  </div>
                </div>
                {/* Date */}
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Date</p>
                  <span className="text-xs font-semibold text-slate-700">
                    {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                {/* Total */}
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Total</p>
                  <span className="text-xs font-bold text-slate-800">${order.totalPrice?.toFixed(2)}</span>
                </div>
              </div>

              {/* Status badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold ${status.bg} ${status.text} ${status.border}`}>
                <StatusIcon size={12} />
                {status.label}
              </div>
            </div>

            {/* Order Items */}
            <div className="px-5 py-4 space-y-3">
              {order.orderItems.slice(0, 2).map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={item.image?.startsWith('http') ? item.image : `${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.slug || item.product}`}
                      className="block text-sm font-semibold text-slate-800 hover:text-[#024ad8] transition-colors truncate">
                      {item.name}
                    </Link>
                    <p className="text-xs text-slate-500 mt-0.5">Qty: {item.qty} × ${item.price}</p>
                  </div>
                </div>
              ))}
              {order.orderItems.length > 2 && (
                <p className="text-xs font-bold text-slate-400 pl-15">
                  +{order.orderItems.length - 2} more item{order.orderItems.length - 2 !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="px-5 pb-4 flex flex-wrap gap-2">
              <Link href={`/order/${order._id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#024ad8] hover:bg-[#0133a1] text-white text-xs font-bold rounded-xl transition-all">
                <Eye size={13} /> View Details
              </Link>
              <Link href={`/track-order?id=${order._id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all">
                <Truck size={13} /> Track Order
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const dispatch  = useDispatch();
  const router    = useRouter();

  const { userInfo: user } = useSelector((s) => s.userLogin || {});
  const [activeTab, setActiveTab]     = useState('profile');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) router.replace('/signin?redirect=profile');
  }, [user, router]);

  if (!user) return null;

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() || 'U';

  const navItems = [
    { id: 'profile', label: 'My Account',     icon: User    },
    { id: 'orders',  label: 'Order History',  icon: Package },
  ];

  const SidebarContent = () => (
    <>
      {/* Avatar + user info */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#024ad8] rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg shadow-blue-500/30">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="font-black text-slate-900 truncate">{user.firstName} {user.lastName}</p>
            <p className="text-xs text-slate-500 truncate">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="p-3 flex-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button key={id}
            onClick={() => { setActiveTab(id); setMobileSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all mb-1 ${
              activeTab === id
                ? 'bg-[#024ad8] text-white shadow-md shadow-blue-500/20'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Icon size={18} />
            {label}
            {activeTab !== id && <ChevronRight size={14} className="ml-auto text-slate-300" />}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-100">
        <button onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-all">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Mobile header bar */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#024ad8] rounded-xl flex items-center justify-center text-white font-black text-sm">
              {initials}
            </div>
            <div>
              <p className="font-black text-slate-900 text-sm">{user.firstName} {user.lastName}</p>
              <p className="text-xs text-slate-500">{navItems.find(n => n.id === activeTab)?.label}</p>
            </div>
          </div>
          <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Menu size={18} />
          </button>
        </div>

        {/* Mobile slide-down sidebar */}
        {mobileSidebarOpen && (
          <div className="lg:hidden mb-4 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
            <SidebarContent />
          </div>
        )}

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-white rounded-2xl border border-slate-100 shadow-sm h-fit sticky top-6">
            <SidebarContent />
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
            {activeTab === 'profile' && (
              <ProfileTab user={user} />
            )}
            {activeTab === 'orders' && (
              <OrdersTab />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
