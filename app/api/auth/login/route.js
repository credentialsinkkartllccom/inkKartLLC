import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/auth/login
 * Body: { email, password, isAdminLogin? }
 */
export async function POST(req) {
  try {
    await connectDB();
    const { email, password, isAdminLogin = false } = await req.json();

    if (!email || !password) {
      return errorResponse('Email and password are required.', 400);
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return errorResponse('Invalid email or password.', 401);
    }

    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return errorResponse('Invalid email or password.', 401);
    }

    if (!user.isVerified) {
      return errorResponse('Your account is not verified. Please complete registration with the OTP sent to your email.', 403);
    }

    if (user.isBlocked) {
      return errorResponse('Your account has been suspended. Please contact support.', 403);
    }

    // Admin / customer route separation
    if (isAdminLogin && !user.isAdmin) {
      return errorResponse('Not authorized as an admin.', 401);
    }
    if (!isAdminLogin && user.isAdmin) {
      return errorResponse('Please use the admin portal to sign in.', 401);
    }

    return successResponse({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('[login]', error);
    return errorResponse(error.message || 'Internal server error', 500);
  }
}
