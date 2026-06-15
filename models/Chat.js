import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    sender: { type: String, enum: ['user', 'admin'], required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
  }
);

const chatSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [messageSchema],
    status: { type: String, enum: ['open', 'closed'], default: 'open' },
    lastMessage: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema);
export default Chat;
