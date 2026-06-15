import React from 'react';
import './AboutWhyChoose.css';

const AboutWhyChoose = () => {
    return (
        <section className="why-choose">
            <h2>Why Customers Choose Ink Kart LLC</h2>
            <div className="choose-grid">
                <div className="choose-card">
                    <h3>Dependable Shopping Experience</h3>
                    <p>
                        We streamline the entire buying process—from browsing to checkout—so customers can
                        enjoy a simple and reliable online shopping journey.
                    </p>
                </div>
                <div className="choose-card">
                    <h3>Trustworthy Product Listings</h3>
                    <p>
                        We provide accurate details based on manufacturer specifications and verified product
                        information.
                    </p>
                </div>
                <div className="choose-card">
                    <h3>Professional Customer Care</h3>
                    <p>
                        Our priority is to provide helpful and timely responses to inquiries related to orders
                        and product availability.
                    </p>
                </div>
                <div className="choose-card">
                    <h3>Independent Retail Approach</h3>
                    <p>
                        You receive transparent information, unbiased listings, and a trustworthy retail environment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutWhyChoose;

