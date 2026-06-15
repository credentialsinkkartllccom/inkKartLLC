"use client";

import React, { useState, useEffect } from 'react';

const FAQs = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [searchQuery, setSearchQuery] = useState('');
    const [openItems, setOpenItems] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab, searchQuery]);

    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'products', label: 'Product & Compatibility' },
        { id: 'ordering', label: 'Ordering & Payments' },
        { id: 'shipping', label: 'Shipping & Delivery' },
        { id: 'returns', label: 'Returns & Refunds' },
        { id: 'account', label: 'Account & Privacy' },
        { id: 'ownership', label: 'Brand & Ownership' },
        { id: 'support', label: 'Customer Support' }
    ];

    const faqData = {
        products: [
            { id: 'p1', question: '1. What types of products does Ink Kart LLC offer?', answer: 'We offer a wide selection of printers, ink cartridges, toner cartridges, photo paper, and everyday printing supplies for home and office needs.' },
            { id: 'p2', question: '2. How do I know if a cartridge is compatible with my printer?', answer: 'Each product page includes compatibility details based on manufacturer information. You can also check your printer model on the product label or user manual before making a purchase.' },
            { id: 'p3', question: '3. Are the printers wireless or mobile-printing ready?', answer: 'Many modern printers include Wi-Fi and mobile-printing features. Compatibility depends on the specific model. Product descriptions will list any available wireless capabilities.' },
            { id: 'p4', question: '4. What is page yield and why does it vary?', answer: 'Page yield refers to the estimated number of pages a cartridge may print based on standardized testing. Actual results can vary depending on the type of documents printed, settings, and usage patterns.' },
            { id: 'p5', question: '5. Do you offer product recommendations?', answer: 'Yes. If you need help selecting a printer or printing supplies, our team can assist with general product inquiries based on your needs.' }
        ],
        ordering: [
            { id: 'o1', question: '6. How can I place an order?', answer: 'Simply add products to your cart, proceed to checkout, and complete payment using our secure payment process.' },
            { id: 'o2', question: '7. What payment methods do you accept?', answer: 'We accept major payment methods listed at checkout. All transactions are processed securely.' },
            { id: 'o3', question: '8. Can I modify or cancel my order?', answer: 'Orders can be modified or canceled if they have not yet shipped. Contact us as soon as possible with your order number.' }
        ],
        shipping: [
            { id: 's1', question: '9. Do you ship across the United States and Canada?', answer: 'Yes, we offer shipping throughout the United States and Canada. Delivery times depend on location, product availability, and the selected shipping method.' },
            { id: 's2', question: '10. How long does delivery take?', answer: 'Delivery timelines vary by region. Estimated delivery times are shown during checkout. Weather, carrier delays, or product availability may affect shipping times.' },
            { id: 's3', question: '11. How can I track my order?', answer: 'Once your order ships, you will receive a shipping confirmation email with a tracking link.' }
        ],
        returns: [
            { id: 'r1', question: '12. What is your return policy?', answer: 'Eligible items may be returned within the specified return window. Products must be in original condition and packaging. Please visit our Refund & Return Policy page for full details.' },
            { id: 'r2', question: '13. How do I start a return?', answer: 'Contact our support team with your order number and the reason for return. We will provide the next steps and any applicable return instructions.' },
            { id: 'r3', question: '14. When will I receive my refund?', answer: 'Refunds are processed after the returned item is received and inspected. Processing times may vary depending on the payment method.' }
        ],
        account: [
            { id: 'a1', question: '15. Do I need an account to place an order?', answer: 'No, you can checkout as a guest. Creating an account allows you to view order history and save basic information for future purchases.' },
            { id: 'a2', question: '16. How is my personal information protected?', answer: 'We use industry-standard security practices to help protect your information. Details are available in our Privacy Policy.' }
        ],
        ownership: [
            { id: 'w1', question: '17. Is Ink Kart LLC affiliated with any printer brands?', answer: 'No. Ink Kart LLC is an independent online retailer. All trademarks, logos, and product names belong to their respective owners and are used for identification purposes only.' },
            { id: 'w2', question: '18. Do products come with a manufacturer warranty?', answer: 'Eligible products include standard manufacturer warranties as provided by the respective brands. Warranty terms vary by brand and product.' }
        ],
        support: [
            { id: 'u1', question: '19. What assistance do you provide?', answer: 'We assist customers with: Product-related inquiries, Order status questions, Returns and refund guidance, General shopping support.' },
            { id: 'u2', question: '20. How can I contact customer support?', answer: 'You may reach us via email or live chat during available business hours. Visit our Contact Us page for details.' }
        ]
    };

    const allFaqs = Object.values(faqData).flat();

    const handleSearchChange = (value) => {
        setSearchQuery(value);
        if (value.trim() !== '') {
            setActiveTab('all');
        } else {
            setActiveTab('products');
        }
    };

    const toggleItem = (id) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredFaqs = searchQuery.trim() !== ''
        ? allFaqs.filter(item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : (faqData[activeTab] || []);

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <main className="w-full">
                {/* --- HERO SECTION --- */}
                <header className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24 px-6 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Find answers to common questions about our products, ordering process, and customer experience.
                            If you need further assistance, our team is here to help.
                        </p>
                    </div>
                </header>

                {/* --- SEARCH & CONTENT --- */}
                <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 -mt-8 relative z-20">
                    
                    {/* Search Bar */}
                    <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 max-w-2xl mx-auto flex items-center mb-10 md:mb-16">
                        <svg className="w-6 h-6 text-slate-400 ml-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="w-full bg-transparent border-none focus:ring-0 text-slate-700 py-3 outline-none text-lg"
                        />
                    </div>
                    
                    {/* Tabs */}
                    {!searchQuery && (
                        <div className="flex overflow-x-auto pb-4 mb-8 md:mb-12 custom-scrollbar gap-2 md:gap-4 md:flex-wrap md:justify-center border-b border-slate-200">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`px-4 md:px-6 py-3 text-sm md:text-base font-bold whitespace-nowrap transition-all border-b-2 
                                        ${activeTab === tab.id 
                                            ? 'text-[#024AD8] border-[#024AD8]' 
                                            : 'text-slate-500 border-transparent hover:text-slate-800'}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* FAQ List */}
                    <div className="max-w-3xl mx-auto space-y-4">
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <p className="text-slate-500 text-lg">No FAQs found matching your search.</p>
                            </div>
                        ) : (
                            filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md cursor-pointer"
                                    onClick={() => toggleItem(faq.id)}
                                >
                                    <div className="px-6 py-5 flex justify-between items-center select-none">
                                        <h3 className={`font-bold text-base md:text-lg pr-4 transition-colors ${openItems[faq.id] ? 'text-[#024AD8]' : 'text-slate-800'}`}>
                                            {faq.question}
                                        </h3>
                                        <div className={`flex-shrink-0 transition-transform duration-300 ${openItems[faq.id] ? 'rotate-180 text-[#024AD8]' : 'text-slate-400'}`}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openItems[faq.id] ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* --- CONTACT CTA --- */}
                <section className="bg-slate-900 text-white py-16 md:py-24 px-6 mt-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight">Still need help?</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition flex flex-col items-center">
                                <svg className="w-10 h-10 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-2">Call Us</span>
                                <span className="text-lg font-semibold">1-800-PRINTS</span>
                            </div>
                            
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition flex flex-col items-center">
                                <svg className="w-10 h-10 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-2">Visit Us</span>
                                <span className="text-lg font-semibold text-center">7181 Beacon Dr 15<br/>Reno, NV 89506</span>
                            </div>
                            
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition flex flex-col items-center">
                                <svg className="w-10 h-10 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-2">Email Us</span>
                                <span className="text-lg font-semibold">support@inkkartllc.com</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FAQs;

