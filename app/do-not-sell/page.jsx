import React from 'react';
import '@/styles/PolicyPages.css';

const DoNotSell = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Do Not Sell My Personal Information</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            Your privacy rights under CCPA/CPRA are important to us. We're committed to transparency
                            and giving you control over your personal information.
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
                            <p>Your information is never sold to third parties</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3>Your Rights</h3>
                            <p>Full CCPA/CPRA privacy rights protection</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>Easy Requests</h3>
                            <p>Simple process to exercise your rights</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <h3>Transparent</h3>
                            <p>Clear information about data usage</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>We Do NOT Sell or Share Personal Information</h2>
                            <p>Ink Kart LLC does not sell, share, or exchange personal information for advertising, remarketing,
                                or commercial data-sharing purposes as defined under CCPA/CPRA.</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ No Data Sales</h4>
                                    <p>We never sell personal information</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ No Ad Sharing</h4>
                                    <p>No cross-context behavioral advertising</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ No Tracking Cookies</h4>
                                    <p>No third-party advertising cookies</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ No Retargeting</h4>
                                    <p>No remarketing systems used</p>
                                </div>
                            </div>

                            <p className="policy-note">
                                Your personal information is used only for essential business functions such as order processing,
                                secure payments, and customer communication.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Your Privacy Rights Under CCPA/CPRA</h2>
                            <p>California residents have the following rights:</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📋 Right to Know</h4>
                                    <p>Request information about personal data we collect, use, disclose, or retain</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🗑️ Right to Delete</h4>
                                    <p>Request deletion of your personal information (subject to legal requirements)</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✏️ Right to Correct</h4>
                                    <p>Request corrections to inaccurate information we hold</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🚫 Right to Opt Out</h4>
                                    <p>Opt out of any sale or sharing of personal information</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔒 Limit Sensitive Info</h4>
                                    <p>Request restrictions on use of sensitive personal information</p>
                                </div>
                                <div className="feature-item">
                                    <h4>⚖️ Non-Discrimination</h4>
                                    <p>Equal service regardless of exercising your rights</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>How to Submit a Request</h2>
                            <p>If you wish to exercise any CCPA/CPRA privacy rights:</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📧 Email Request</h4>
                                    <p><a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                                </div>
                                <div className="feature-item">
                                    <h4>📬 Mail Request</h4>
                                    <p>7181 Beacon Dr 15<br />Reno, NV 89506</p>
                                </div>
                            </div>

                            <h3>Please Include:</h3>
                            <ul>
                                <li>Your full name</li>
                                <li>Your contact email address</li>
                                <li>The specific request (Access, Delete, Correct, Opt-Out, etc.)</li>
                                <li>Any relevant account information</li>
                            </ul>

                            <p className="policy-note">
                                To protect your privacy, we may request additional information to verify your identity before
                                processing your request.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Categories of Personal Information</h2>
                            <p>We collect only information necessary for essential e-commerce operations:</p>
                            <ul>
                                <li>Name and contact details</li>
                                <li>Shipping and billing address</li>
                                <li>Email for order confirmations</li>
                                <li>Payment details (processed securely through third-party systems)</li>
                                <li>Order history and preferences</li>
                                <li>Basic website session data (non-marketing cookies)</li>
                            </ul>
                            <p className="policy-note">
                                We do not collect biometric, geolocation, or highly sensitive information for marketing purposes.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Purposes for Using Personal Information</h2>

                            <h3>We Use Information For:</h3>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>✅ Order Processing</h4>
                                    <p>Fulfillment and delivery</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Secure Payments</h4>
                                    <p>Transaction processing</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Customer Support</h4>
                                    <p>Assistance and communication</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Fraud Prevention</h4>
                                    <p>Security and protection</p>
                                </div>
                            </div>

                            <h3>We Do NOT Use For:</h3>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ Behavioral Advertising</h4>
                                    <p>No targeted ads</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Cross-Site Tracking</h4>
                                    <p>No tracking across websites</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Selling Data</h4>
                                    <p>Never sold to third parties</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Marketing Profiling</h4>
                                    <p>No automated profiling</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>Third-Party Service Providers</h2>
                            <p>We share data only with essential service providers:</p>
                            <ul>
                                <li>Payment processors (for secure transactions)</li>
                                <li>Shipping carriers (for delivery)</li>
                                <li>Customer communication tools</li>
                                <li>Fraud-prevention services</li>
                                <li>Hosting and IT infrastructure providers</li>
                            </ul>
                            <p className="policy-note">
                                These partners are contractually required to handle information securely and cannot use it for
                                advertising or resale.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Minors' Information</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>🚫 Under 13</h4>
                                    <p>We do not knowingly collect information from children under 13</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔒 Under 16</h4>
                                    <p>We do not sell or share data of minors under 16</p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Questions About Your Privacy Rights?</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>📍 Address: 7181 Beacon Dr 15, Reno, NV 89506</p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                            <p>We're committed to responding within a reasonable timeframe.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DoNotSell;


