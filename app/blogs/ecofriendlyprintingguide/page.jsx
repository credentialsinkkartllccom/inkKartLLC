"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Leaf, Recycle, Globe } from 'lucide-react';

const EcoFriendlyPrintingGuide = () => {
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
                Sustainability
              </span>
              
              <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-[#0F172A] leading-[1.15] tracking-tight mb-6">
                Sustained <br/>
                <span className="text-[#024AD8]">Eco-Logic.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[12px] font-black text-[#64748B] uppercase tracking-[1.5px]">
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  7 MIN READ
                </span>
                <span className="flex items-center gap-2">
                  <Leaf size={14} />
                  SUSTAINABLE CYCLE
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
                Efficiency and ecology can go hand-in-hand. In our 2026 sustainability commitment, we've identified the high-impact areas where modern home users and small businesses can reduce their footprints.
              </p>

              {/* Section 1: The Power Consumption Cycle */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">1. The Power Consumption Cycle</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Modern printers have very aggressive "Sleep" modes. In your settings, adjust the "Auto-Off" or "Standby" timeout. For laser printers, the fusion unit takes the most energy to heat up; reducing long periods on standby adds up over a yearly period.
              </p>

              {/* Ecology Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Ecology 101
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Recycled Media</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Using high-quality recycled paper can reduce pulp consumption by 30%.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <Recycle size={16} color="#024AD8" />
                    RECYCLE
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Global Impact
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Consumable Return</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Use prepaid recycling envelopes for original HP and Brother cartridges.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <Globe size={16} color="#024AD8" />
                    GLOBAL
                  </div>
                </div>
              </div>

              {/* Section 2: The Tank Advantage */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">2. The Tank Advantage</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Ink Tank systems (like Epson EcoTank and HP Smart Tank) eliminate dozens of plastic cartridges over their lifespan. By switching to bottled ink, you're directly reducing plastic e-waste compared to traditional standard-yield cartridges.
              </p>

              {/* Important Note */}
              <div className="bg-[#F8FAFC] border-l-4 border-[#024AD8] rounded-r-3xl p-10">
                <Leaf size={24} className="text-[#024AD8] mb-4" />
                <h3 className="text-xl font-black text-[#0F172A] mb-4">The "Greener" Settings</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  Enabling Double-Sided (Duplex) printing as default can save up to 45% of paper cost and consumption. For internal drafts, always use "Grayscale" to preserve the cyan and magenta pigments which take significantly more energy to refine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EcoFriendlyPrintingGuide;
