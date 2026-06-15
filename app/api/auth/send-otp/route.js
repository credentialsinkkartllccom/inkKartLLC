import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateOTP, sendOTPEmail } from '@/lib/emailService';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/auth/send-otp
 * Body: { email, type: 'registration' | 'forgot-password' }
 *
 * - registration: checks email is not already verified, creates or updates
 *   a pending user record with the OTP, then emails it.
 * - forgot-password: checks email exists, stores OTP on user, emails it.
 */
export async function POST(req) {
  try {
    await connectDB();
    const { email, type = 'registration' } = await req.json();

    if (!email) return errorResponse('Email is required', 400);
    if (!['registration', 'forgot-password'].includes(type)) {
      return errorResponse('Invalid OTP type', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    // ── Registration guard ────────────────────────────────────────────────
    if (type === 'registration' && user && user.isVerified) {
      return errorResponse('An account with this email already exists. Please sign in.', 400);
    }

    // ── Forgot-password guard ─────────────────────────────────────────────
    if (type === 'forgot-password' && !user) {
      return errorResponse('No account found with this email address.', 404);
    }

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    if (user) {
      user.otp = otp;
      user.otpExpires = otpExpires;
      await user.save();
    } else {
      // type === 'registration' and no user exists yet — create placeholder
      await User.create({
        firstName: 'Pending',
        lastName: 'Verification',
        name: 'Pending Verification',
        email: normalizedEmail,
        password: Math.random().toString(36).slice(-12) + 'Aa1!', // bcrypt-safe placeholder
        otp,
        otpExpires,
        isVerified: false,
      });
    }

    const emailSent = await sendOTPEmail(normalizedEmail, otp, type);

    if (!emailSent && process.env.NODE_ENV !== 'development') {
      return errorResponse('Failed to send OTP email. Please try again.', 500);
    }

    // Log OTP to server console in development for easy testing
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] OTP for ${normalizedEmail}: ${otp}`);
    }

    return successResponse({
      message: emailSent
        ? 'OTP sent successfully. Check your inbox.'
        : 'OTP generated. Check the server console for the code.',
    });
  } catch (error) {
    console.error('[send-otp]', error);
    return errorResponse(error.message || 'Internal server error', 500);
  }
}
