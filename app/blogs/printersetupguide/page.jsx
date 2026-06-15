"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Settings, Monitor, HardDrive } from 'lucide-react';

const PrinterSetupGuide = () => {
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
                Setup Guide
              </span>
              
              <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-[#0F172A] leading-[1.15] tracking-tight mb-6">
                Deployment <br/>
                <span className="text-[#024AD8]">Protocols.</span>
              </h1>
              
              <div className="flex flex-wrap gap-5 text-[12px] font-black text-[#64748B] uppercase tracking-[1.5px]">
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  10 MIN READ
                </span>
                <span className="flex items-center gap-2">
                  <Settings size={14} />
                  SYSTEM DEPLOYMENT
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
                Whether you're integrating a new laser system or a precise inkjet for your home office, the first 30 minutes of setup dictate the next 3 years of performance. Follow these protocols for both Windows and macOS systems.
              </p>

              {/* Section 1: Initial Physical Prep */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">1. Initial Physical Prep</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Ensure all shipping tape is removed—especially from the internal scanning glass and carriage tracks. Level the printer on a stable surface; micro-vibrations can lead to band issues over long distances.
              </p>

              {/* Deployment Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    Windows Hub
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">Universal Print Setup</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Integration with Microsoft's cloud-based print solution for easy sharing.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <Monitor size={16} color="#024AD8" />
                    PC DEPLOY
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#024AD8] transition-all">
                  <span className="text-[#024AD8] text-[11px] font-black uppercase tracking-[2px] block mb-3">
                    macOS Stack
                  </span>
                  <h3 className="text-xl font-black text-[#0F172A] mb-3">AirPrint & CUPS</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Apple's native driverless system and advanced admin controls.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-black text-[#0F172A] uppercase tracking-[1.5px]">
                    <HardDrive size={16} color="#024AD8" />
                    MAC DEPLOY
                  </div>
                </div>
              </div>

              {/* Section 2: Driver vs App Deployment */}
              <h2 className="text-3xl font-black font-['Poppins'] text-[#0F172A] mb-6 tracking-tight">2. Driver vs App Deployment</h2>
              <p className="text-[17px] text-[#64748B] leading-relaxed mb-10">
                Most 2026 systems push you towards smartphone apps. While great for casual use, professional workflows still require full-stack driver installations for granular control over color management and duplex settings.
              </p>

              {/* Important Note */}
              <div className="bg-[#F8FAFC] border-l-4 border-[#024AD8] rounded-r-3xl p-10">
                <Monitor size={24} className="text-[#024AD8] mb-4" />
                <h3 className="text-xl font-black text-[#0F172A] mb-4">Security Protocol</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  Always change the default admin password on your printer's web interface (EWS). An unsecured printer on your local network is a potential vector for security breaches.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrinterSetupGuide;
