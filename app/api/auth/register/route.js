import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/auth/register
 * Body: { firstName, lastName, email, password, otp }
 *
 * Validates the OTP stored on the pending user document, sets the real
 * name/password, marks isVerified = true, and returns a JWT token.
 */
export async function POST(req) {
  try {
    await connectDB();
    const { firstName, lastName, email, password, otp } = await req.json();

    if (!firstName || !lastName || !email || !password || !otp) {
      return errorResponse('All fields are required: first name, last name, email, password, and OTP.', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find the user record created during send-otp
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return errorResponse('No registration attempt found for this email. Please request an OTP first.', 400);
    }

    if (user.isVerified) {
      return errorResponse('This email is already verified. Please sign in.', 400);
    }

    // Validate OTP
    if (user.otp !== otp) {
      return errorResponse('Invalid OTP. Please check the code and try again.', 400);
    }

    if (!user.otpExpires || user.otpExpires < new Date()) {
      return errorResponse('OTP has expired. Please request a new one.', 400);
    }

    // Update user with real data
    user.firstName = firstName.trim();
    user.lastName = lastName.trim();
    user.name = `${firstName.trim()} ${lastName.trim()}`;
    user.password = password; // pre-save hook will hash it
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;

    const savedUser = await user.save();

    return successResponse(
      {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        name: savedUser.name,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        token: generateToken(savedUser._id),
      },
      201
    );
  } catch (error) {
    console.error('[register]', error);
    return errorResponse(error.message || 'Internal server error', 500);
  }
}
