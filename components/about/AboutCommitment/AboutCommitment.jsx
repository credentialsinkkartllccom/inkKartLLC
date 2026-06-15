import React from 'react';
import './AboutCommitment.css';

const AboutCommitment = () => {
    return (
        <section className="transparency-commitment">
            <h2>Our Commitment to Transparency</h2>
            <p>We value honesty in everything we do. This includes:</p>
            <ul className="transparency-list">
                <li>Clear communication</li>
                <li>Straightforward policies</li>
                <li>Accurate representation of all products</li>
                <li>Respect for customer privacy</li>
                <li>Independent retail operations</li>
            </ul>
            <p className="trademark-notice">
                All trademarks, brand names, and logos featured on our website belong to their respective
                owners and are used strictly for identification purposes. We do not claim partnership,
                endorsement, or manufacturer authorization unless explicitly stated.
            </p>
        </section>
    );
};

export default AboutCommitment;
