import connectDB from '@/lib/db';
import Chat from '@/models/Chat';
import { protect, admin } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * GET /api/chats
 * Admin only — returns all chat threads, sorted by most recent message.
 */
export async function GET(req) {
  try {
    const user = await protect(req);
    admin(user);
    await connectDB();

    const chats = await Chat.find({})
      .populate('user', '_id firstName lastName name email')
      .sort({ lastMessage: -1 });

    return successResponse(chats);
  } catch (error) {
    return errorResponse(
      error.message,
      error.message.includes('authorized') ? 401 : 500
    );
  }
}
