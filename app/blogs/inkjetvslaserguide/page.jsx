"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap, BookOpen, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const InkjetVsLaserGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C] font-['Inter'] selection:bg-[#3B82F6]/30 selection:text-white pb-20">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1E3A8A]/10 via-[#0A0F1C] to-[#0A0F1C]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
          
          <div className="container-custom mx-auto px-6 relative z-10">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-[#60A5FA] font-bold text-[11px] tracking-[4px] uppercase hover:gap-3 transition-all mb-12 hover:text-[#93C5FD]">
              <ArrowLeft size={16} />
              Back to Journal
            </Link>
            
            <div className="max-w-[900px]">
              <span className="inline-block text-[#60A5FA] text-[11px] font-bold uppercase tracking-[4px] bg-[#1E3A8A]/30 backdrop-blur-md px-6 py-2 rounded-full border border-[#3B82F6]/30 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                Technical Analysis
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-white leading-tight tracking-tight mb-8">
                Inkjet vs Laser <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]">Mastery.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[11px] font-black uppercase tracking-[3px] text-slate-400">
                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Clock size={16} className="text-[#60A5FA]" />
                  6 MIN READ
                </span>
                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Zap size={16} className="text-[#A78BFA]" />
                  PERFORMANCE DATA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-24">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-[800px] mx-auto bg-[#111827]/60 backdrop-blur-xl rounded-[48px] p-10 md:p-20 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.6)] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.1),transparent_70%)] pointer-events-none"></div>

              <p className="text-2xl font-light text-slate-200 font-['Poppins'] leading-relaxed mb-16 italic border-l-4 border-[#A78BFA] pl-8 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent py-4 rounded-r-2xl">
                For decades, the debate between inkjet and laser printing has been a focal point of office technology strategy. In 2026, the performance gap is narrowing, making the choice more complex and nuanced than ever before.
              </p>

              {/* Section 1: Modern Landscape */}
              <h2 className="text-3xl font-bold font-['Poppins'] text-white mb-6 tracking-tight mt-16">The Modern Landscape</h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light mb-12">
                Traditionally, lasers were for high-volume text and inkjets were for photos. Today, high-speed Business Inkjets (BIJ) rival lasers in PPM (pages per minute), while precision Laser systems offer color accuracy that was once unimaginable.
              </p>

              {/* Strengths Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:border-[#3B82F6]/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-[#60A5FA] text-[10px] font-bold uppercase tracking-[3px] block mb-4 bg-[#3B82F6]/10 px-3 py-1.5 rounded-md border border-[#3B82F6]/20 inline-block">
                      Inkjet Strengths
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">Visual Precision</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                      Deep color depth and superior edge-to-edge photo reproduction.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-[1.5px] bg-black/40 px-3 py-2 rounded-lg border border-white/5 backdrop-blur-md w-max">
                      <CheckCircle2 size={16} className="text-[#60A5FA]" />
                      WINNER: PHOTO
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:-translate-y-2 hover:border-[#A78BFA]/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-[#A78BFA] text-[10px] font-bold uppercase tracking-[3px] block mb-4 bg-[#8B5CF6]/10 px-3 py-1.5 rounded-md border border-[#8B5CF6]/20 inline-block">
                      Laser Strengths
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">Text Clarity</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                      Crisp, smear-resistant text at incredibly high speeds.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-[1.5px] bg-black/40 px-3 py-2 rounded-lg border border-white/5 backdrop-blur-md w-max">
                      <CheckCircle2 size={16} className="text-[#A78BFA]" />
                      WINNER: TEXT
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Cost Breakdown */}
              <h2 className="text-3xl font-bold font-['Poppins'] text-white mb-6 tracking-tight">The Cost Breakdown</h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light mb-12">
                When calculating TCO, you must look beyond the initial purchase price. Laser printers generally have higher upfront costs but lower per-page expenses for monochrome printing. Inkjets, especially those using continuous ink supply systems (CISS), are challenging this paradigm with ultra-high yield tanks.
              </p>

              {/* Important Note */}
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#3B82F6]/30 rounded-3xl p-10 md:p-12 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#60A5FA] to-[#A78BFA]" />
                <BookOpen size={32} className="text-[#60A5FA] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 font-['Poppins']">Quick Rule of Thumb</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  If you print more than 50 pages of text-heavy documents per week, <strong className="text-white font-semibold">Laser</strong> is your strategic partner. If your workflow involves high-resolution graphics or lower frequency, <strong className="text-white font-semibold">Inkjet</strong> remains the superior choice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InkjetVsLaserGuide;
