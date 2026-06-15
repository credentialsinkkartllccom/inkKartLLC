import React from 'react';
import { Printer, CheckCircle, ShieldCheck, Headphones } from 'lucide-react';
import './AboutOffers.css';

const AboutOffers = () => {
    const offers = [
        {
            icon: <Printer size={32} />,
            title: "A Diverse Selection of Printing Essentials",
            description: "From compact home-use printers to office-ready machines, and from ink and toner to printer-friendly paper, Ink Kart LLC provides a wide range of products to meet different printing needs."
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Accurate Product Details",
            description: "We ensure that product descriptions, compatibility information, and specifications are presented clearly. This helps you choose the right items without confusion or uncertainty."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Convenient & Secure Shopping Experience",
            description: "Our website is designed for easy browsing, simple checkout, and secure payment processing. We use industry-standard practices to help protect your personal information."
        },
        {
            icon: <Headphones size={32} />,
            title: "Customer-Focused Assistance",
            description: "Our support team is available to help with product inquiries, order status updates, and basic questions about printing supplies. While we do not provide technical troubleshooting, we are always happy to assist with shopping-related questions."
        }
    ];

    return (
        <section className="what-we-offer">
            <div className="max-w-7xl mx-auto px-4">
                <h2>What We Offer</h2>
                <div className="offer-grid">
                    {offers.map((offer, index) => (
                        <div key={index} className="offer-card">
                            <div className="offer-icon">
                                {offer.icon}
                            </div>
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutOffers;

