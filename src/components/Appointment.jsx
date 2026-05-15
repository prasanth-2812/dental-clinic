import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Appointment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="appointment" className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal rounded-full blur-[120px] mix-blend-screen opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-heading text-white"
          >
            Book Your <span className="text-gold italic">Free</span> Consultation
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gold mx-auto mt-6"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Form */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-cream p-8 md:p-10 rounded-sm shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-navy/60 font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy/20 py-3 text-navy font-body outline-none focus:border-gold transition-colors placeholder:text-navy/30" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-navy/60 font-semibold mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-navy/20 py-3 text-navy font-body outline-none focus:border-gold transition-colors placeholder:text-navy/30" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-navy/60 font-semibold mb-2">Interested Service</label>
                  <select className="w-full bg-transparent border-b border-navy/20 py-3 text-navy font-body outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                    <option value="">Select a service...</option>
                    <option value="implants">Dental Implants</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="invisalign">Invisible Aligners</option>
                    <option value="makeover">Smile Makeover</option>
                    <option value="general">General Checkup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-navy/60 font-semibold mb-2">Preferred Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-navy/20 py-3 text-navy font-body outline-none focus:border-gold transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-navy/60 font-semibold mb-2">Message (Optional)</label>
                <textarea rows="3" className="w-full bg-transparent border-b border-navy/20 py-3 text-navy font-body outline-none focus:border-gold transition-colors resize-none placeholder:text-navy/30" placeholder="Tell us about your dental concerns..."></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors cursor-pointer group flex items-center justify-center gap-3">
                  Confirm Appointment 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:col-span-2 flex flex-col items-center justify-center border border-white/10 p-8 md:p-10 rounded-sm relative bg-navy/50 backdrop-blur-md"
          >
            <div className="w-full space-y-10">
              <div className="flex gap-4 items-start">
                <MapPin className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-heading text-xl mb-1">Location</div>
                  <div className="text-cream/70 font-light text-sm leading-relaxed">
                    SmileCraft Dental Clinic, <br />
                    Dwaraka Nagar, <br />
                    Visakhapatnam, Andhra Pradesh
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-heading text-xl mb-1">Timings</div>
                  <div className="text-cream/70 font-light text-sm leading-relaxed">
                    Mon–Sat: 9:00 AM – 8:00 PM <br />
                    Sunday: 10:00 AM – 4:00 PM
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-heading text-xl mb-1">Contact</div>
                  <div className="text-cream/70 font-light text-sm leading-relaxed mb-4">
                    +91 98480 12345
                  </div>
                  <a href="https://wa.me/919848012345" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-colors rounded-sm">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
            
            {/* Subtle Abstract SVG in Background */}
            <svg viewBox="0 0 100 100" className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-5 text-gold pointer-events-none">
              <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 Z" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
