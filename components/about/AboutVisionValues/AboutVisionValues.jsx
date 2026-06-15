import React from 'react';
import './AboutVisionValues.css';

const AboutVisionValues = () => {
    return (
        <section className="vision-values">
            <div className="vision">
                <h2>Our Vision</h2>
                <p>
                    To be a dependable and customer-centered retailer that makes it easier for people to shop
                    for printing essentials with confidence, clarity, and convenience.
                </p>
                <p>
                    We aim to consistently improve our website experience, expand our product selection, and
                    maintain the high standards of accuracy and professionalism that today's customers expect.
                </p>
            </div>

            <div className="values">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <h3>Reliability</h3>
                        <p>We prioritize products and processes that support a smooth customer experience.</p>
                    </div>
                    <div className="value-item">
                        <h3>Clarity</h3>
                        <p>We focus on accurate product information and straightforward communication.</p>
                    </div>
                    <div className="value-item">
                        <h3>Integrity</h3>
                        <p>We operate with honesty and uphold strong retail and privacy standards.</p>
                    </div>
                    <div className="value-item">
                        <h3>Customer Respect</h3>
                        <p>We treat every interaction with care, professionalism, and courtesy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutVisionValues;
