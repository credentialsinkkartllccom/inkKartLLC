'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '@/redux/actions/userActions';
import {
  Loader2, AlertCircle, CheckCircle,
  Eye, EyeOff, KeyRound, Lock, ArrowLeft,
} from 'lucide-react';

// ─── Inner form (uses useSearchParams → must be wrapped in Suspense) ──────────
function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const dispatch     = useDispatch();

  const email = searchParams.get('email') || '';

  const [otp, setOtp]               = useState('');
  const [password, setPassword]     = useState('');
  const [confirm, setConfirm]       = useState('');
  const [showPass, setShowPass]     = useState(false);
  const [showConf, setShowConf]     = useState(false);
  const [localError, setLocalError] = useState('');

  const { loading, error, success } = useSelector((s) => s.userResetPassword || {});

  // Redirect to sign-in on success
  useEffect(() => {
    if (success) {
      const t = setTimeout(() => router.replace('/signin'), 2500);
      return () => clearTimeout(t);
    }
  }, [success, router]);

  // Guard: if no email in query, show helpful fallback
  if (!email) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center">
          <AlertCircle size={40} className="text-red-400 mx-auto mb-4" />
          <h2 className="text-lg font-black text-slate-900 mb-2">Invalid Reset Link</h2>
          <p className="text-sm text-slate-500 mb-6">
            This page requires a valid email parameter. Please start the password reset process again.
          </p>
          <Link
            href="/forgot-password"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#024ad8] hover:text-[#0133a1] transition-colors"
          >
            <ArrowLeft size={14} /> Go to Forgot Password
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');

    if (otp.length !== 6) {
      setLocalError('Please enter the full 6-digit OTP.');
      return;
    }
    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setLocalError('Passwords do not match.');
      return;
    }

    dispatch(resetPassword(email, otp, password));
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
          <p className="text-slate-500 text-sm mt-1">Reset your password</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">

          <h2 className="text-lg font-black text-slate-900 mb-1">Create a new password</h2>
          <p className="text-sm text-slate-500 mb-6">
            Enter the OTP sent to{' '}
            <span className="font-bold text-slate-700">{email}</span>, then set your new password.
          </p>

          {/* Local validation error */}
          {localError && (
            <div className="mb-5 flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
              <AlertCircle size={16} className="text-red-600 shrink-0" />
              <span className="text-sm font-semibold text-red-700">{localError}</span>
            </div>
          )}

          {/* API error */}
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
              <span className="text-sm font-semibold text-emerald-700">
                Password reset successfully! Redirecting to sign in…
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* OTP */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                OTP Code
              </label>
              <div className="relative group">
                <KeyRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  maxLength={6}
                  autoComplete="one-time-code"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono font-bold text-slate-800 tracking-[0.3em] placeholder:text-slate-300 placeholder:tracking-[0.3em] focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                New Password
              </label>
              <div className="relative group">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                  className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <button type="button" onClick={() => setShowPass((v) => !v)} aria-label="Toggle password"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="text-xs text-slate-400 pl-1">At least 6 characters</p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                Confirm Password
              </label>
              <div className="relative group">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                <input
                  type={showConf ? 'text' : 'password'}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                  className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <button type="button" onClick={() => setShowConf((v) => !v)} aria-label="Toggle confirm password"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {showConf ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full py-4 bg-[#024ad8] hover:bg-[#0133a1] text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Resetting password…</>
              ) : success ? (
                <><CheckCircle size={18} /> Done! Redirecting…</>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>

          {/* Back link */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <Link
              href="/forgot-password"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-[#024ad8] transition-colors"
            >
              <ArrowLeft size={14} /> Request new OTP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────
export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
          <Loader2 size={32} className="animate-spin text-[#024ad8]" />
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
