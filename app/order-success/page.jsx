import Link from 'next/link';
import '@/styles/pages.css';

const OrderSuccess = () => {
  return (
    <>
      <div className="order-success-page bg-[var(--bg)] min-h-[60vh] flex items-center justify-center py-20">
        <div className="order-success-container max-w-2xl px-8">
          <div className="success-content text-center">
            <div className="success-icon mb-12 flex justify-center">
              <div className="w-24 h-24 border-2 border-[var(--accent)] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0096D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <h1 className="font-['DM Sans'] font-black text-4xl text-black uppercase tracking-widest mb-8">Order Confirmed</h1>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-8"></div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold leading-relaxed mb-6">
              Thank you for choosing Ink Kart LLC.
            </p>
            <p className="text-gray-400 text-sm leading-loose mb-12">
              Your order has been received and is now being processed by our professional staff.
              A confirmation email has been sent to your inbox with all pertinent details.
            </p>
            <div className="success-actions flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/printers" className="bg-black text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--accent)] transition-all">Continue Selection</Link>
              <Link href="/orders" className="border border-black text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">Browse History</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;

