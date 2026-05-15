import { Link } from 'react-scroll';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-0 md:pr-12">
            <a href="#" className="font-heading text-3xl text-white tracking-widest flex items-baseline mb-6">
              Smile<span className="text-gold italic font-medium">Craft</span>
            </a>
            <p className="text-cream/60 font-light leading-relaxed mb-8 max-w-sm">
              Premium dental care blending advanced clinical precision with aesthetic artistry. Restoring confidence, one masterpiece at a time.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors">
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                 </svg>
               </a>
               <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors">
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                 </svg>
               </a>
               {/* Custom SVG icon for Google */}
               <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors">
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                   <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                 </svg>
               </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Hero', 'Services', 'Why Us', 'Gallery', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase().replace(' ', '-')} 
                    smooth={true} 
                    offset={-100}
                    className="text-cream/60 hover:text-gold transition-colors font-light text-sm cursor-pointer inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 tracking-tighter transition-all duration-300">-</span> 
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-cream/70 font-light text-sm">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>Dwaraka Nagar, Visakhapatnam, AP</span>
              </li>
              <li className="flex gap-3 text-cream/70 font-light text-sm">
                <Phone size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>+91 98480 12345</span>
              </li>
              <li className="flex gap-3 text-cream/70 font-light text-sm">
                <Mail size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>hello@smilecraftvizag.com</span>
              </li>
              <li className="flex gap-3 text-cream/70 font-light text-sm">
                <Clock size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>Mon-Sat: 9AM - 8PM<br/>Sun: 10AM - 4PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs font-light tracking-wide">
            &copy; 2026 SmileCraft Dental Clinic, Visakhapatnam. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream/40 text-xs font-light">
             <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
