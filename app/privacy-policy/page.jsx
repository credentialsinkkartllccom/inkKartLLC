"use client";

import React, { useEffect } from 'react';
import '@/styles/PolicyPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            Your privacy matters to us. We're committed to protecting your personal information
                            and being transparent about how we collect, use, and safeguard your data.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>We Don't Sell Data</h3>
                            <p>Your information is never sold or shared for advertising</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                </svg>
                            </div>
                            <h3>SSL Encryption</h3>
                            <p>All data is protected with industry-standard security</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <h3>Essential Cookies Only</h3>
                            <p>No advertising or tracking cookies used</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3>Your Rights</h3>
                            <p>Access, correct, or delete your data anytime</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>Company Information</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📍 Address</h4>
                                    <p>7181 Beacon Dr 15<br />Reno, NV 89506<br />United States</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📧 Email</h4>
                                    <p><a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                                </div>
                                <div className="feature-item">
                                    <h4>🌐 Website</h4>
                                    <p><a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                                </div>
                            </div>
                            <p>We operate as an independent online retailer offering printers, ink, toner, and printing supplies.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Information We Collect</h2>

                            <h3>Information You Provide</h3>
                            <p>When you make a purchase or create an account, you voluntarily provide:</p>
                            <ul>
                                <li>Name and contact information</li>
                                <li>Email address for order updates</li>
                                <li>Billing and shipping addresses</li>
                                <li>Phone number (optional)</li>
                                <li>Payment details (processed securely)</li>
                                <li>Order history and preferences</li>
                            </ul>

                            <h3>Automatically Collected Information</h3>
                            <p>When you browse our website, we collect limited technical data:</p>
                            <ul>
                                <li>IP address and browser type</li>
                                <li>Device information</li>
                                <li>Pages viewed and time spent</li>
                                <li>Essential session data for cart functionality</li>
                            </ul>
                            <p className="policy-note">
                                We do not use third-party tracking tools for behavioral advertising.
                            </p>

                            <h3>Cookies & Essential Technologies</h3>
                            <p>We use only essential cookies for:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>🛒 Secure Checkout</h4>
                                    <p>Processing payments safely</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🛍️ Cart Function</h4>
                                    <p>Saving your items</p>
                                </div>
                                <div className="feature-item">
                                    <h4>⚡ Performance</h4>
                                    <p>Website optimization</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔐 Security</h4>
                                    <p>Fraud prevention</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>How We Use Your Information</h2>
                            <p>We process your information only for legitimate business purposes:</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📦 Order Processing</h4>
                                    <p>Managing orders, payments, shipping, and delivery</p>
                                </div>
                                <div className="feature-item">
                                    <h4>💬 Customer Support</h4>
                                    <p>Responding to inquiries and providing assistance</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔒 Security</h4>
                                    <p>Protecting against fraud and unauthorized activity</p>
                                </div>
                                <div className="feature-item">
                                    <h4>⚖️ Legal Compliance</h4>
                                    <p>Meeting tax and regulatory requirements</p>
                                </div>
                            </div>

                            <p className="policy-note">
                                We do NOT sell or share your personal information for advertising purposes.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Information Sharing</h2>
                            <p>We only share your information with trusted third parties necessary for operations:</p>
                            <ul>
                                <li>Payment processors (for secure transactions)</li>
                                <li>Shipping carriers (for delivery)</li>
                                <li>Customer communication tools</li>
                                <li>Fraud-prevention services</li>
                                <li>IT and hosting providers</li>
                                <li>Legal authorities (when required by law)</li>
                            </ul>

                            <h3>We DO NOT:</h3>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ Sell Personal Data</h4>
                                    <p>Your data is never sold to third parties</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Share for Advertising</h4>
                                    <p>No marketing or ad targeting</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Allow Unauthorized Access</h4>
                                    <p>Strict access controls in place</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>Data Security</h2>
                            <p>We use industry-standard security measures:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>🔐 SSL/TLS Encryption</h4>
                                    <p>All data transmitted securely</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Secure Checkout</h4>
                                    <p>PCI-compliant payment processing</p>
                                </div>
                                <div className="feature-item">
                                    <h4>👥 Access Controls</h4>
                                    <p>Limited employee access</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🛡️ Monitoring</h4>
                                    <p>Regular security audits</p>
                                </div>
                            </div>
                            <p className="policy-note">
                                While no method is 100% secure, we take reasonable steps to safeguard your information.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Your Privacy Rights</h2>
                            <p>Depending on your location, you have the right to:</p>

                            <ul>
                                <li><strong>Access Your Data:</strong> Request a copy of information we hold</li>
                                <li><strong>Request Corrections:</strong> Update inaccurate information</li>
                                <li><strong>Request Deletion:</strong> Ask to have your data deleted</li>
                                <li><strong>Opt Out:</strong> Unsubscribe from non-essential emails</li>
                                <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                            </ul>

                            <h3>CCPA/CPRA Rights (California Residents)</h3>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📋 Right to Know</h4>
                                    <p>What data is collected</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🗑️ Right to Delete</h4>
                                    <p>Request data removal</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🚫 Right to Opt Out</h4>
                                    <p>Stop data "sale" or sharing</p>
                                </div>
                                <div className="feature-item">
                                    <h4>⚖️ Non-Discrimination</h4>
                                    <p>Equal service regardless</p>
                                </div>
                            </div>

                            <p className="policy-note">
                                Ink Kart LLC does not sell or share personal information under CCPA/CPRA definitions.
                            </p>

                            <h3>How to Exercise These Rights</h3>
                            <p>Email us at <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>We may request identity verification for your safety.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Data Retention</h2>
                            <p>We retain your information only as long as necessary to:</p>
                            <ul>
                                <li>Fulfill orders and provide services</li>
                                <li>Meet legal and tax obligations</li>
                                <li>Maintain business records</li>
                                <li>Prevent fraud and resolve disputes</li>
                            </ul>
                            <p>When no longer needed, data is securely deleted or anonymized.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Children's Privacy</h2>
                            <p>Our services are not intended for children under 13.</p>
                            <p>We do not knowingly collect personal information from children.</p>
                            <p className="policy-note">
                                If we learn that we have unintentionally collected such data, we will delete it promptly.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Questions About Privacy?</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>📍 Address: 7181 Beacon Dr 15, Reno, NV 89506</p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                            <p>We will respond within a reasonable timeframe.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;


