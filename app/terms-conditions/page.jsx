"use client";

import React, { useEffect } from 'react';
import '@/styles/PolicyPages.css';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Terms & Conditions</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            Please read these terms carefully. By using our website, you agree to these terms
                            which govern your use of Ink Kart LLC and any purchases you make.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                                </svg>
                            </div>
                            <h3>Fair Terms</h3>
                            <p>Clear, transparent conditions for all users</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>Your Rights</h3>
                            <p>Protected under consumer laws</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>Secure Shopping</h3>
                            <p>Safe and protected transactions</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                </svg>
                            </div>
                            <h3>Easy Returns</h3>
                            <p>30-day return policy</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>Company Information</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>🏢 Ink Kart LLC</h4>
                                    <p>Independent online retailer</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📍 Location</h4>
                                    <p>7181 Beacon Dr 15, Reno, NV 89506</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📧 Contact</h4>
                                    <p><a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                                </div>
                                <div className="feature-item">
                                    <h4>🌐 Website</h4>
                                    <p><a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                                </div>
                            </div>
                            <p className="policy-note">
                                We are not affiliated with or endorsed by any manufacturer. All trademarks belong to their respective owners.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Acceptance of Terms</h2>
                            <p>By using our website, placing an order, or contacting us, you acknowledge that:</p>
                            <ul>
                                <li>You have read and understood these Terms</li>
                                <li>You agree to comply with all applicable laws</li>
                                <li>You are at least 18 years of age or have guardian permission</li>
                                <li>You accept responsibility for your account activity</li>
                            </ul>
                            <p className="policy-note">
                                If you disagree with any part of these Terms, please discontinue use of the site.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Use of Website</h2>
                            <p>You agree to use our website only for lawful purposes. You must not:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ Fraudulent Activity</h4>
                                    <p>No unauthorized transactions</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Interference</h4>
                                    <p>Don't disrupt website functionality</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Unauthorized Access</h4>
                                    <p>No hacking or breaching security</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Content Misuse</h4>
                                    <p>Don't copy or scrape content</p>
                                </div>
                            </div>
                            <p>We reserve the right to suspend access for violations.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Product Information & Accuracy</h2>
                            <p>We strive to provide accurate product information, including:</p>
                            <ul>
                                <li>Detailed specifications and features</li>
                                <li>High-quality product images</li>
                                <li>Current pricing and availability</li>
                                <li>Compatibility information</li>
                            </ul>
                            <p className="policy-note">
                                Product details may be updated by manufacturers without notice. Colors may vary based on device settings.
                                Page yields are estimates based on standardized testing.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Ordering & Payments</h2>
                            <p>By placing an order, you confirm that:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>✅ Accurate Information</h4>
                                    <p>All details provided are correct</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Payment Authorization</h4>
                                    <p>You're authorized to use the payment method</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Order Acceptance</h4>
                                    <p>Orders subject to availability</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Secure Processing</h4>
                                    <p>Payments processed safely</p>
                                </div>
                            </div>

                            <h3>We May Cancel Orders For:</h3>
                            <ul>
                                <li>Incorrect pricing or product information</li>
                                <li>Payment processing issues</li>
                                <li>Suspected fraudulent activity</li>
                                <li>Product unavailability</li>
                            </ul>
                        </section>

                        <section className="policy-section">
                            <h2>Shipping & Delivery</h2>
                            <p>Delivery timelines vary based on location, carrier operations, and product availability.</p>
                            <p className="policy-note">
                                Estimated delivery dates are provided during checkout but are not guaranteed.
                                Risk of loss transfers to the customer upon carrier delivery.
                            </p>
                            <p>Please review our <strong>Shipping Policy</strong> for full details.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Returns & Refunds</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📅 30-Day Window</h4>
                                    <p>Return within 30 days</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📦 Original Packaging</h4>
                                    <p>Unused and unopened items</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✉️ RMA Required</h4>
                                    <p>Authorization before return</p>
                                </div>
                                <div className="feature-item">
                                    <h4>💰 Refund Process</h4>
                                    <p>After inspection approval</p>
                                </div>
                            </div>
                            <p>See our <strong>Return & Exchange Policy</strong> for complete guidelines.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Intellectual Property</h2>
                            <p>All website content is owned by or licensed to Ink Kart LLC and protected by intellectual property laws.</p>
                            <p>You may not copy, modify, distribute, or reproduce any content without written permission.</p>
                            <p className="policy-note">
                                All third-party trademarks and brand names belong to their respective owners and are used only for identification.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Limitation of Liability</h2>
                            <p>To the extent permitted by law, Ink Kart LLC is not liable for:</p>
                            <ul>
                                <li>Indirect or incidental damages</li>
                                <li>Loss of data, revenue, or profits</li>
                                <li>Issues caused by third-party carriers</li>
                                <li>Misuse of products after purchase</li>
                            </ul>
                            <p className="policy-note">
                                Our total liability for any claim shall not exceed the amount paid for the product involved.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Governing Law</h2>
                            <p>These Terms & Conditions are governed by the laws of the United States.</p>
                            <p>Any disputes will be handled under the jurisdiction of applicable U.S. courts.</p>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Questions About These Terms?</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>📍 Address: 7181 Beacon Dr 15, Reno, NV 89506</p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsConditions;


