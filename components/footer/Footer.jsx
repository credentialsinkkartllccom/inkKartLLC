"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-enhanced">

      {/* ── Top accent line ── */}
      <div className="footer-accent-bar" />

      {/* ── Newsletter strip ── */}
      <div className="footer-newsletter-strip">
        <div className="footer-inner">
          <div className="footer-newsletter-content">
            <div>
              <h3 className="footer-newsletter-title">Stay in the loop</h3>
              <p className="footer-newsletter-sub">Get expert printer tips, exclusive deals and buying guides — no spam, ever.</p>
            </div>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="footer-newsletter-input" />
              <button type="submit" className="footer-newsletter-btn">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Col 1 — Brand */}
            <div className="footer-col footer-col-brand">
              <Link href="/" className="footer-logo-link">
                <img src="/assets/logo.webp" alt="InkKartLLC" className="footer-logo" />
              </Link>
              <p className="footer-brand-desc">
                Your authorized source for professional-grade printers, genuine ink, and premium toner. We help homes and businesses print smarter.
              </p>
              <div className="footer-contact-list">
                <a href="mailto:support@inkkartllc.com" className="footer-contact-item">
                  <span className="footer-contact-icon"><Mail size={15} /></span>
                  support@inkkartllc.com
                </a>
                <a href="tel:+18005550198" className="footer-contact-item">
                  <span className="footer-contact-icon"><Phone size={15} /></span>
                  1-800-555-0198
                </a>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon"><MapPin size={15} /></span>
                  7181 Beacon Dr 15, Reno, NV 89506
                </div>
              </div>
              {/* Social icons */}
              <div className="footer-socials">
                {[
                  { Icon: Facebook,  href: '#', label: 'Facebook'  },
                  { Icon: Twitter,   href: '#', label: 'Twitter'   },
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label} className="footer-social-btn">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Shop */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Shop</h4>
              <ul className="footer-links">
                {[
                  { label: 'All Printers',     href: '/printers'               },
                  { label: 'Home Printers',    href: '/printers?category=home' },
                  { label: 'Office Printers',  href: '/printers?category=office' },
                  { label: 'Ink & Toner',      href: '/ink-toner'              },
                 
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">
                      <ArrowRight size={13} className="footer-link-arrow" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Resources */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Resources</h4>
              <ul className="footer-links">
                {[
                  { label: 'Buying Guides',  href: '/blogs'       },
                  { label: 'About Us',       href: '/about'       },
                  { label: 'Contact Us',     href: '/contact'     },
                  { label: 'FAQs',           href: '/faqs'        },
                  { label: 'Order Lookup',   href: '/track-order' },
                  { label: 'My Account',     href: '/profile'     },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">
                      <ArrowRight size={13} className="footer-link-arrow" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Policies */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Policies</h4>
              <ul className="footer-links">
                {[
                  { label: 'Shipping Policy',      href: '/shipping-policy'       },
                  { label: 'Refund & Returns',     href: '/refund-return-policy'  },
                  { label: 'Privacy Policy',       href: '/privacy-policy'        },
                  { label: 'Terms & Conditions',   href: '/terms-conditions'      },
                  { label: 'Cookie Policy',        href: '/cookie-policy'         },
                  { label: 'Accessibility',        href: '/accessibility'         },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">
                      <ArrowRight size={13} className="footer-link-arrow" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Trust badges ── */}
      {/* <div className="footer-trust-strip">
        <div className="footer-inner">
          <div className="footer-trust-badges">
            {[
              { icon: '🔒', text: 'Secure Checkout' },
              { icon: '✅', text: 'Authorized Reseller' },
              { icon: '🚚', text: 'Fast Shipping'   },
              { icon: '↩️', text: '30-Day Returns'  },
              { icon: '🎧', text: '24/7 Support'    },
            ].map(({ icon, text }) => (
              <div key={text} className="footer-trust-badge">
                <span className="footer-trust-icon">{icon}</span>
                <span className="footer-trust-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-inner">
          <div className="footer-bottom-content">
            <p className="footer-bottom-left">
              Authorized Printer Retailer &bull; Based in Nevada, USA
            </p>
            <p className="footer-bottom-right">
              &copy; {new Date().getFullYear()} <span className="footer-brand-name">InkKartLLC</span> &bull; All Rights Reserved
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
