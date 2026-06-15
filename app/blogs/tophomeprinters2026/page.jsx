"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Cpu, Award, Star, ArrowRight } from 'lucide-react';

const TopHomePrinters2026 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const printers = [
        { name: "EliteMaster X1", category: "High Performance", feature: "Fastest Home Laser with military-grade encryption.", rating: 4.9 },
        { name: "PrecisionJet Pro", category: "All-in-One", feature: "Professional Photo Quality with wide-gamut ink technology.", rating: 4.8 },
        { name: "EcoStream Tank 500", category: "Eco-Friendly", feature: "Ultra-Low Operating Cost and 100% recyclable components.", rating: 4.7 },
        { name: "StudentLink C2", category: "Budget", feature: "Compact & Cloud-Ready for seamless academic workflow.", rating: 4.6 },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 w-full flex justify-center overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#024AD8]/5 via-transparent to-[#024AD8]/5" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.1),transparent_70%)]" />
                    
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase hover:gap-3 transition-all mb-12">
                            <ArrowLeft size={16} />
                            Back to Journal
                        </Link>
                        
                        <div className="max-w-4xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <span className="text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase bg-blue-50 px-6 py-2 rounded-full border border-blue-100 mb-8 inline-block">
                                Hardware Guide 2026
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-[#0F172A] leading-tight tracking-tight mb-8">
                                Top 10 Home <br /> <span className="text-[#024AD8]">Printers.</span>
                            </h1>
                            <div className="flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-[3px] text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#024AD8]" />
                                    <span>8 MIN READ</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Cpu size={16} className="text-[#024AD8]" />
                                    <span>TECHNICAL REVIEW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <section className="py-24 bg-[#F8FAFC]">
                    <div className="container-custom mx-auto max-w-[1400px] px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[48px] p-10 md:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
                                <p className="text-2xl font-medium text-[#0F172A] font-['Poppins'] leading-relaxed mb-12 italic border-l-4 border-[#024AD8] pl-8">
                                    "Selecting the right hardware for your home environment is more critical than ever in 2026. 
                                    As the line between professional workspaces and home life continues to blur, the expectations 
                                    for speed, reliability, and print quality have reached an all-time high."
                                </p>

                                <div className="prose prose-slate prose-lg max-w-none text-slate-500 leading-relaxed space-y-8">
                                    <h2 className="text-3xl font-bold text-[#0F172A] font-['Poppins'] mt-16 mb-8">The Evolution of Home Hardware</h2>
                                    <p>
                                        Today's printers aren't just beige boxes; they are sophisticated endpoints in your digital workflow. 
                                        We've analyzed over 50 models to bring you the definitive top 10 list for this year.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 my-16">
                                        {printers.map((printer, index) => (
                                            <div key={index} className="group bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                                <div className="flex justify-between items-start mb-6">
                                                    <span className="text-[10px] font-bold text-[#024AD8] tracking-widest uppercase bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                                                        {printer.category}
                                                    </span>
                                                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                                                        <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                                                        <span className="text-xs font-bold text-[#0F172A]">{printer.rating}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-4 group-hover:text-[#024AD8] transition-colors">{printer.name}</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed">{printer.feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-3xl font-bold text-[#0F172A] font-['Poppins'] mt-16 mb-8">Selection Criteria</h2>
                                    <p>
                                        Our analysis focused on three primary metrics: 
                                        <strong> Total Cost of Ownership (TCO)</strong>, 
                                        <strong> Connection Stability</strong>, and 
                                        <strong> Sustained Print Performance</strong>. 
                                        We prioritized models that offer seamless cloud integration without sacrificing security protocols.
                                    </p>

                                    <div className="bg-[#0F172A] rounded-[32px] p-10 md:p-14 text-white relative overflow-hidden my-16">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#024AD8]/20 to-transparent rounded-bl-full" />
                                        <Award size={48} className="text-[#024AD8] mb-8" />
                                        <h3 className="text-2xl font-bold font-['Poppins'] mb-6">Expert Recommendation</h3>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            For 90% of students and remote workers, an inkjet tank system remains the most cost-effective solution 
                                            over a 3-year period despite the higher initial hardware investment. The long-term savings on ink 
                                            consumables far outweigh the upfront capital expenditure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Post CTA */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container-custom mx-auto max-w-[1400px] px-6 text-center">
                        <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">Continue Reading</span>
                        <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins'] mb-12">Next Intelligence Brief</h2>
                        
                        <Link href="/blogs/inkjet-vs-laser-printers-2026" className="group inline-flex items-center gap-6 bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-12 hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="text-left">
                                <span className="text-[10px] font-bold text-[#024AD8] tracking-widest uppercase mb-2 block">Technical Analysis</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-['Poppins']">Inkjet vs Laser Mastery</h3>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#024AD8] shadow-sm group-hover:bg-[#024AD8] group-hover:text-white transition-all duration-500">
                                <ArrowRight size={32} />
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TopHomePrinters2026;
