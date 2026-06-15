'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/redux/actions/userActions';
import { Eye, EyeOff, Loader2, CheckCircle, AlertCircle, Mail, Lock, ShieldCheck } from 'lucide-react';

// ─── Inner form (needs useSearchParams → must be wrapped in Suspense) ─────────
function SignInForm() {
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [showPass, setShowPass]   = useState(false);
  const [isAdmin, setIsAdmin]     = useState(false);

  const dispatch     = useDispatch();
  const router       = useRouter();
  const searchParams = useSearchParams();

  const { loading, error, userInfo } = useSelector((s) => s.userLogin || {});
  const redirect = searchParams.get('redirect') || '';
  const message  = searchParams.get('message') || '';

  // Redirect after successful login
  useEffect(() => {
    if (userInfo) {
      const delay = setTimeout(() => {
        if (redirect) router.push(`/${redirect}`);
        else if (userInfo.isAdmin) router.push('/admin/dashboard');
        else router.push('/');
      }, 900);
      return () => clearTimeout(delay);
    }
  }, [userInfo, router, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) return;
    dispatch(login(email, password, isAdmin));
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
          <p className="text-slate-500 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">

          {/* Success / redirect banner */}
          {(message || (userInfo && !error)) && (
            <div className="mb-5 flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <CheckCircle size={16} className="text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-emerald-700">
                {message || 'Signed in! Redirecting…'}
              </span>
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div className="mb-5 flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
              <AlertCircle size={16} className="text-red-600 shrink-0" />
              <span className="text-sm font-semibold text-red-700">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none"
                />
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

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-bold text-[#024ad8] hover:text-[#0133a1] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none"
                />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Admin toggle */}
            <button
              type="button"
              onClick={() => setIsAdmin((v) => !v)}
              className="flex items-center gap-3 group select-none w-full"
            >
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                  isAdmin
                    ? 'bg-[#024ad8] border-[#024ad8]'
                    : 'bg-white border-slate-300 group-hover:border-[#024ad8]'
                }`}
              >
                {isAdmin && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                <ShieldCheck size={13} className={isAdmin ? 'text-[#024ad8]' : 'text-slate-400'} />
                Sign in as Admin
              </span>
            </button>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !!userInfo}
              className="w-full py-4 bg-[#024ad8] hover:bg-[#0133a1] text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Signing in…</>
              ) : userInfo ? (
                <><CheckCircle size={18} /> Redirecting…</>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer link */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-bold text-[#024ad8] hover:text-[#0133a1] transition-colors">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page (Suspense boundary required for useSearchParams) ────────────────────
export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
          <Loader2 size={32} className="animate-spin text-[#024ad8]" />
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  );
}
