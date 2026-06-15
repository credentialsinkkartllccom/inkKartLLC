"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, Smartphone, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', orderNumber: '',
        subject: 'General Question', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            // Using a relative path or environment variable for API
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
            await axios.post(`${baseUrl}/contact`, formData);
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({
                name: '', email: '', phone: '', orderNumber: '',
                subject: 'General Question', message: ''
            });
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            setSubmitError(error.response?.data?.message || "Failed to send message.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
            <main>
                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 w-full flex justify-center overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#024AD8]/5 via-transparent to-[#024AD8]/5" />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] z-0 bg-[radial-gradient(at_0%_0%,rgba(2,74,216,0.1),transparent_70%)]" />
                    
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase bg-blue-50 px-6 py-2 rounded-full border border-blue-100 mb-8">
                            <span className="w-2 h-2 bg-[#024AD8] rounded-full animate-pulse"></span>
                            Support Desk
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-[#0F172A] leading-tight tracking-tight mb-8">
                            We're Here <br />
                            <span className="text-[#024AD8]">To Assist You.</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Have a technical inquiry or need assistance with your order? 
                            Our dedicated elite team provides reliable solutions for all your professional printing needs.
                        </p>
                    </div>
                </section>

                {/* --- MAIN CONTENT --- */}
                <section className="py-24 bg-[#F8FAFC]">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            
                            {/* FORM SIDE */}
                            <div className="lg:col-span-7 bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
                                {showSuccess ? (
                                    <div className="text-center py-12 animate-in zoom-in duration-500">
                                        <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle size={48} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#0F172A] mb-4 font-['Poppins']">Transmission Sent</h3>
                                        <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">Our team has received your brief and will respond within 24-48 business hours.</p>
                                        <button onClick={() => setShowSuccess(false)} className="inline-flex items-center gap-2 text-[#024AD8] font-bold hover:underline">
                                            Send Another Message <ArrowRight size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-4 mb-12">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#024AD8]">
                                                <Send size={24} />
                                            </div>
                                            <h2 className="text-2xl font-bold text-[#0F172A] font-['Poppins']">Submit Technical Brief</h2>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                                    <input
                                                        type="text" name="name" placeholder="John Doe"
                                                        value={formData.name} onChange={handleChange} required
                                                        className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                                    <input
                                                        type="email" name="email" placeholder="john@company.com"
                                                        value={formData.email} onChange={handleChange} required
                                                        className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all font-medium"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone (Optional)</label>
                                                    <input
                                                        type="tel" name="phone" placeholder="+1 (555) 000-0000"
                                                        value={formData.phone} onChange={handleChange}
                                                        className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Order Number</label>
                                                    <input
                                                        type="text" name="orderNumber" placeholder="#IK-12345"
                                                        value={formData.orderNumber} onChange={handleChange}
                                                        className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all font-medium"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Subject</label>
                                                <select
                                                    name="subject" value={formData.subject} onChange={handleChange}
                                                    className="w-full h-14 bg-slate-50 border border-slate-100 rounded-xl px-6 focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all font-medium appearance-none"
                                                >
                                                    <option>General Question</option>
                                                    <option>Order Status</option>
                                                    <option>Technical Support</option>
                                                    <option>Returns & Exchanges</option>
                                                    <option>Wholesale Inquiries</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message Brief</label>
                                                <textarea
                                                    name="message" rows="5" placeholder="How can our technical team assist you today?"
                                                    value={formData.message} onChange={handleChange} required
                                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 focus:outline-none focus:border-[#024AD8] focus:bg-white transition-all font-medium resize-none"
                                                ></textarea>
                                            </div>

                                            {submitError && (
                                                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                                                    {submitError}
                                                </div>
                                            )}

                                            <button
                                                type="submit" disabled={isSubmitting}
                                                className="w-full h-16 bg-[#024AD8] text-white font-bold rounded-2xl hover:bg-[#0133A1] transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/20 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3"
                                            >
                                                {isSubmitting ? "Processing..." : "Submit Brief"}
                                                {!isSubmitting && <ArrowRight size={20} />}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>

                            {/* INFO SIDE */}
                            <div className="lg:col-span-5 space-y-8">
                                <div className="bg-[#0F172A] rounded-[40px] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full" />
                                    <h3 className="text-2xl font-bold font-['Poppins'] mb-10">Direct Channels</h3>
                                    
                                    <div className="space-y-10">
                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#024AD8] group-hover:bg-[#024AD8] group-hover:text-white transition-all duration-500">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 block mb-1">Email Support</span>
                                                <p className="text-lg font-bold text-white">support@inkkartllc.com</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#024AD8] group-hover:bg-[#024AD8] group-hover:text-white transition-all duration-500">
                                                <Smartphone size={24} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 block mb-1">Call Center</span>
                                                <p className="text-lg font-bold text-white">1-800-555-0198</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#024AD8] group-hover:bg-[#024AD8] group-hover:text-white transition-all duration-500">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 block mb-1">HQ Location</span>
                                                <p className="text-lg font-bold text-white leading-relaxed">
                                                    7181 Beacon Dr 15,<br />
                                                    Reno, NV 89506, USA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[40px] p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/30">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#024AD8]">
                                            <Clock size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold font-['Poppins'] text-[#0F172A]">Operating Hours</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-4 border-bottom border-slate-50">
                                            <span className="text-slate-500 font-medium">Monday - Friday</span>
                                            <span className="font-bold text-[#0F172A]">9AM - 6PM EST</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-bottom border-slate-50">
                                            <span className="text-slate-500 font-medium">Saturday</span>
                                            <span className="font-bold text-[#0F172A]">10AM - 4PM EST</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-500 font-medium">Sunday</span>
                                            <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
