import React from 'react';
import '@/styles/PolicyPages.css';

const CookiePolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content" style={{ paddingBottom: 0 }}>
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Cookie Policy</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            Learn how we use cookies to provide essential website functions and improve your
                            shopping experience. We believe in transparency and user control.
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
                            <h3>Essential Only</h3>
                            <p>We use only necessary cookies for core functions</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h3>No Tracking</h3>
                            <p>No advertising or behavioral tracking cookies</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                </svg>
                            </div>
                            <h3>Your Control</h3>
                            <p>Manage cookies through your browser settings</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>Privacy First</h3>
                            <p>Cookies support security and functionality</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>What Are Cookies?</h2>
                            <p>Cookies are small text files stored on your device when you visit a website. They help:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>💾 Remember Preferences</h4>
                                    <p>Save your settings for next visit</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🛒 Keep Cart Active</h4>
                                    <p>Maintain items in your cart</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔐 Enable Security</h4>
                                    <p>Protect your account and data</p>
                                </div>
                                <div className="feature-item">
                                    <h4>⚡ Improve Performance</h4>
                                    <p>Make the site work smoothly</p>
                                </div>
                            </div>
                            <p className="policy-note">
                                Cookies do not give us access to your computer or share personal information unless you voluntarily provide it.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Types of Cookies We Use</h2>

                            <h3>Strictly Necessary Cookies</h3>
                            <p>These cookies are required for the website to function properly:</p>
                            <ul>
                                <li>Secure checkout and payment processing</li>
                                <li>Shopping cart functionality</li>
                                <li>Login and account access</li>
                                <li>Page navigation and session management</li>
                                <li>Fraud prevention and security</li>
                            </ul>
                            <p className="policy-note">
                                These cookies cannot be disabled through our website but can be blocked in your browser
                                (may affect functionality).
                            </p>

                            <h3>Functional Cookies</h3>
                            <p>These cookies enhance your browsing experience:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>🌐 Language Preferences</h4>
                                    <p>Remember your language choice</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🎨 Layout Settings</h4>
                                    <p>Save your display preferences</p>
                                </div>
                                <div className="feature-item">
                                    <h4>⚡ Performance</h4>
                                    <p>Optimize website speed</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>Cookies We Do NOT Use</h2>
                            <p>To maintain transparency and respect your privacy:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ Advertising Cookies</h4>
                                    <p>No third-party ad tracking</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Behavioral Tracking</h4>
                                    <p>No retargeting or profiling</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Social Media Pixels</h4>
                                    <p>No cross-site tracking</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Analytics Tracking</h4>
                                    <p>No personal identifier collection</p>
                                </div>
                            </div>
                            <p className="policy-note">
                                Our cookie usage is limited to essential e-commerce operations only.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>How to Manage Cookies</h2>
                            <p>You can control cookie settings through your browser:</p>

                            <div className="browser-instructions">
                                <h4>Browser Cookie Settings</h4>

                                <div className="browser-item">
                                    <strong>🌐 Google Chrome</strong>
                                    <p>Settings → Privacy and Security → Cookies and Other Site Data</p>
                                </div>

                                <div className="browser-item">
                                    <strong>🦊 Mozilla Firefox</strong>
                                    <p>Options → Privacy & Security → Cookies and Site Data</p>
                                </div>

                                <div className="browser-item">
                                    <strong>🧭 Safari (Mac/iOS)</strong>
                                    <p>Preferences → Privacy → Block All Cookies</p>
                                </div>

                                <div className="browser-item">
                                    <strong>🌊 Microsoft Edge</strong>
                                    <p>Settings → Cookies and Site Permissions → Manage Cookies</p>
                                </div>
                            </div>

                            <p className="policy-note">
                                Disabling essential cookies may cause issues with checkout, login, cart functionality, and order placement.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Third-Party Tools</h2>
                            <p>Some essential service providers may use necessary cookies:</p>
                            <ul>
                                <li>Payment processors (for secure transactions)</li>
                                <li>Hosting services (for website operation)</li>
                                <li>Security services (for fraud prevention)</li>
                            </ul>
                            <p className="policy-note">
                                These cookies do not collect personal information for marketing or cross-site tracking.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Questions About Cookies?</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>📍 Address: 7181 Beacon Dr 15, Reno, NV 89506</p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                            <p>We're happy to clarify anything related to privacy or website functionality.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CookiePolicy;


