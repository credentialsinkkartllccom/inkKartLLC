import nodemailer from 'nodemailer';

let transporter = null;

/** Build a nodemailer transporter once and cache it. */
const getTransporter = () => {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP configuration missing. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local'
    );
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // TLS on 465, STARTTLS on others
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false, // allow self-signed or shared hosting certs
      minVersion: 'TLSv1.2',
    },
  });

  return transporter;
};

/** Generate a 6-digit numeric OTP. */
export const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

/** Send a plain transactional email. */
export const sendEmail = async ({ to, subject, html, text, fromName, replyTo }) => {
  try {
    const mail = getTransporter();
    const fromAddress = process.env.SMTP_USER;

    const info = await mail.sendMail({
      from: `"${fromName || 'inkKartLLC'}" <${fromAddress}>`,
      to,
      replyTo: replyTo || fromAddress,
      subject,
      text,
      html,
    });

    console.log('[emailService] Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('[emailService] sendEmail error:', error.message);
    return false;
  }
};

/**
 * Send the OTP email for registration or password reset.
 * @param {string} email  Recipient address
 * @param {string} otp    6-digit code
 * @param {'registration'|'forgot-password'} type
 */
export const sendOTPEmail = async (email, otp, type = 'registration') => {
  try {
    const mail = getTransporter();
    const fromAddress = process.env.SMTP_USER;
    const isRegistration = type === 'registration';

    const subject = isRegistration
      ? 'Verify your inkKartLLC Account'
      : 'Reset your inkKartLLC Password';

    const headline = isRegistration ? 'Email Verification' : 'Password Reset';
    const bodyLine = isRegistration
      ? 'Use the OTP below to verify your email and complete your registration.'
      : 'Use the OTP below to reset your inkKartLLC account password.';

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#024ad8 0%,#0133a1 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">
                ink<span style="color:#93c5fd;">Kart</span>LLC
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:1px;text-transform:uppercase;">${headline}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 8px;font-size:15px;color:#1e293b;font-weight:600;">Hi there,</p>
              <p style="margin:0 0 28px;font-size:14px;color:#64748b;line-height:1.7;">${bodyLine}</p>

              <!-- OTP Box -->
              <div style="text-align:center;background:#eff6ff;border-radius:16px;padding:28px 20px;margin-bottom:28px;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:2px;">Your One-Time Password</p>
                <div style="font-size:44px;font-weight:900;letter-spacing:12px;color:#024ad8;font-variant-numeric:tabular-nums;">${otp}</div>
              </div>

              <p style="margin:0;font-size:13px;color:#94a3b8;text-align:center;">
                This code expires in <strong>10 minutes</strong>.<br/>
                Never share this code with anyone.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#f8fafc;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:11px;color:#94a3b8;">
                &copy; ${new Date().getFullYear()} inkKartLLC. All rights reserved.<br/>
                If you didn&apos;t request this, you can safely ignore this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const info = await mail.sendMail({
      from: `"inkKartLLC Security" <${fromAddress}>`,
      to: email,
      subject,
      html,
    });

    console.log('[emailService] OTP email sent to', email, '| id:', info.messageId);
    return true;
  } catch (error) {
    console.error('[emailService] sendOTPEmail error:', error.message);
    // In dev, rethrow so the API can surface devOtp from the response
    if (process.env.NODE_ENV === 'development') {
      return false; // Don't crash — just return false and let the route expose devOtp
    }
    return false;
  }
};
