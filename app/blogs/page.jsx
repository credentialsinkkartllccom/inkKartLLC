"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ChevronRight, Cpu, Zap, DollarSign, Settings, Wifi, Leaf, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Blogs = () => {
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

  const blogPosts = [
    {
      id: 1,
      category: "Hardware Guide",
      title: "Top 10 Home Printers",
      description: "Analyzing the best picks for students, families, and high-performance remote workflows in 2026.",
      readTime: "8 MIN",
      link: "/blogs/tophomeprinters2026",
      icon: <Cpu size={20} />,
      image: "/assets/top10.jpg"
    },
    {
      id: 2,
      category: "Technical Analysis",
      title: "Inkjet vs Laser Mastery",
      description: "A technical breakdown of the financial and performance differences for modern enterprise environments.",
      readTime: "6 MIN",
      link: "/blogs/inkjetvslaserguide",
      icon: <Zap size={20} />,
      image: "/assets/inkjetvstoner.jpg"
    },
    {
      id: 3,
      category: "Financial Advice",
      title: "Cost Optimization Guide",
      description: "Learn how to reduce operational overhead and save significant yearly expenses on consumables.",
      readTime: "5 MIN",
      link: "/blogs/savemoneyinkguide",
      icon: <DollarSign size={20} />,
      image: "/assets/moneysave.jpg"
    },
    {
      id: 4,
      category: "Setup Guide",
      title: "Deployment Protocols",
      description: "The ultimate guide to setting up your new printers on Windows and macOS with zero downtime.",
      readTime: "10 MIN",
      link: "/blogs/printersetupguide",
      icon: <Settings size={20} />,
      image: "/assets/ultimateguide.jpg"
    },
    {
      id: 5,
      category: "Support",
      title: "Connectivity Troubleshooting",
      description: "Why your printer is offline and the 7 quick fixes to restore secure system link immediately.",
      readTime: "4 MIN",
      link: "/blogs/printerofflinefixguide",
      icon: <Wifi size={20} />,
      image: "/assets/printerisoffline.png"
    },
    {
      id: 6,
      category: "Sustainability",
      title: "Sustained Eco-Logic",
      description: "Eco-friendly printing strategies to reduce waste without compromising professional quality.",
      readTime: "7 MIN",
      link: "/blogs/ecofriendlyprintingguide",
      icon: <Leaf size={20} />,
      image: "/assets/ecofriendly.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] font-['Inter'] selection:bg-[#3B82F6]/30 selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 w-full flex justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/guides_hero_banner.png" 
              alt="Professional Guides Background" 
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 via-[#0A0F1C]/60 to-[#0A0F1C]" />
          </div>
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] z-0 bg-[radial-gradient(at_0%_100%,rgba(139,92,246,0.15),transparent_70%)]" />
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-[#60A5FA] font-bold text-[11px] tracking-[4px] uppercase bg-[#1E3A8A]/30 backdrop-blur-md px-6 py-2 rounded-full border border-[#3B82F6]/30 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <BookOpen size={14} className="animate-pulse" />
                Insights & Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Poppins'] text-white leading-[1.1] tracking-tight mb-8">
                The Print <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]">Journal.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                Documentation, Technical Analysis, and Industry Intelligence for the Modern Workflow. 
                Stay ahead with our expert-led printing strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 relative z-10 -mt-10">
          <div className="container-custom mx-auto max-w-[1400px] px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ transitionDelay: `${index * 100}ms` }}>
                  <Link href={post.link} className="group flex flex-col h-full bg-[#111827]/60 backdrop-blur-xl rounded-[32px] border border-white/5 overflow-hidden hover:border-[#3B82F6]/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 relative">
                    {/* Glowing effect behind card on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/0 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative h-64 overflow-hidden p-3 pb-0">
                      <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A0F1C]/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
                          <span className="text-[#60A5FA]">{post.icon}</span>
                          <span className="text-[10px] font-bold text-slate-200 tracking-wider uppercase">{post.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow relative z-10">
                      <div className="flex items-center gap-2 mb-6">
                        <Clock size={12} className="text-[#A78BFA]" />
                        <span className="text-[10px] font-bold text-[#A78BFA] tracking-widest uppercase">{post.readTime} READ</span>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-white font-['Poppins'] mb-4 leading-tight group-hover:text-[#60A5FA] transition-colors duration-300">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow font-light">
                        {post.description}
                      </p>
                      
                      <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-bold text-[#60A5FA] group-hover:text-[#A78BFA] transition-colors">
                        <span className="tracking-widest uppercase">Read Full Brief</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('/assets/guides_hero_banner.png')] bg-cover bg-center opacity-[0.03]" />
          <div className="container-custom mx-auto max-w-6xl px-6 relative z-10">
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_70%)]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.15),transparent_70%)]" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-[#60A5FA] font-bold text-[11px] tracking-[4px] uppercase bg-[#3B82F6]/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#3B82F6]/20 mb-10 inline-block shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  Upcoming Release
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-['Poppins'] mb-8 leading-[1.1]">
                  The 2026 Global State <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">of Enterprise Printing</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                  An exclusive deep-dive into the converging worlds of AI maintenance and sustainable hardware cycles. 
                  Stay tuned for our most comprehensive technical report yet.
                </p>
                <button className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-bold px-12 h-16 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-not-allowed uppercase tracking-wider text-sm">
                  Coming Q3 2026
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogs;

