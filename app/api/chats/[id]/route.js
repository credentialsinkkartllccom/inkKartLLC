import connectDB from '@/lib/db';
import Chat from '@/models/Chat';
import { protect, admin } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * GET /api/chats/[id]
 * Admin only — returns a single chat thread by ID.
 */
export async function GET(req, { params }) {
  try {
    const user = await protect(req);
    admin(user);
    await connectDB();

    const chat = await Chat.findById(params.id).populate('user', '_id firstName lastName name email');
    if (!chat) return errorResponse('Chat not found', 404);

    return successResponse(chat);
  } catch (error) {
    return errorResponse(
      error.message,
      error.message.includes('authorized') ? 401 : 500
    );
  }
}
