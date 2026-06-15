import { protect } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

// Flat-rate shipping until EasyPost is configured
// To enable live rates: npm install @easypost/api and set EASYPOST_API_KEY in .env.local
export async function POST(req) {
  try {
    const user = await protect(req);
    if (!user) return errorResponse('Unauthorized', 401);

    const body = await req.json();
    const { cartItems } = body;

    if (!cartItems || cartItems.length === 0) {
      return errorResponse('Missing cart items', 400);
    }

    // Calculate flat-rate options based on cart total weight
    const totalItems = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);

    const rates = [
      {
        id: 'rate_standard',
        carrier: 'USPS',
        service: 'Priority Mail',
        rate: totalItems <= 2 ? '7.99' : '12.99',
        currency: 'USD',
        delivery_days: 3,
        est_delivery_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
      {
        id: 'rate_express',
        carrier: 'USPS',
        service: 'Priority Mail Express',
        rate: totalItems <= 2 ? '24.99' : '34.99',
        currency: 'USD',
        delivery_days: 1,
        est_delivery_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
      {
        id: 'rate_ground',
        carrier: 'UPS',
        service: 'Ground',
        rate: totalItems <= 2 ? '9.99' : '14.99',
        currency: 'USD',
        delivery_days: 5,
        est_delivery_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
    ];

    return successResponse(rates);
  } catch (error) {
    return errorResponse(
      error.message,
      error.message.includes('authorized') ? 401 : 500
    );
  }
}
