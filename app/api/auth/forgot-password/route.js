import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateOTP, sendOTPEmail } from '@/lib/emailService';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/auth/forgot-password
 * Body: { email }
 *
 * Generates an OTP, stores it on the user document, and emails it.
 */
export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) return errorResponse('Email is required.', 400);

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user || !user.isVerified) {
      return errorResponse('No verified account found with this email address.', 404);
    }

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    const emailSent = await sendOTPEmail(normalizedEmail, otp, 'forgot-password');

    if (!emailSent && process.env.NODE_ENV !== 'development') {
      return errorResponse('Failed to send OTP email. Please try again.', 500);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] Forgot-password OTP for ${normalizedEmail}: ${otp}`);
    }

    return successResponse({
      message: 'A password reset OTP has been sent to your email.',
    });
  } catch (error) {
    console.error('[forgot-password]', error);
    return errorResponse(error.message || 'Internal server error', 500);
  }
}
