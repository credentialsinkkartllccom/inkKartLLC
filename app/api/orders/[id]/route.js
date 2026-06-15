import connectDB from '@/lib/db';
import Order from '@/models/Order';
import { protect, admin } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const order = await Order.findById(id).populate('user', 'name email');
    if (order) return successResponse(order);
    return errorResponse('Order not found', 404);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(req, { params }) {
  try {
    const user = await protect(req);
    admin(user);
    await connectDB();

    const { id } = await params;
    const order = await Order.findById(id);
    if (!order) return errorResponse('Order not found', 404);

    const body = await req.json();

    if (body.isPaid !== undefined) {
      order.isPaid = body.isPaid;
      if (body.isPaid) order.paidAt = Date.now();
    }
    if (body.isDelivered !== undefined) {
      order.isDelivered = body.isDelivered;
      if (body.isDelivered) order.deliveredAt = Date.now();
    }
    if (body.status) order.status = body.status;
    if (body.tracking) order.tracking = { ...order.tracking, ...body.tracking };

    const updatedOrder = await order.save();
    return successResponse(updatedOrder);
  } catch (error) {
    return errorResponse(error.message, error.message.includes('authorized') ? 401 : 500);
  }
}
