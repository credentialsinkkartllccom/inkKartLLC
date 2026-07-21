import React from 'react';
import '@/styles/PolicyPages.css';

const Disclaimer = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Disclaimer</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            Important information about product accuracy, brand independence, and limitations.
                            We strive for transparency in all aspects of our business.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <h3>Product Info</h3>
                            <p>Accurate descriptions based on manufacturer data</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>Independent</h3>
                            <p>Not affiliated with any manufacturer</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <h3>Transparency</h3>
                            <p>Clear about limitations and responsibilities</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>Warranties</h3>
                            <p>Manufacturer warranties apply where applicable</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">
                        <section className="policy-section">
                            <h2>Product Information & Accuracy</h2>
                            <p>We make reasonable efforts to ensure that:</p>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>📝 Descriptions</h4>
                                    <p>Clear and accurate product details</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🖼️ Images</h4>
                                    <p>Representative product photos</p>
                                </div>
                                <div className="feature-item">
                                    <h4>📊 Specifications</h4>
                                    <p>Manufacturer-provided information</p>
                                </div>
                                <div className="feature-item">
                                    <h4>💰 Pricing</h4>
                                    <p>Regularly updated costs</p>
                                </div>
                            </div>

                            <h3>However, Please Note:</h3>
                            <ul>
                                <li>Manufacturers may change product details without prior notice</li>
                                <li>Colors may appear differently due to screen settings</li>
                                <li>Page yields for ink and toner are approximate based on standardized testing</li>
                                <li>Features and compatibility may vary depending on usage conditions</li>
                                <li>Availability may change due to inventory updates</li>
                            </ul>

                            <p className="policy-note">
                                Ink Kart LLC is not responsible for unintentional typographical errors, outdated listings,
                                or minor variations between product images and physical items.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>No Professional or Technical Advice</h2>
                            <p>All content on this website is provided for informational and retail purposes only.</p>

                            <h3>Ink Kart LLC Does NOT Provide:</h3>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ Setup Instructions</h4>
                                    <p>Refer to manufacturer guides</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Troubleshooting</h4>
                                    <p>Contact manufacturer support</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Technical Support</h4>
                                    <p>Not provided for products</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Repair Advice</h4>
                                    <p>Consult authorized technicians</p>
                                </div>
                            </div>

                            <p className="policy-note">
                                Customers should refer to official manufacturer documentation for installation, usage instructions,
                                and technical support.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Brand Independence</h2>
                            <p>Ink Kart LLC is an independent online retailer.</p>
                            <p>We are <strong>not affiliated with, sponsored by, or endorsed by</strong> any printer or technology manufacturer, including:</p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>🖨️ Canon</h4>
                                    <p>Canon Inc.</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🖨️ Epson</h4>
                                    <p>Seiko Epson Corporation</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🖨️ Brother</h4>
                                    <p>Brother Industries</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🖨️ Lexmark</h4>
                                    <p>Lexmark International</p>
                                </div>
                                <div className="feature-item">
                                    <h4>🖨️ Xerox</h4>
                                    <p>Xerox Corporation</p>
                                </div>
                            </div>

                            <p className="policy-note">
                                All product names, logos, and trademarks belong to their respective owners and are used on this
                                website for identification and compatibility purposes only. Our use of these trademarks does not
                                imply partnership or authorization.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Manufacturer Warranties</h2>
                            <p>Products sold on our website may include warranties offered directly by their respective manufacturers.</p>

                            <h3>Important Notes:</h3>
                            <ul>
                                <li>Warranty terms vary by brand and product</li>
                                <li>Manufacturer warranties are not controlled by Ink Kart LLC</li>
                                <li>Coverage depends on the manufacturer's policies and region</li>
                                <li>Some products may have limited or no warranty</li>
                            </ul>

                            <p className="policy-note">
                                If you have questions about warranty coverage, please contact the respective manufacturer directly.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>Third-Party Links & External Websites</h2>
                            <p>Our website may include links to third-party websites such as:</p>
                            <ul>
                                <li>Shipping carriers for tracking</li>
                                <li>Payment providers</li>
                                <li>Manufacturer websites for documentation</li>
                                <li>External resources and tools</li>
                            </ul>

                            <h3>Ink Kart LLC is NOT Responsible For:</h3>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4>❌ External Content</h4>
                                    <p>Accuracy of third-party information</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Privacy Practices</h4>
                                    <p>Third-party data handling</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Security Standards</h4>
                                    <p>External site protection</p>
                                </div>
                                <div className="feature-item">
                                    <h4>❌ Terms & Policies</h4>
                                    <p>Outside our website</p>
                                </div>
                            </div>

                            <p>We recommend reviewing third-party terms and privacy policies before interacting with external websites.</p>
                        </section>

                        <section className="policy-section">
                            <h2>Limitation of Liability</h2>
                            <p>To the fullest extent permitted by law, Ink Kart LLC is not liable for:</p>
                            <ul>
                                <li>Indirect, incidental, or consequential damages</li>
                                <li>Loss of data, revenue, or business opportunities</li>
                                <li>Damages arising from product misuse or improper installation</li>
                                <li>Issues caused by third-party carriers or shipping delays</li>
                                <li>Errors in product information provided by manufacturers</li>
                                <li>Compatibility issues not disclosed by manufacturers</li>
                            </ul>

                            <p className="policy-note">
                                Our liability for any product purchased is limited to the purchase price of that product.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <div className="contact-info-box">
                            <h3>Questions About This Disclaimer?</h3>
                            <p>📧 Email: <a href="mailto:support@inkkartllc.com">support@inkkartllc.com</a></p>
                            <p>📍 Address: 7181 Beacon Dr 15, Reno, NV 89506</p>
                            <p>🌐 Website: <a href="https://www.inkkartllc.com">www.inkkartllc.com</a></p>
                            <p>We're happy to provide clarity on any of the information listed above.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Disclaimer;


