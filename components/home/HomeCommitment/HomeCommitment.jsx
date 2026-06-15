import React from 'react';
import './HomeCommitment.css';

const HomeCommitment = () => {
    return (
        <section className="home-commitment-dark">
            <div className="commitment-elite-content">
                <div className="commitment-main-text reveal-left">
                    <span className="elite-badge-gold">Operational Excellence</span>
                    <h2 className="title-massive">Our Commitment <br /> <span className="text-[var(--accent)]">To You.</span></h2>
                    
                    <div className="commitment-paragraphs">
                        <p>
                            At Ink Kart LLC, we believe in honest communication, transparent product listings, 
                            and human-friendly customer service. We aim to provide a helpful experience 
                            where customers feel informed, supported, and confident in their purchases.
                        </p>
                    </div>
                </div>

                <div className="commitment-stats-grid reveal-right">
                    <div className="stat-card-technical">
                        <div className="stat-line"></div>
                        <span className="stat-val">100%</span>
                        <span className="stat-desc">Absolute Transparency</span>
                    </div>
                    <div className="stat-card-technical">
                        <div className="stat-line"></div>
                        <span className="stat-val">24/7</span>
                        <span className="stat-desc">Secure Infrastructure</span>
                    </div>
                    <div className="stat-card-technical">
                        <div className="stat-line"></div>
                        <span className="stat-val">RAPID</span>
                        <span className="stat-desc">Global Logistics</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCommitment;
