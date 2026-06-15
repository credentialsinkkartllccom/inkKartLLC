"use client";

import React, { useEffect } from "react";
import Link from 'next/link';
import { Shield, Award, Users, Search, ShoppingBag, ShieldCheck, Activity, ArrowRight } from "lucide-react";



const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
            <main>
                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 w-full flex justify-center overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#024AD8]/5 via-transparent to-[#024AD8]/5" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.1),transparent_70%)]" />
                    
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full max-w-[1400px] px-6 md:px-12 relative z-10">
                        <div className="flex flex-col items-start animate-in slide-in-from-left-8 fade-in duration-1000">
                            <div className="text-[#024AD8] font-bold text-[13px] tracking-[4px] uppercase mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-[#024AD8]"></span>
                                Our Identity
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-[#0F172A] leading-tight tracking-tight mb-8">
                                Precision in <br />
                                <span className="text-[#024AD8]">Every Print.</span>
                            </h1>
                            <p className="text-lg text-slate-500 max-w-[540px] leading-relaxed mb-10">
                                InkKartLLC is an elite independent retailer offering a curated selection of 
                                the world’s most reliable printing hardware and smart consumables. 
                                We redefine the printing experience with sophistication and technical excellence.
                            </p>
                            <Link href="/printers" className="flex items-center justify-center px-10 h-14 text-base font-bold bg-[#024AD8] text-white rounded-xl hover:bg-[#0133A1] shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                                Explore Hardware
                            </Link>
                        </div>
                        
                        <div className="relative animate-in slide-in-from-right-8 fade-in duration-1000 delay-200 hidden lg:flex justify-end">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(2,74,216,0.08)_0%,transparent_70%)] blur-[60px] -z-10" />
                            <div className="relative z-10 w-full max-w-[550px] bg-white rounded-[32px] shadow-2xl border border-slate-100 p-8 overflow-hidden grayscale opacity-40">
                                <img src="/assets/about_hero_hp.png" alt="Precision Texture" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- WHO WE ARE --- */}
                <section className="py-24 bg-[#F8FAFC]">
                    <div className="container-custom mx-auto max-w-[1400px] px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-100/50 rounded-[40px] blur-2xl group-hover:bg-blue-200/50 transition-colors duration-500" />
                                <img 
                                    src="/assets/homeAboutImage_new.png" 
                                    alt="Elite Printing" 
                                    className="relative z-10 w-full h-[600px] object-cover rounded-[32px] shadow-2xl border-l-[12px] border-[#024AD8]" 
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[#024AD8] font-bold text-[13px] tracking-[4px] uppercase mb-6">Our Legacy</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] font-['Poppins'] mb-8 leading-tight">
                                    Focused On <span className="text-[#024AD8]">Excellence.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                                    <p>
                                        InkKartLLC was created with a straightforward goal: to provide premium products 
                                        with transparent technical insights and a seamless procurement experience for high-performance workplaces.
                                    </p>
                                    <p>
                                        We operate as an independent specialist, curating genuine-quality products 
                                        sourced through authorized channels. Our platform ensures that professionals 
                                        and home users alike find exactly what they need with guaranteed reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- OUR VALUES --- */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="container-custom mx-auto max-w-[1400px] px-6 text-center">
                        <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">Core Principles</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] font-['Poppins'] mb-20">The InkKartLLC Promise</h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {[
                                { icon: <ShoppingBag size={32} />, title: "Essentials", desc: "From compact home-use printers to enterprise-ready machines and high-yield consumables." },
                                { icon: <Search size={32} />, title: "Accuracy", desc: "Clear compatibility information and precise technical specifications for informed decisions." },
                                { icon: <ShieldCheck size={32} />, title: "Security", desc: "Advanced encryption and industry-standard practices to ensure secure procurement processing." },
                                { icon: <Activity size={32} />, title: "Assistance", desc: "Dedicated technical support for product inquiries and logistics every step of the way." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[32px] p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm text-[#024AD8] group-hover:bg-[#024AD8] group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mb-4 tracking-tight uppercase">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-[15px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FINAL CTA --- */}
                <section className="py-24 bg-[#F8FAFC]">
                    <div className="container-custom mx-auto max-w-5xl px-6">
                        <div className="bg-[#0F172A] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(2,74,216,0.15),transparent_70%)]" />
                             <div className="relative z-10">
                                 <span className="text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20 mb-8 inline-block">
                                     Next Generation Support
                                 </span>
                                 <h2 className="text-4xl md:text-6xl font-bold text-white font-['Poppins'] mb-8 leading-tight">
                                     Trust In <span className="text-[#024AD8]">Reliability.</span>
                                 </h2>
                                 <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                                     Supporting your home and office needs with a dependable, elite shopping experience—every step of the way.
                                 </p>
                                 <Link href="/contact" className="inline-flex items-center gap-3 bg-[#024AD8] text-white font-bold px-12 h-16 rounded-2xl hover:bg-[#0133A1] transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/20">
                                     Contact Support Team
                                     <ArrowRight size={20} />
                                 </Link>
                             </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
