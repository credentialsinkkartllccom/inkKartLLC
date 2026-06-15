"use client";

import React, { useEffect } from 'react';
import '@/styles/PolicyPages.css';

const ShippingPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
        {/* Hero Section */}
        <div className="policy-hero">
          <div className="policy-hero-content">
            <h1>Shipping Policy</h1>
            <p className="last-updated">Last Updated: January 26, 2026</p>
            <p className="intro-text">
              Fast, reliable shipping across the US and Canada. We're committed to getting your
              printing supplies to you quickly and safely.
            </p>
          </div>
        </div>

        <div className="policy-content-container">
          {/* Quick Info Cards */}
          <div className="policy-info-cards">
            <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>1-2 Day Processing</h3>
              <p>Orders are processed and shipped within 1-2 business days</p>
            </div>

            <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3>Secure Packaging</h3>
              <p>All items are carefully packaged to ensure safe delivery</p>
            </div>

            <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3>Track Your Order</h3>
              <p>Receive tracking information via email once shipped</p>
            </div>

            <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <h3>Trusted Carriers</h3>
              <p>USPS, UPS, FedEx, and Canada Post</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="policy-content-card">
            <section className="policy-section">
              <h2>Shipping Locations</h2>
              <div className="feature-grid">
                <div className="feature-item">
                  <h4>🇺🇸 United States</h4>
                  <p>All 50 states including Alaska and Hawaii</p>
                </div>
                <div className="feature-item">
                  <h4>🇨🇦 Canada</h4>
                  <p>All provinces (excluding remote regions)</p>
                </div>
              </div>
              <p className="policy-note">
                We currently do not ship internationally outside the United States and Canada.
              </p>
            </section>

            <section className="policy-section">
              <h2>Processing Time</h2>
              <p>Orders are typically processed within <strong>1–2 business days</strong>.</p>
              <p>Processing includes:</p>
              <ul>
                <li>Order verification and payment confirmation</li>
                <li>Secure packaging of your items</li>
                <li>Quality checks to ensure accuracy</li>
                <li>Preparation for carrier pickup</li>
              </ul>
              <p className="policy-note">
                Orders placed on weekends or holidays will be processed on the next business day.
                Processing times may vary during peak seasons.
              </p>
            </section>

            <section className="policy-section">
              <h2>Delivery Timeframes</h2>
              <p>Delivery times depend on your location, product availability, and carrier operations.</p>

              <div className="delivery-tables">
                <div className="delivery-table">
                  <h3>🇺🇸 United States</h3>
                  <ul>
                    <li><strong>Standard Shipping:</strong> 3–7 business days</li>
                    <li><strong>Expedited Shipping:</strong> 2–4 business days (when available)</li>
                  </ul>
                </div>

                <div className="delivery-table">
                  <h3>🇨🇦 Canada</h3>
                  <ul>
                    <li><strong>Standard Shipping:</strong> 5–10 business days</li>
                    <li><strong>Expedited Shipping:</strong> 3–7 business days (when available)</li>
                  </ul>
                </div>
              </div>

              <p className="policy-note">
                Delivery estimates are not guaranteed and may vary due to weather, carrier delays,
                or other unforeseen circumstances.
              </p>
            </section>

            <section className="policy-section">
              <h2>Shipping Costs</h2>
              <p>Shipping fees are calculated at checkout based on:</p>
              <ul>
                <li>Total weight of your items</li>
                <li>Shipping destination</li>
                <li>Current carrier rates</li>
                <li>Selected shipping method</li>
              </ul>
              <p className="policy-note">
                Free shipping may be available during special promotions. Eligibility will be
                clearly displayed at checkout when applicable.
              </p>
            </section>

            <section className="policy-section">
              <h2>Shipping Carriers</h2>
              <p>We partner with trusted carriers to ensure reliable delivery:</p>
              <div className="feature-grid">
                <div className="feature-item">
                  <h4>📮 USPS</h4>
                  <p>United States Postal Service</p>
                </div>
                <div className="feature-item">
                  <h4>📦 UPS</h4>
                  <p>United Parcel Service</p>
                </div>
                <div className="feature-item">
                  <h4>🚚 FedEx</h4>
                  <p>Federal Express</p>
                </div>
                <div className="feature-item">
                  <h4>🇨🇦 Canada Post</h4>
                  <p>For Canadian orders</p>
                </div>
              </div>
              <p>Carrier availability may vary by region.</p>
            </section>

            <section className="policy-section">
              <h2>Order Tracking</h2>
              <p>Once your order ships, you'll receive an email containing:</p>
              <ul>
                <li>Your unique tracking number</li>
                <li>Carrier name and contact information</li>
                <li>Direct link to track your package</li>
                <li>Estimated delivery date</li>
              </ul>
              <p className="policy-note">
                Tracking updates may take up to 24 hours to appear after carrier pickup.
              </p>
            </section>

            <section className="policy-section">
              <h2>Address Accuracy</h2>
              <p>Please ensure your shipping address is complete and accurate before checkout.</p>
              <p>Ink Kart LLC is not responsible for:</p>
              <ul>
                <li>Delays caused by incorrect addresses</li>
                <li>Packages delivered to wrong locations</li>
                <li>Returned shipments due to incomplete information</li>
              </ul>
              <p className="policy-note">
                If a package is returned due to an incorrect address, reshipping fees may apply.
              </p>
            </section>

            <section className="policy-section">
              <h2>Lost or Stolen Packages</h2>
              <p>If your tracking shows "delivered" but you didn't receive the package:</p>
              <ul>
                <li>Check with neighbors or building management</li>
                <li>Wait 24–48 hours (packages are sometimes scanned early)</li>
                <li>Contact the carrier directly using your tracking number</li>
                <li>Reach out to our support team for assistance</li>
              </ul>
              <p className="policy-note">
                While we cannot guarantee replacement for lost or stolen packages, we'll work
                with you to investigate and resolve the issue.
              </p>
            </section>

            <section className="policy-section">
              <h2>Damaged Shipments</h2>
              <p>If your order arrives damaged:</p>
              <ul>
                <li>Contact us within 48 hours of delivery</li>
                <li>Include photos of the product and packaging</li>
                <li>Provide your order number</li>
              </ul>
              <p>We'll review your case and provide appropriate next steps for resolution.</p>
            </section>

            <section className="policy-section">
              <h2>Customs & Duties (Canada)</h2>
              <p>Canadian orders may be subject to:</p>
              <ul>
                <li>Import fees and customs duties</li>
                <li>Provincial and federal taxes</li>
                <li>Brokerage fees (depending on carrier)</li>
              </ul>
              <p className="policy-note">
                These charges are the customer's responsibility and are not included in product
                or shipping costs.
              </p>
            </section>

            {/* Contact Section */}
            <div className="contact-info-box">
              <h3>Questions About Shipping?</h3>
              <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
              <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
              <p>We aim to respond promptly during standard business hours.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShippingPolicy;


