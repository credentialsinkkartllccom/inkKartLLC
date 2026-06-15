"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Wifi, ShieldCheck } from 'lucide-react';

const PrinterOfflineFixGuide = () => {
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
                Support Guide
              </span>
              
              <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-[#0F172A] leading-[1.15] tracking-tight mb-6">
                Connectivity <br/>
                <span className="text-[#024AD8]">Troubleshooting.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[12px] font-black text-[#64748B] uppercase tracking-[1.5px]">
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  4 MIN READ
                </span>
                <span className="flex items-center gap-2">
                  <Wifi size={14} />
                  SYSTEM LINK FIX
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
                The "Printer is Offline" error is a common but frustrating bottleneck. In 2026, network complexity has increased, but the solutions remain highly systematized.
              </p>

              {/* Section 1: The 7 Quick Fixes */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">The 7 Quick Fixes</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Before considering hardware failure, work through this tactical checklist. 95% of connectivity issues are software or network-layer conflicts.
              </p>

              {/* Steps Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Step 1
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Power Cycle Everything</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Restart printer, then router, then PC to clear cached IP conflicts.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <ShieldCheck size={16} color="#024AD8" />
                    SYSTEM CLEAR
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Step 2
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Static IP Assignment</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Setting a permanent IP on your router prevents "Printer Offline" on reboot.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <ShieldCheck size={16} color="#024AD8" />
                    STABLE LINK
                  </div>
                </div>
              </div>

              {/* Section 2: Firewall & Permissions */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">Firewall & Permissions</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Modern OS security like Windows 11 and macOS Sequoia can occasionally treat printer traffic as unauthorized. Check "Sharing & Permissions" to ensure the system has allowed bidirectional communication.
              </p>

              {/* Important Note */}
              <div className="bg-[#F8FAFC] border-l-4 border-[#024AD8] rounded-r-3xl p-10">
                <Wifi size={24} className="text-[#024AD8] mb-4" />
                <h3 className="text-xl font-black text-[#0F172A] mb-4">The Spoof Factor</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  Public Wi-Fi networks in co-working spaces or apartment blocks often use "Isolator" settings. Check if your printer and computer are on the exact same 2.4GHz or 5GHz band.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrinterOfflineFixGuide;
