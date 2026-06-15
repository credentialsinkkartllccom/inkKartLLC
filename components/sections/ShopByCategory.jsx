import Link from 'next/link';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';

const ShopByCategory = () => {
  const categories = [
    { number: "01", image: i1, title: "Printers", link: "/printers", desc: "Enterprise multifactor systems." },
    { number: "02", image: i3, title: "Ink Systems", link: "/ink-toner", desc: "Precision liquid delivery." },
    { number: "03", image: i2, title: "Toner Tech", link: "/ink-toner", desc: "High-yield powder solutions." }
  ];

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container-custom">
        <div className="mb-16 text-center reveal-zoom">
          <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
            Inventory Spectrum
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-primary tracking-tight">
            Elite <span className="text-accent">Classifications.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link href={cat.link} 
              key={index} 
              className="group relative bg-[var(--bg)] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 flex items-center justify-center p-12">
                 <img 
                   src={cat.image} 
                   alt={cat.title} 
                   className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--bg)]/80 backdrop-blur-md shadow-sm border border-white/50 text-accent font-heading font-black text-lg">
                    {cat.number}
                 </div>
              </div>
              
              <div className="p-8 pb-10">
                 <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {cat.title}
                 </h3>
                 <p className="text-muted text-base line-height-relaxed mb-8">
                    {cat.desc}
                 </p>
                 <div className="flex items-center gap-3 text-accent text-[13px] font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                    Explore Collection
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
