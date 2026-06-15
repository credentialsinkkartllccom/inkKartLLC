"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, DollarSign, TrendingDown, Target } from 'lucide-react';

const SaveMoneyInkGuide = () => {
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
                Financial Advice
              </span>
              
              <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-[#0F172A] leading-[1.15] tracking-tight mb-6">
                Cost Optimization <br/>
                <span className="text-[#024AD8]">Guide.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[12px] font-black text-[#64748B] uppercase tracking-[1.5px]">
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  5 MIN READ
                </span>
                <span className="flex items-center gap-2">
                  <DollarSign size={14} />
                  SAVINGS REPORT
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
                High-quality printing doesn't have to break the bank. With smart deployment and disciplined maintenance, you can reduce your annual printing overhead by up to 40% based on our 2026 budget analysis.
              </p>

              {/* Section 1: High-Yield Strategy */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">1. The High-Yield Strategy</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Always look for XL or Super-High-Yield cartridges. While the initial price is higher, the cost per page is often 30-50% lower than standard-yield alternatives. This is the single easiest way to optimize your spending.
              </p>

              {/* Insights Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Budget Insight
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Draft Mode Mastery</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Reducing ink density for internal documents can extend life by 25%.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <TrendingDown size={16} color="#024AD8" />
                    ECONOMY
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Smart Choice
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Subscription Services</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Automated re-ordering programs often provide 10% direct savings.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <Target size={16} color="#024AD8" />
                    EFFICIENCY
                  </div>
                </div>
              </div>

              {/* Section 2: Maintenance for Longevity */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">2. Maintenance for Longevity</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Clogged nozzles and dusty lasers don't just reduce quality; they waste ink and toner on repeated "cleaning cycles" and "failed prints." A simple monthly maintenance routine keeps your hardware running at peak efficiency.
              </p>

              {/* Important Note */}
              <div className="bg-[#F8FAFC] border-l-4 border-[#024AD8] rounded-r-3xl p-10">
                <TrendingDown size={24} className="text-[#024AD8] mb-4" />
                <h3 className="text-xl font-black text-[#0F172A] mb-4">The "Third-Party" Question</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  While third-party consumables are cheaper, they can occasionally void warranties or lead to faster hardware degradation. We recommend certified genuine products for all professional-grade equipment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaveMoneyInkGuide;
