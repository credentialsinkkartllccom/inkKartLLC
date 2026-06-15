import { sendEmail } from '@/lib/emailService';
import { errorResponse, successResponse } from '@/lib/apiHelpers';

export async function POST(req) {
  try {
    const body = await req.json();
    const { type } = body;

    const receiver = process.env.FORM_DATA_MAIL || process.env.CONTACT_RECEIVER_EMAIL;
    if (!receiver) {
      return errorResponse('Contact receiver email not configured. Set FORM_DATA_MAIL in .env.local', 500);
    }

    let subject, html, text, fromName, replyToEmail;

    if (type === 'return-exchange') {
      const { fullName, email, phone, orderNumber, orderDate, deliveryDate, productName, reason, itemCondition, resolution, additionalDetails } = body;
      if (!fullName || !email) return errorResponse('fullName and email are required', 400);
      fromName = fullName;
      replyToEmail = email;
      subject = orderNumber ? `Return/Exchange Request: Order #${orderNumber} from ${fullName}` : `Return/Exchange Request from ${fullName}`;
      text = `Return/Exchange Request\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nOrder: ${orderNumber || 'N/A'}\nProduct: ${productName || 'N/A'}\nReason: ${reason || 'N/A'}\nResolution: ${resolution || 'N/A'}`;
      html = `<h3>Return/Exchange Request</h3><p><strong>Name:</strong> ${fullName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Order:</strong> ${orderNumber || 'N/A'}</p><p><strong>Product:</strong> ${productName || 'N/A'}</p><p><strong>Reason:</strong> ${reason || 'N/A'}</p><p><strong>Resolution:</strong> ${resolution || 'N/A'}</p><p><strong>Notes:</strong> ${(additionalDetails || 'N/A').replace(/\n/g, '<br>')}</p>`;
    } else {
      const { name, email, phone, orderNumber, subject: reqSubject, message } = body;
      if (!name || !email || !reqSubject || !message) return errorResponse('Please fill in all required fields', 400);
      fromName = name;
      replyToEmail = email;
      subject = `Contact Form: ${reqSubject} from ${name}`;
      text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nOrder: ${orderNumber || 'N/A'}\nMessage: ${message}`;
      html = `<h3>New Contact Message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || 'N/A'}</p><p><strong>Subject:</strong> ${reqSubject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`;
    }

    const sent = await sendEmail({ to: receiver, subject, html, text, fromName, replyTo: replyToEmail });

    if (sent) return successResponse({ message: 'Message sent successfully' });
    return errorResponse('Failed to send message', 500);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
}
