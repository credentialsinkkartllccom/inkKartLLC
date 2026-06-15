import React from 'react';
import Link from 'next/link';
import './HomePeaceOfMind.css';

const HomePeaceOfMind = () => {
    return (
        <section className="home-peace-expansive">
            <div className="peace-grid-elite">
                <div className="peace-text-side reveal-left">
                    <span className="peace-badge">Consumer Confidence</span>
                    <h2 className="massive-title-black">
                        Shop with <br />
                        <span className="text-[var(--accent)]">Peace of Mind.</span>
                    </h2>
                    <div className="peace-body-text">
                        <p>
                            Whether you're printing school assignments, home documents, or business materials, 
                            Ink Kart LLC makes it easy to find dependable printing essentials without complexity.
                        </p>
                    </div>

                    <div className="peace-actions-elite">
                        <Link href="/printers" className="elite-btn black">
                            <span>Browse Printers</span>
                            <div className="btn-bg"></div>
                        </Link>
                        <Link href="/ink-toner" className="elite-btn outline-gold">
                             <span>Shop Ink & Toner</span>
                        </Link>
                    </div>
                </div>

                <div className="peace-visual-side reveal-zoom">
                    <div className="peace-icon-box">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#0096D6" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <span className="safety-label">SECURE INFRASTRUCTURE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePeaceOfMind;
