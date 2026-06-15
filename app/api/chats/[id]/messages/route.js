import connectDB from '@/lib/db';
import Chat from '@/models/Chat';
import { protect } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

/**
 * POST /api/chats/[id]/messages
 * Authenticated (user or admin) — appends a message to the thread.
 * Body: { message: string }
 */
export async function POST(req, { params }) {
  try {
    const user = await protect(req);
    await connectDB();

    const { message } = await req.json();
    if (!message?.trim()) return errorResponse('Message text is required.', 400);

    const chat = await Chat.findById(params.id);
    if (!chat) return errorResponse('Chat not found.', 404);

    // Only the thread owner or an admin can post
    const isOwner = String(chat.user) === String(user._id);
    if (!isOwner && !user.isAdmin) {
      return errorResponse('Not authorized to post to this chat.', 401);
    }

    const newMessage = {
      sender: user.isAdmin ? 'admin' : 'user',
      text: message.trim(),
      timestamp: new Date(),
      read: false,
    };

    chat.messages.push(newMessage);
    chat.lastMessage = new Date();
    if (chat.status === 'closed') chat.status = 'open';

    await chat.save();
    return successResponse(chat);
  } catch (error) {
    return errorResponse(
      error.message,
      error.message.includes('authorized') ? 401 : 500
    );
  }
}
