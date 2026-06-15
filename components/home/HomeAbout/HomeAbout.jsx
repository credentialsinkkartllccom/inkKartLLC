import React from 'react';
import Link from 'next/link';
import './HomeAbout.css';


const HomeAbout = () => {
    return (
        <section className="home-about-elite py-24 bg-[var(--bg)]">
            <div className="home-about-grid">
                <div className="about-visual-side">
                    <div className="visual-wrapper reveal-left">
                        <img src="/assets/about_office_hp.png" alt="Luxury Printing Environment" className="main-visual rounded-2xl shadow-2xl" />
                        <div className="gold-accent-frame rounded-2xl"></div>
                        <div className="badge-overlay rounded-xl shadow-lg">
                            <span className="since">Est. 2026</span>
                            <span className="type">Elite Solutions</span>
                        </div>
                    </div>
                </div>

                <div className="about-content-side">
                    <div className="content-inner reveal-right">
                        <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            About Ink Kart LLC
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary mb-8 tracking-tight leading-tight">
                            Your Trusted Destination <br />
                            <span className="text-accent underline-gold">For Printing Essentials.</span>
                        </h2>
                        
                        <div className="text-blocks">
                            <p>
                                Ink Kart LLC is an independent online retail platform offering a broad range of printers, 
                                genuine-quality ink and toner cartridges, and essential printing supplies. We focus on 
                                accuracy, transparency, and customer satisfaction—helping you choose the right products with confidence.
                            </p>
                            <p>
                                Our goal is to make everyday printing easier for homes, small offices, students, and businesses. 
                                Whether you’re upgrading your printer or restocking supplies, we provide a straightforward 
                                shopping experience designed around clarity, trust, and convenience.
                            </p>
                        </div>

                        <Link href="/about" className="btn btn-primary gap-4 group">
                            Learn More About Us
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-2">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
