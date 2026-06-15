'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '@/redux/actions/userActions';
import { Loader2, AlertCircle, CheckCircle, Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const router   = useRouter();

  const { loading, error, success } = useSelector((s) => s.userForgotPassword || {});

  // On success, go to reset-password page
  useEffect(() => {
    if (success) {
      router.push(`/reset-password?email=${encodeURIComponent(email.trim().toLowerCase())}`);
    }
  }, [success, router, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) dispatch(forgotPassword(email));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#024ad8] rounded-2xl shadow-lg shadow-blue-500/30 mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <rect x="2" y="9" width="20" height="9" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M6 14h12M6 17h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">inkKartLLC</h1>
          <p className="text-slate-500 text-sm mt-1">Password recovery</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">

          <h2 className="text-lg font-black text-slate-900 mb-1">Forgot your password?</h2>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Enter the email address on your account and we&apos;ll send you a one-time code to reset your password.
          </p>

          {/* Error */}
          {error && (
            <div className="mb-5 flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
              <AlertCircle size={16} className="text-red-600 shrink-0" />
              <span className="text-sm font-semibold text-red-700">{error}</span>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mb-5 flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <CheckCircle size={16} className="text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-emerald-700">OTP sent! Redirecting…</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative group">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full py-4 bg-[#024ad8] hover:bg-[#0133a1] text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Sending OTP…</>
              ) : (
                'Send Reset OTP'
              )}
            </button>
          </form>

          {/* Footer link */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <Link
              href="/signin"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-[#024ad8] transition-colors"
            >
              <ArrowLeft size={14} /> Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
