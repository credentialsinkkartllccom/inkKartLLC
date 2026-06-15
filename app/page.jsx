import Link from 'next/link';
import { Wifi, Star, Copy, Shield, Truck, BadgeCheck, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter'] overflow-x-hidden selection:bg-[#024AD8] selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 w-full flex justify-center overflow-hidden">
        {/* Modern Premium Background Gradients */}
        <div className="absolute inset-0 z-0 bg-[#F8FAFC]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#024AD8]/5 via-transparent to-[#024AD8]/10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] z-0 bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.15),transparent_70%)]" />
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full max-w-[1400px] px-6 md:px-12 relative z-10">
          
          {/* Hero Text (Left) */}
          <div className="flex flex-col items-start animate-in slide-in-from-bottom-8 fade-in duration-1000">
            <div className="text-[#024AD8] font-bold text-[13px] tracking-[3px] uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#024AD8]"></span>
              Professional Printing Solutions
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-['Poppins'] text-[#0F172A] leading-[1.05] tracking-tight mb-6">
              Find the Perfect <br className="hidden lg:block" />
              Printer for <span className="text-[#024AD8] relative">
                Your Needs
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#024AD8]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-500 max-w-[540px] leading-relaxed mb-10 font-['Inter']">
              Experience elite performance with InkKartLLC. We offer curated selections and professional guides for premium home and office printing.
            </p>

            {/* Quick Link Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              {[
                { icon: <Wifi size={16} />, text: "Wireless Setup" },
                { icon: <Star size={16} />, text: "Photo Quality" },
                { icon: <Copy size={16} />, text: "Expert Guides" }
              ].map((pill, i) => (
                <span key={i} className="flex items-center gap-2 text-sm font-semibold bg-white/80 backdrop-blur-sm border border-slate-200 px-5 py-3 rounded-full text-[#1E293B] shadow-sm hover:border-[#024AD8]/30 transition-colors">
                   <span className="text-[#024AD8]">{pill.icon}</span> {pill.text}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 w-full sm:w-auto">
              <Link href="/printers" className="flex items-center justify-center px-10 h-14 text-base font-bold bg-[#024AD8] text-white rounded-xl hover:bg-[#0133A1] shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                Shop All Printers
              </Link>
              <Link href="/blogs" className="flex items-center justify-center px-10 h-14 text-base font-bold bg-white text-[#0F172A] border border-slate-200 rounded-xl hover:border-[#024AD8] hover:text-[#024AD8] transition-all transform hover:-translate-y-1">
                Read Buying Guides
              </Link>
            </div>
          </div>

          {/* Hero Image Card (Right) */}
          <div className="relative animate-in slide-in-from-right-8 fade-in duration-1000 delay-200 flex justify-end">
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(2,74,216,0.12)_0%,transparent_70%)] blur-[60px] -z-10" />
            
            {/* Premium Card */}
            <div className="relative z-10 w-full max-w-[650px] bg-white rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 sm:p-8 md:p-12 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#024AD8]/5 to-transparent rounded-bl-full" />
              
              <div className="absolute top-10 right-10 flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-black italic text-[10px]">HP</div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-[#0F172A] tracking-wider uppercase">Authorized</span>
                   <span className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">Premium Partner</span>
                 </div>
              </div>
              
              <div className="relative mt-12 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="/assets/hero.jpeg" 
                  alt="Premium HP Printer" 
                  className="w-full h-auto object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Status Badge */}
              {/* <div className="absolute bottom-10 left-10 flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-bold border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                In Stock & Ready to Ship
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container-custom mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-20">
            <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">Elite Collections</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] font-['Poppins']">Shop by Category</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Card 1: Home Printers */}
            <div className="relative group overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50 p-10 md:p-14 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.08),transparent_70%)] -z-0 transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative z-10">
                <span className="text-[#024AD8] font-bold text-[11px] tracking-widest uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100">Residential Elite</span>
                <h3 className="text-3xl font-bold text-[#0F172A] font-['Poppins'] mt-8 mb-4 group-hover:text-[#024AD8] transition-colors">Home Inkjet Printers</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm text-base">
                  Sophisticated solutions for homework, vibrant photo printing, and high-quality creative projects.
                </p>
              </div>
              <div className="relative z-10 mt-10">
                <Link href="/printers?category=home" className="inline-flex items-center gap-3 font-bold text-base text-[#024AD8] group/link">
                  Browse Home Series 
                  <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Card 2: Office Printers */}
            <div className="relative group overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50 p-10 md:p-14 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(at_100%_0%,rgba(2,74,216,0.08),transparent_70%)] -z-0 transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative z-10">
                <span className="text-[#024AD8] font-bold text-[11px] tracking-widest uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100">Enterprise Pro</span>
                <h3 className="text-3xl font-bold text-[#0F172A] font-['Poppins'] mt-8 mb-4 group-hover:text-[#024AD8] transition-colors">Office Inkjet Printers</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm text-base">
                  High-performance equipment for heavy volumes, precision scanning, and enterprise-grade efficiency.
                </p>
              </div>
              <div className="relative z-10 mt-10">
                <Link href="/printers?category=office" className="inline-flex items-center gap-3 font-bold text-base text-[#024AD8] group/link">
                  Browse Office Series 
                  <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats Section */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Products", val: "10,000+", sub: "Genuine Equipment" },
            { label: "Customers", val: "50k+", sub: "Satisfied Users" },
            { label: "Warranty", val: "100%", sub: "Manufacturer Backed" },
            { label: "Support", val: "24/7", sub: "Expert Assistance" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-[#024AD8]">{stat.val}</span>
              <span className="text-sm font-bold tracking-widest uppercase mt-2">{stat.label}</span>
              <span className="text-xs text-slate-400 font-medium">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Purpose Focused Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container-custom mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-20">
            <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">Tailored Solutions</span>
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins']">Precision for Every Purpose</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Wireless Connectivity", desc: "Seamless integration with smart devices. Print securely from anywhere with advanced encryption.", icon: <Wifi size={28} /> },
              { title: "Visual Excellence", desc: "Achieve professional gallery results with high-fidelity color reproduction and borderless printing.", icon: <Star size={28} /> },
              { title: "Daily Efficiency", desc: "Optimized for home productivity with low-cost ink systems and rapid-start technology.", icon: <Shield size={28} /> },
              { title: "Technology Comparison", desc: "Expert analysis between high-volume laser and vibrant inkjet to match your specific workflow.", icon: <Copy size={28} /> }
            ].map((card, idx) => (
              <div key={idx} className="flex gap-8 p-10 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center bg-blue-50 text-[#024AD8] group-hover:bg-[#024AD8] group-hover:text-white transition-colors duration-500">
                   {card.icon}
                </div>
                <div>
                   <h3 className="text-2xl font-bold font-['Poppins'] mb-3 text-[#0F172A]">{card.title}</h3>
                   <p className="text-slate-500 text-base leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container-custom mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-20">
            <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">Elite Resources</span>
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins']">Professional Guides</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { tag: "WIRELESS", title: "Elite Wireless Setups for Seamless Home Printing", link: "/blogs/seamlesshomeprinting" },
              { tag: "ENTERPRISE", title: "Top-Tier Office Equipment for High-Volume Workflow", link: "/blogs/bestofficeprinters" },
              { tag: "CREATIVE", title: "Mastering Photo Quality: The Designer's Choice", link: "/blogs/photoprinterguide" },
              { tag: "COMPARISON", title: "Laser vs Inkjet: Technical Performance Analysis", link: "/blogs/laservsinkjet" },
              { tag: "OPTIMIZATION", title: "Maximizing Efficiency: Ink & Toner Management", link: "/blogs/saveonink" },
              { tag: "SUSTAINABILITY", title: "Eco-Friendly Printing: The Modern Enterprise Standard", link: "/blogs/ecofriendlyprintingguide" }
            ].map((guide, idx) => (
              <Link href={guide.link} key={idx} className="group relative bg-slate-50 border border-slate-100 rounded-[28px] p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[260px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(2,74,216,0.05),transparent)] rounded-tr-[28px]" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#024AD8] tracking-[3px] uppercase bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                    {guide.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] font-['Poppins'] mt-8 leading-tight group-hover:text-[#024AD8] transition-colors">
                    {guide.title}
                  </h3>
                </div>
                <div className="relative z-10 mt-8 flex items-center gap-3 text-xs font-bold text-[#024AD8] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span className="tracking-widest uppercase">Explore Guide</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/blogs" className="inline-flex items-center justify-center px-12 h-14 text-base font-bold bg-[#0F172A] text-white rounded-xl hover:bg-[#024AD8] shadow-lg transition-all transform hover:-translate-y-1">
              View All Professional Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom mx-auto max-w-[1400px] px-6 text-center">
          <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">How We Work</span>
          <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins'] mb-20">The InkKartLLC Standard</h2>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto relative">
             <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-200 -z-0"></div>
             
             {[
               { step: "01", title: "Select Tier", desc: "Choose from our curated selection of professional and residential equipment." },
               { step: "02", title: "Validate Specs", desc: "Compare technical specifications and performance metrics with expert support." },
               { step: "03", title: "Secure Delivery", desc: "Professional fulfillment with guaranteed protection and authorized reseller support." }
             ].map((item, idx) => (
               <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white text-[#024AD8] text-2xl font-black rounded-3xl flex items-center justify-center mb-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 group hover:bg-[#024AD8] hover:text-white transition-all duration-500">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold font-['Poppins'] mb-4 text-[#0F172A]">{item.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white">
        <div className="container-custom mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { title: "Authorized Partner", desc: "Direct collaboration with leading manufacturers ensuring 100% genuine equipment and official warranties.", icon: <BadgeCheck className="text-[#024AD8]" size={32} /> },
              { title: "Elite Fulfillment", desc: "Priority shipping handled by specialists. Your precision equipment arrives securely and promptly.", icon: <Truck className="text-[#024AD8]" size={32} /> },
              { title: "Technical Support", desc: "Direct access to printing specialists who understand every technical nuance of your equipment.", icon: <Shield className="text-[#024AD8]" size={32} /> }
            ].map((trust, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[32px] p-12 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-50 transition-colors duration-500">
                  {trust.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] font-['Poppins'] mb-5">{trust.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container-custom mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-20">
            <span className="text-[#024AD8] font-bold text-sm tracking-[4px] uppercase block mb-4">Client Feedback</span>
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins']">The Voice of Excellence</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah Mitchell", role: "Creative Director", quote: "The level of expertise at InkKartLLC is unmatched. They recommended a precision setup that transformed our studio's output quality." },
              { name: "David Henderson", role: "IT Consultant", quote: "Fast fulfillment, genuine products, and technical support that actually knows their equipment. A professional standard." },
              { name: "Elena Rodriguez", role: "Architect", quote: "Secure, reliable, and professional. Their buying guides are technical and accurate, saving us from costly equipment errors." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[32px] p-12 shadow-sm flex flex-col justify-between min-h-[300px] relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4286 0L17.1429 11.4286V28.5714H0V11.4286H5.71429L0 0H11.4286ZM34.2857 0L40 11.4286V28.5714H22.8571V11.4286H28.5714L22.8571 0H34.2857Z" fill="#024AD8"/>
                  </svg>
                </div>
                <p className="text-[#1E293B] font-medium leading-relaxed text-lg relative z-10">
                  "{review.quote}"
                </p>
                <div className="mt-12 flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#024AD8] font-bold text-lg border border-blue-100">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-base leading-none mb-2">{review.name}</h4>
                    <span className="text-[10px] font-bold text-[#024AD8] uppercase tracking-widest">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(2,74,216,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-['Poppins'] mb-6 tracking-tight">Stay Ahead of the Curve</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our elite circle for technical updates, exclusive equipment access, and professional maintenance insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Professional Email Address" 
              className="flex-1 h-16 bg-white/5 border border-white/10 rounded-xl px-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#024AD8] transition-colors"
              required 
            />
            <button type="submit" className="h-16 px-10 bg-[#024AD8] text-white font-bold rounded-xl hover:bg-[#0133A1] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20 whitespace-nowrap">
              Join Circle
            </button>
          </form>
          <p className="text-slate-600 text-[10px] uppercase tracking-[2px] font-bold mt-8">
            Privacy Protected • No Spam • Professional Content Only
          </p>
        </div>
      </section>
    </div>
  );
}
