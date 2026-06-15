"use client";

import React, { useEffect } from 'react';
import '@/styles/PolicyPages.css';

const RefundReturnPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Return & Refund Policy</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            Our simple, fair return policy for your peace of mind. If you're not satisfied, we're here to help.
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
                            <h3>30-Day Returns</h3>
                            <p>Return within 30 days of delivery</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z" />
                                </svg>
                            </div>
                            <h3>Original Condition</h3>
                            <p>Unused and unopened items</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                </svg>
                            </div>
                            <h3>Easy Process</h3>
                            <p>Simple return steps</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                </svg>
                            </div>
                            <h3>Full Refund</h3>
                            <p>After inspection approval</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>Eligibility for Returns</h2>
                            <p>To be eligible for a return, your item must meet these criteria:</p>
                            <ul>
                                <li>Unused and in original packaging</li>
                                <li>Returned within 30 days of delivery</li>
                                <li>Accompanied by receipt or proof of purchase</li>
                                <li>Not a custom or special-order item</li>
                            </ul>
                            <p className="policy-note">
                                Opened consumables (ink/toner cartridges) are not eligible for return unless defective.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Return Process</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>1. Contact Us</h4>
                                    <p>Email support@inkkartllc.com to request an RMA number</p>
                                </div>
                                <div className="feature-item">
                                    <h4>2. Package Item</h4>
                                    <p>Pack items securely in original packaging</p>
                                </div>
                                <div className="feature-item">
                                    <h4>3. Ship Back</h4>
                                    <p>Send items using a trackable shipping service</p>
                                </div>
                                <div className="feature-item">
                                    <h4>4. Refund Issued</h4>
                                    <p>Refund processed after inspection (5-10 business days)</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>Shipping Costs</h2>
                            <p>Return shipping costs are the responsibility of the customer unless:</p>
                            <ul>
                                <li>The item received is defective or damaged</li>
                                <li>We sent an incorrect item</li>
                            </ul>
                            <p className="policy-note">
                                Original shipping charges are non-refundable unless the return is due to our error.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Refunds</h2>
                            <p>Once your return is received and inspected, we will send you an email notification.</p>
                            <ul>
                                <li>Approved refunds are processed to original payment method</li>
                                <li>Allow 5-10 business days for refund to appear in your account</li>
                                <li>Timing may vary depending on your financial institution</li>
                            </ul>
                        </section>

                        <section className="policy-section">
                            <h2>Exchanges</h2>
                            <p>We only replace items if they are defective or damaged. Contact us immediately if you need an exchange.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Non-Returnable Items</h2>
                            <p>Certain items are non-returnable:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>Opened Consumables</h4>
                                    <p>Ink, toner, or supplies that have been opened</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Custom Orders</h4>
                                    <p>Special or custom ordered items</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Downloadable Software</h4>
                                    <p>Digital products (if applicable)</p>
                                </div>
                                <div className="feature-item">
                                    <h4>Gift Cards</h4>
                                    <p>All gift card purchases</p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Questions About Returns?</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                            <p>We're here to help with your return needs.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RefundReturnPolicy;