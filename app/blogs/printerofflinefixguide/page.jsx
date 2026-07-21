"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Wifi, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const PrinterOfflineFixGuide = () => {
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
                Support Guide
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-white leading-tight tracking-tight mb-8">
                Connectivity <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]">Troubleshooting.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[11px] font-black uppercase tracking-[3px] text-slate-400">
                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Clock size={16} className="text-[#60A5FA]" />
                  4 MIN READ
                </span>
                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Wifi size={16} className="text-[#A78BFA]" />
                  SYSTEM LINK FIX
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
                The "Printer is Offline" error is a common but frustrating bottleneck. In 2026, network complexity has increased, but the solutions remain highly systematized.
              </p>

              {/* Section 1: The 7 Quick Fixes */}
              <h2 className="text-3xl font-bold font-['Poppins'] text-white mb-6 tracking-tight mt-16">The 7 Quick Fixes</h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light mb-12">
                Before considering hardware failure, work through this tactical checklist. 95% of connectivity issues are software or network-layer conflicts.
              </p>

              {/* Steps Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:border-[#3B82F6]/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-[#60A5FA] text-[10px] font-bold uppercase tracking-[3px] block mb-4 bg-[#3B82F6]/10 px-3 py-1.5 rounded-md border border-[#3B82F6]/20 inline-block">
                      Step 1
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">Power Cycle Everything</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                      Restart printer, then router, then PC to clear cached IP conflicts.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-[1.5px] bg-black/40 px-3 py-2 rounded-lg border border-white/5 backdrop-blur-md w-max">
                      <ShieldCheck size={16} className="text-[#60A5FA]" />
                      SYSTEM CLEAR
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 shadow-sm hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:-translate-y-2 hover:border-[#A78BFA]/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-[#A78BFA] text-[10px] font-bold uppercase tracking-[3px] block mb-4 bg-[#8B5CF6]/10 px-3 py-1.5 rounded-md border border-[#8B5CF6]/20 inline-block">
                      Step 2
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">Static IP Assignment</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                      Setting a permanent IP on your router prevents "Printer Offline" on reboot.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-[1.5px] bg-black/40 px-3 py-2 rounded-lg border border-white/5 backdrop-blur-md w-max">
                      <ShieldCheck size={16} className="text-[#A78BFA]" />
                      STABLE LINK
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Firewall & Permissions */}
              <h2 className="text-3xl font-bold font-['Poppins'] text-white mb-6 tracking-tight">Firewall & Permissions</h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light mb-12">
                Modern OS security like Windows 11 and macOS Sequoia can occasionally treat printer traffic as unauthorized. Check "Sharing & Permissions" to ensure the system has allowed bidirectional communication.
              </p>

              {/* Important Note */}
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#3B82F6]/30 rounded-3xl p-10 md:p-12 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#60A5FA] to-[#A78BFA]" />
                <Wifi size={32} className="text-[#60A5FA] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 font-['Poppins']">The Spoof Factor</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
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
