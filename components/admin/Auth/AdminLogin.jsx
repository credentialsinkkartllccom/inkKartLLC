'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Lock, Mail, AlertCircle, Loader2, ShieldCheck, Activity } from 'lucide-react';
import { login } from '@/redux/actions/userActions';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, userInfo } = useSelector((s) => s.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      router.push('/admin/dashboard');
    }
  }, [userInfo, router]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password, true));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-900/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative z-10">
        {/* Header */}
        <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-950 opacity-90" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-5 p-3">
              <div className="text-blue-600 font-black text-2xl tracking-tight">
                ink<span className="text-slate-900">K</span>
              </div>
            </div>
            <h2 className="text-xl font-black text-white tracking-tight uppercase">
              inkKartLLC <span className="text-blue-400">Admin</span>
            </h2>
            <p className="text-slate-400 mt-2 text-xs font-semibold uppercase tracking-widest">
              Secure Management Portal
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-10">
          {(error || (userInfo && !userInfo.isAdmin)) && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3">
              <AlertCircle size={18} className="shrink-0" />
              <span className="text-xs font-bold">{error || 'Not authorized as admin'}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 focus:bg-white focus:outline-none transition-all font-semibold text-slate-800 placeholder:text-slate-300 text-sm"
                  placeholder="admin@inkkartllc.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 focus:bg-white focus:outline-none transition-all font-semibold text-slate-800 placeholder:text-slate-300 text-sm"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-slate-900 hover:bg-blue-600 text-white font-black rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 mt-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={22} />
              ) : (
                <>
                  <ShieldCheck size={18} />
                  <span className="text-sm uppercase tracking-widest">Sign In</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">System Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
