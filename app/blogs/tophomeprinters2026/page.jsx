"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Cpu, Award, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
        <div className="min-h-screen bg-[#0A0F1C] font-['Inter'] selection:bg-[#3B82F6]/30 selection:text-white pb-20">
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 w-full flex justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1E3A8A]/10 via-[#0A0F1C] to-[#0A0F1C]" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
                    
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-[#60A5FA] font-bold text-[11px] tracking-[4px] uppercase hover:gap-3 transition-all mb-12 hover:text-[#93C5FD]">
                            <ArrowLeft size={16} />
                            Back to Journal
                        </Link>
                        
                        <div className="max-w-4xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <span className="text-[#60A5FA] font-bold text-[11px] tracking-[4px] uppercase bg-[#1E3A8A]/30 backdrop-blur-md px-6 py-2 rounded-full border border-[#3B82F6]/30 mb-8 inline-block shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                Hardware Guide 2026
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-white leading-tight tracking-tight mb-8">
                                Top 10 Home <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]">Printers.</span>
                            </h1>
                            <div className="flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-[3px] text-slate-400">
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <Clock size={16} className="text-[#60A5FA]" />
                                    <span>8 MIN READ</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <Cpu size={16} className="text-[#A78BFA]" />
                                    <span>TECHNICAL REVIEW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <section className="py-12">
                    <div className="container-custom mx-auto max-w-[1400px] px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-[#111827]/60 backdrop-blur-xl rounded-[48px] p-10 md:p-20 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.6)] border border-white/10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
                                <p className="text-2xl font-light text-slate-200 font-['Poppins'] leading-relaxed mb-12 italic border-l-4 border-[#3B82F6] pl-8 bg-gradient-to-r from-[#1E3A8A]/20 to-transparent py-4 rounded-r-2xl">
                                    "Selecting the right hardware for your home environment is more critical than ever in 2026. 
                                    As the line between professional workspaces and home life continues to blur, the expectations 
                                    for speed, reliability, and print quality have reached an all-time high."
                                </p>

                                <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed space-y-8">
                                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mt-16 mb-8">The Evolution of Home Hardware</h2>
                                    <p>
                                        Today's printers aren't just beige boxes; they are sophisticated endpoints in your digital workflow. 
                                        We've analyzed over 50 models to bring you the definitive top 10 list for this year.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 my-16">
                                        {printers.map((printer, index) => (
                                            <div key={index} className="group bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 hover:border-[#3B82F6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="relative z-10">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <span className="text-[10px] font-bold text-[#60A5FA] tracking-widest uppercase bg-[#3B82F6]/10 px-4 py-2 rounded-lg border border-[#3B82F6]/20">
                                                            {printer.category}
                                                        </span>
                                                        <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full shadow-inner border border-white/5 backdrop-blur-md">
                                                            <Star size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                                                            <span className="text-xs font-bold text-white">{printer.rating}</span>
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white font-['Poppins'] mb-4 group-hover:text-[#60A5FA] transition-colors">{printer.name}</h3>
                                                    <p className="text-sm text-slate-400 leading-relaxed font-light">{printer.feature}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-3xl font-bold text-white font-['Poppins'] mt-16 mb-8">Selection Criteria</h2>
                                    <p>
                                        Our analysis focused on three primary metrics: 
                                        <strong className="text-slate-200 font-semibold"> Total Cost of Ownership (TCO)</strong>, 
                                        <strong className="text-slate-200 font-semibold"> Connection Stability</strong>, and 
                                        <strong className="text-slate-200 font-semibold"> Sustained Print Performance</strong>. 
                                        We prioritized models that offer seamless cloud integration without sacrificing security protocols.
                                    </p>

                                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[32px] p-10 md:p-14 text-white relative overflow-hidden my-16 border border-[#3B82F6]/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_70%)]" />
                                        <Award size={48} className="text-[#60A5FA] mb-8 relative z-10" />
                                        <h3 className="text-2xl font-bold font-['Poppins'] mb-6 relative z-10">Expert Recommendation</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed font-light relative z-10">
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
                <section className="py-24 relative overflow-hidden">
                    <div className="container-custom mx-auto max-w-[1400px] px-6 text-center relative z-10">
                        <span className="text-[#60A5FA] font-bold text-sm tracking-[4px] uppercase block mb-4">Continue Reading</span>
                        <h2 className="text-4xl font-bold text-white font-['Poppins'] mb-12">Next Intelligence Brief</h2>
                        
                        <Link href="/blogs/inkjetvslaserguide" className="group inline-flex items-center gap-6 bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12 hover:bg-white/5 hover:border-[#3B82F6]/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500">
                            <div className="text-left">
                                <span className="text-[10px] font-bold text-[#A78BFA] tracking-widest uppercase mb-2 block">Technical Analysis</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-['Poppins'] group-hover:text-[#60A5FA] transition-colors">Inkjet vs Laser Mastery</h3>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#60A5FA] shadow-sm group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-transparent transition-all duration-500">
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
