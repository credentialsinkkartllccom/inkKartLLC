'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendOTP,
  register,
  resetSendOTP,
  resetRegister,
} from '@/redux/actions/userActions';
import {
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
  AlertCircle,
  Mail,
  Lock,
  User,
  ArrowLeft,
  KeyRound,
} from 'lucide-react';

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepBadge({ step, label, active, done }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
          done
            ? 'bg-emerald-500 text-white'
            : active
            ? 'bg-[#024ad8] text-white shadow-lg shadow-blue-500/30'
            : 'bg-slate-100 text-slate-400'
        }`}
      >
        {done ? <CheckCircle size={14} /> : step}
      </div>
      <span
        className={`text-xs font-bold uppercase tracking-widest ${
          active ? 'text-slate-800' : 'text-slate-400'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SignUpPage() {
  /* ── Form State ── */
  const [step, setStep]                   = useState(1);
  const [firstName, setFirstName]         = useState('');
  const [lastName, setLastName]           = useState('');
  const [email, setEmail]                 = useState('');
  const [password, setPassword]           = useState('');
  const [confirmPassword, setConfirmPass] = useState('');
  const [otp, setOtp]                     = useState('');
  const [showPass, setShowPass]           = useState(false);
  const [showConfirm, setShowConfirm]     = useState(false);
  const [passError, setPassError]         = useState('');

  const dispatch = useDispatch();
  const router   = useRouter();

  /* ── Redux state ── */
  const { loading: sendingOTP, error: otpError, success: otpSent } =
    useSelector((s) => s.userSendOTP || {});
  const { loading: registering, error: regError, userInfo } =
    useSelector((s) => s.userRegister || {});
  const { userInfo: loggedIn } = useSelector((s) => s.userLogin || {});

  /* ── Redirect if already logged in ── */
  useEffect(() => {
    if (loggedIn) router.replace('/');
  }, [loggedIn, router]);

  /* ── Move to OTP step after OTP sent ── */
  useEffect(() => {
    if (otpSent) {
      setStep(2);
    }
  }, [otpSent]);

  /* ── Redirect to sign-in after successful registration ── */
  useEffect(() => {
    if (userInfo) {
      router.replace('/signin?message=Account created! Please sign in.');
    }
  }, [userInfo, router]);

  /* ── Step 1: Send OTP ── */
  const handleStep1 = (e) => {
    e.preventDefault();
    setPassError('');

    if (!firstName.trim() || !lastName.trim()) {
      setPassError('Please enter your first and last name.');
      return;
    }
    if (password.length < 6) {
      setPassError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setPassError('Passwords do not match.');
      return;
    }

    dispatch(resetRegister());
    dispatch(sendOTP(email, 'registration'));
  };

  /* ── Step 2: Complete Registration ── */
  const handleStep2 = (e) => {
    e.preventDefault();
    if (!otp.trim()) return;
    dispatch(register(firstName.trim(), lastName.trim(), email, password, otp.trim()));
  };

  /* ── Go back to step 1 ── */
  const handleBack = () => {
    dispatch(resetSendOTP());
    dispatch(resetRegister());
    setOtp('');
    setStep(1);
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
          <p className="text-slate-500 text-sm mt-1">Create your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">

          {/* Step indicators */}
          <div className="flex items-center gap-4 mb-8">
            <StepBadge step={1} label="Details"      active={step === 1} done={step > 1} />
            <div className="flex-1 h-px bg-slate-100" />
            <StepBadge step={2} label="Verification" active={step === 2} done={false}   />
          </div>

          {/* ── Step 1: Account Details ── */}
          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-5">
              <h2 className="text-lg font-black text-slate-900">Account Details</h2>

              {/* Local validation error */}
              {passError && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
                  <AlertCircle size={16} className="text-red-600 shrink-0" />
                  <span className="text-sm font-semibold text-red-700">{passError}</span>
                </div>
              )}

              {/* OTP send error */}
              {otpError && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
                  <AlertCircle size={16} className="text-red-600 shrink-0" />
                  <span className="text-sm font-semibold text-red-700">{otpError}</span>
                </div>
              )}

              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">First Name</label>
                  <div className="relative group">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      autoComplete="given-name"
                      required
                      className="w-full pl-9 pr-3 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Last Name</label>
                  <div className="relative group">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      autoComplete="family-name"
                      required
                      className="w-full pl-9 pr-3 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
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

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Password</label>
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
                  <button type="button" onClick={() => setShowPass((v) => !v)} aria-label="Toggle password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p className="text-xs text-slate-400 pl-1">At least 6 characters</p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Confirm Password</label>
                <div className="relative group">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#024ad8] transition-colors pointer-events-none" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                  <button type="button" onClick={() => setShowConfirm((v) => !v)} aria-label="Toggle confirm password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sendingOTP}
                className="w-full py-4 bg-[#024ad8] hover:bg-[#0133a1] text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                {sendingOTP ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending OTP…</>
                ) : (
                  'Continue — Send OTP'
                )}
              </button>
            </form>
          )}

          {/* ── Step 2: OTP Verification ── */}
          {step === 2 && (
            <form onSubmit={handleStep2} className="space-y-5">
              <div>
                <h2 className="text-lg font-black text-slate-900">Verify your email</h2>
                <p className="text-sm text-slate-500 mt-1">
                  We sent a 6-digit code to{' '}
                  <span className="font-bold text-slate-700">{email}</span>
                </p>
              </div>

              {/* Registration error */}
              {regError && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
                  <AlertCircle size={16} className="text-red-600 shrink-0" />
                  <span className="text-sm font-semibold text-red-700">{regError}</span>
                </div>
              )}

              {/* OTP input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                  Verification Code
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
                    required
                    autoComplete="one-time-code"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono font-bold text-slate-800 tracking-[0.3em] placeholder:text-slate-300 placeholder:tracking-[0.3em] focus:outline-none focus:border-[#024ad8] focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <p className="text-xs text-slate-400 pl-1">Code expires in 10 minutes</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={registering || otp.length < 6}
                className="w-full py-4 bg-[#024ad8] hover:bg-[#0133a1] text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                {registering ? (
                  <><Loader2 size={18} className="animate-spin" /> Creating account…</>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    Verify &amp; Create Account
                  </>
                )}
              </button>

              {/* Back + resend */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <ArrowLeft size={14} /> Change details
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(sendOTP(email, 'registration'))}
                  disabled={sendingOTP}
                  className="text-xs font-bold text-[#024ad8] hover:text-[#0133a1] transition-colors disabled:opacity-50"
                >
                  {sendingOTP ? 'Sending…' : 'Resend OTP'}
                </button>
              </div>
            </form>
          )}

          {/* Footer link */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link href="/signin" className="font-bold text-[#024ad8] hover:text-[#0133a1] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
