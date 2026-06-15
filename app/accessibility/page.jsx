import React from 'react';
import '@/styles/PolicyPages.css';

const Accessibility = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Accessibility Statement</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            We're committed to making our website accessible and usable for everyone.
                            Inclusivity and equal access are core values at Ink Kart LLC.
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
                            <h3>WCAG 2.1 AA</h3>
                            <p>Following recognized accessibility standards</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                </svg>
                            </div>
                            <h3>For Everyone</h3>
                            <p>Barrier-free shopping experience</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                </svg>
                            </div>
                            <h3>We Listen</h3>
                            <p>Your feedback helps us improve</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            <h3>Ongoing Effort</h3>
                            <p>Continuous improvement and updates</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>Our Commitment</h2>
                            <p>We aim to follow best practices based on widely recognized accessibility guidelines:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>✅ WCAG 2.1 AA</h4>
                                    <p>Web Content Accessibility Guidelines</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ ADA Title III</h4>
                                    <p>Americans with Disabilities Act</p>
                                </div>
                                <div className="feature-item">
                                    <h4>✅ Section 508</h4>
                                    <p>Federal accessibility standards</p>
                                </div>
                            </div>
                            <p className="policy-note">
                                Our goal is to make our website readable, navigable, and usable with assistive technologies.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Accessibility Features</h2>
                            <p>To support accessibility, Ink Kart LLC includes:</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>⌨️ Keyboard Navigation</h4>
                                    <p>Navigate menus, links, and sections using keyboard only</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔊 Screen Reader Support</h4>
                                    <p>Compatible with assistive reading tools</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🖼️ Text Alternatives</h4>
                                    <p>Descriptive alt tags for all images</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📋 Clear Structure</h4>
                                    <p>Consistent headings and organization</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🔍 Adjustable Text</h4>
                                    <p>Zoom and resize without losing functionality</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🎨 Color Contrast</h4>
                                    <p>WCAG-compliant contrast ratios</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🧭 Predictable Navigation</h4>
                                    <p>Consistent menus and layouts</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📱 Responsive Design</h4>
                                    <p>Works on all devices and screen sizes</p>
                                </div>
                            </div>
                        </section>

                        <section className="policy-section">
                            <h2>Ongoing Accessibility Efforts</h2>
                            <p>Accessibility is a continuous process. We regularly:</p>
                            <ul>
                                <li>Review website content for accessibility compliance</li>
                                <li>Improve navigation and user experience</li>
                                <li>Test pages with various assistive technologies</li>
                                <li>Update features to support more tools and devices</li>
                                <li>Integrate user suggestions and feedback</li>
                                <li>Train our team on accessibility best practices</li>
                            </ul>
                            <p className="policy-note">
                                We're committed to making reasonable changes as technology and standards evolve.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Third-Party Tools & Content</h2>
                            <p>Some tools or links on our website may be provided by third parties:</p>
                            <ul>
                                <li>Payment processors</li>
                                <li>Shipping carriers</li>
                                <li>External resources and documentation</li>
                            </ul>
                            <p className="policy-note">
                                While we cannot control third-party accessibility practices, we encourage these partners
                                to support inclusive experiences.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Need Assistance?</h2>
                            <p>If you experience any difficulty browsing or using our website, we genuinely want to help.</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📧 Email Support</h4>
                                    <p><a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                                </div>
                                <div className="feature-item">
                                    <h4>📍 Mailing Address</h4>
                                    <p>7181 Beacon Dr 15<br />Reno, NV 89506</p>
                                </div>
                            </div>

                            <h3>When Contacting Us, Please Describe:</h3>
                            <ul>
                                <li>The page or feature you were trying to access</li>
                                <li>The nature of the accessibility issue</li>
                                <li>Any assistive technology you were using</li>
                                <li>Your browser and device information</li>
                            </ul>
                            <p>We will work to resolve the issue promptly.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Feedback & Suggestions</h2>
                            <p>We value accessibility feedback and suggestions.</p>
                            <p>If you have ideas or recommendations that may help improve your experience, please contact us.</p>
                            <p className="policy-note">
                                Your input helps us continue to improve accessibility for all users.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Let's Work Together for Better Accessibility</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>📍 Address: 7181 Beacon Dr 15, Reno, NV 89506</p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                            <p>We're committed to providing all customers with a comfortable, inclusive, and user-friendly shopping experience.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Accessibility;


