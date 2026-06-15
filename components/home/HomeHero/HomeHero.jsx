import React from 'react';
import Link from 'next/link';
import './HomeHero.css';


const HomeHero = () => {
    return (
        <section className="home-hero">
            <div className="home-hero-content">
                <div className="home-hero-grid">
                    <div className="home-hero-text reveal-left">
                        <div className="hero-badge-container">
                            <span className="hero-badge">THE STANDARD IN PRINTING</span>
                        </div>
                        <h1>
                            Modern <br />
                            <span className="text-accent underline-gold">Excellence.</span>
                        </h1>
                        <p className="hero-mission">
                            Ink Kart LLC delivers the most advanced professional printing 
                            hardware to the modern workplace. Experience high-end precision 
                            engineered for durability and output mastery.
                        </p>

                        <div className="home-hero-actions">
                            <Link href="/printers" className="btn btn-primary lg:px-12">Explore Collections</Link>
                            <Link href="/about" className="btn btn-secondary lg:px-12">Our Legacy</Link>
                        </div>
                    </div>
                    
                    <div className="home-hero-image-container reveal-right">
                         <img 
                            src="/assets/hero.jpeg" 
                            alt="Elite Professional Printer" 
                            className="hero-printer-image"
                         />
                         <div className="image-glow"></div>
                         <div className="accent-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
