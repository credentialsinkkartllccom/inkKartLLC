"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ChevronRight, Cpu, Zap, DollarSign, Settings, Wifi, Leaf, ArrowRight } from 'lucide-react';



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
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 w-full flex justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#024AD8]/5 via-transparent to-[#024AD8]/5" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.1),transparent_70%)]" />
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase bg-blue-50 px-6 py-2 rounded-full border border-blue-100 mb-8">
              <BookOpen size={14} />
              Insights & Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] text-[#0F172A] leading-tight tracking-tight mb-8">
              The Print <br />
              <span className="text-[#024AD8]">Journal.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Documentation, Technical Analysis, and Industry Intelligence for the Modern Workflow. 
              Stay ahead with our expert-led printing strategies.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container-custom mx-auto max-w-[1400px] px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                  <Link href={post.link} className="group flex flex-col h-full bg-white rounded-[32px] border border-slate-100 overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                        <span className="text-[#024AD8]">{post.icon}</span>
                        <span className="text-[10px] font-bold text-[#0F172A] tracking-wider uppercase">{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-6">
                        <Clock size={12} className="text-[#024AD8]" />
                        <span className="text-[10px] font-bold text-[#024AD8] tracking-widest uppercase">{post.readTime} READ</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-4 leading-tight group-hover:text-[#024AD8] transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                        {post.description}
                      </p>
                      
                      <div className="pt-8 border-t border-slate-50 flex items-center gap-3 text-xs font-bold text-[#024AD8]">
                        <span className="tracking-widest uppercase">Read Full Brief</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container-custom mx-auto max-w-5xl px-6">
            <div className="bg-[#0F172A] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(2,74,216,0.15),transparent_70%)]" />
              <div className="relative z-10">
                <span className="text-[#024AD8] font-bold text-[11px] tracking-[4px] uppercase bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20 mb-8 inline-block">
                  Upcoming Release
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white font-['Poppins'] mb-8 leading-tight">
                  The 2026 Global State <br/> of Enterprise Printing
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                  An exclusive deep-dive into the converging worlds of AI maintenance and sustainable hardware cycles. 
                  Stay tuned for our most comprehensive technical report yet.
                </p>
                <button className="inline-flex items-center gap-3 bg-[#024AD8]/10 text-[#024AD8] border border-[#024AD8]/20 font-bold px-12 h-16 rounded-2xl cursor-default">
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
