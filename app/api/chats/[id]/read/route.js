import connectDB from '@/lib/db';
import Chat from '@/models/Chat';
import { protect } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * PUT /api/chats/[id]/read
 * Marks all messages in the thread as read for the calling party.
 * Admin calling → marks all user messages as read.
 * User calling → marks all admin messages as read.
 */
export async function PUT(req, { params }) {
  try {
    const user = await protect(req);
    await connectDB();

    const chat = await Chat.findById(params.id);
    if (!chat) return errorResponse('Chat not found.', 404);

    const isOwner = String(chat.user) === String(user._id);
    if (!isOwner && !user.isAdmin) {
      return errorResponse('Not authorized.', 401);
    }

    const markSender = user.isAdmin ? 'user' : 'admin';
    chat.messages.forEach((msg) => {
      if (msg.sender === markSender) msg.read = true;
    });

    await chat.save();
    return successResponse({ message: 'Messages marked as read.' });
  } catch (error) {
    return errorResponse(
      error.message,
      error.message.includes('authorized') ? 401 : 500
    );
  }
}
