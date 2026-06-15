import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
            <div className="info-card">
                <h2>Get in Touch</h2>
                <div className="info-items">
                    <div className="info-item">
                        <div className="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Mailing Address</h3>
                            <p>Ink Kart LLC<br />7181 Beacon Dr 15<br />Reno, NV 89506<br />United States</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Email Support</h3>
                            <p>support@inkkartllc.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Website</h3>
                            <p>www.inkkartllc.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-card">
                <h2>What We Can Help With</h2>
                <ul className="help-list">
                    <li>Product inquiries and compatibility questions</li>
                    <li>Order updates and shipping status</li>
                    <li>Return and refund guidance</li>
                    <li>Basic questions about using our website and services</li>
                </ul>
            </div>

            <div className="info-card">
                <h2>Response Time</h2>
                <div className="response-status">
                    <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Reasonable Timeframe
                    </h3>
                    <p>Most messages receive a response within a reasonable timeframe during standard business hours. Response times may vary on weekends or holidays.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;


