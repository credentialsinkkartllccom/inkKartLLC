"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap, BookOpen, CheckCircle2 } from 'lucide-react';

const InkjetVsLaserGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_0%,rgba(2,74,216,0.05),transparent_70%)] pointer-events-none"></div>
          <div className="container-custom mx-auto px-6 relative z-10">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-[#024AD8] text-xs font-black uppercase tracking-[2px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft size={16} />
              Back to Journal
            </Link>
            
            <div className="max-w-[900px]">
              <span className="inline-block text-[#024AD8] text-[11px] font-black uppercase tracking-[3px] bg-[#F8FAFC] px-4 py-2 rounded-lg mb-6">
                Technical Analysis
              </span>
              
              <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-[#0F172A] leading-[1.15] tracking-tight mb-6">
                Inkjet vs Laser <br/>
                <span className="text-[#024AD8]">Mastery.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[12px] font-black text-[#64748B] uppercase tracking-[1.5px]">
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  6 MIN READ
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={14} />
                  PERFORMANCE DATA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-24">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-[800px] mx-auto">
              <p className="text-xl text-[#0F172A] font-medium leading-relaxed mb-12">
                For decades, the debate between inkjet and laser printing has been a focal point of office technology strategy. In 2026, the performance gap is narrowing, making the choice more complex and nuanced than ever before.
              </p>

              {/* Section 1: Modern Landscape */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">The Modern Landscape</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Traditionally, lasers were for high-volume text and inkjets were for photos. Today, high-speed Business Inkjets (BIJ) rival lasers in PPM (pages per minute), while precision Laser systems offer color accuracy that was once unimaginable.
              </p>

              {/* Strengths Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Inkjet Strengths
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Visual Precision</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Deep color depth and superior edge-to-edge photo reproduction.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <CheckCircle2 size={16} color="#024AD8" />
                    WINNER: PHOTO
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Laser Strengths
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Text Clarity</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Crisp, smear-resistant text at incredibly high speeds.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <CheckCircle2 size={16} color="#024AD8" />
                    WINNER: TEXT
                  </div>
                </div>
              </div>

              {/* Section 2: Cost Breakdown */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">The Cost Breakdown</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                When calculating TCO, you must look beyond the initial purchase price. Laser printers generally have higher upfront costs but lower per-page expenses for monochrome printing. Inkjets, especially those using continuous ink supply systems (CISS), are challenging this paradigm with ultra-high yield tanks.
              </p>

              {/* Important Note */}
              <div className="bg-[#F8FAFC] border-l-4 border-[#024AD8] rounded-r-3xl p-10">
                <BookOpen size={24} className="text-[#024AD8] mb-4" />
                <h3 className="text-xl font-black text-[#0F172A] mb-4">Quick Rule of Thumb</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  If you print more than 50 pages of text-heavy documents per week, Laser is your strategic partner. If your workflow involves high-resolution graphics or lower frequency, Inkjet remains the superior choice.
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
