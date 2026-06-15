import connectDB from '@/lib/db';
import User from '@/models/User';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/auth/verify-otp
 * Body: { email, otp }
 *
 * Standalone OTP check (used if you need a separate verify step before
 * completing an action). Does NOT mark the user as verified — that happens
 * in /api/auth/register or /api/auth/reset-password.
 */
export async function POST(req) {
  try {
    await connectDB();
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return errorResponse('Email and OTP are required.', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) return errorResponse('No account found with this email.', 404);
    if (user.otp !== otp) return errorResponse('Invalid OTP.', 400);
    if (!user.otpExpires || user.otpExpires < new Date()) {
      return errorResponse('OTP has expired. Please request a new one.', 400);
    }

    return successResponse({ message: 'OTP verified successfully.' });
  } catch (error) {
    console.error('[verify-otp]', error);
    return errorResponse(error.message || 'Internal server error', 500);
  }
}
