import connectDB from '@/lib/db';
import User from '@/models/User';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/auth/reset-password
 * Body: { email, otp, newPassword }
 */
export async function POST(req) {
  try {
    await connectDB();
    const { email, otp, newPassword } = await req.json();

    if (!email || !otp || !newPassword) {
      return errorResponse('Email, OTP, and new password are required.', 400);
    }

    if (newPassword.length < 6) {
      return errorResponse('Password must be at least 6 characters long.', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return errorResponse('No account found with this email address.', 404);
    }

    if (user.otp !== otp) {
      return errorResponse('Invalid OTP. Please check the code and try again.', 400);
    }

    if (!user.otpExpires || user.otpExpires < new Date()) {
      return errorResponse('OTP has expired. Please request a new password reset.', 400);
    }

    user.password = newPassword; // pre-save hook will hash
    user.otp = null;
    user.otpExpires = null;
    user.isVerified = true;
    await user.save();

    return successResponse({ message: 'Password reset successfully. You can now sign in.' });
  } catch (error) {
    console.error('[reset-password]', error);
    return errorResponse(error.message || 'Internal server error', 500);
  }
}
