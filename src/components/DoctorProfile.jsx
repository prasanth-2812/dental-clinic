import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';
import doctorImg from '../assets/doctor.png';

export default function DoctorProfile() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="doctor" className="bg-navy py-24 px-6 md:px-12 borders-y border-white/5 relative overflow-hidden">
      {/* Decorative SVG background */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[400px] h-[400px] text-white">
          <path d="M0 100 C 50 100, 100 50, 100 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M100 200 C 100 150, 150 100, 200 100" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Avatar Illustration */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-sm mx-auto md:mx-0 w-full aspect-[4/5] bg-gradient-to-br from-navy-light to-navy rounded-t-full rounded-b-xl border flex items-end justify-center pt-10 px-8 border-gold/20 shadow-2xl overflow-hidden group"
        >
          {/* Realistic Doctor Portrait */}
          <img 
            src={doctorImg} 
            alt="Dr. Priya Sharma" 
            className="w-full h-[110%] object-cover object-top drop-shadow-xl relative z-10"
          />

          {/* Floating Aesthetic specific to doctor */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 right-[-20px] bg-white border border-gold/30 text-gold p-2 rounded-full shadow-lg z-20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
           ref={ref}
           initial={{ opacity: 0, x: 30 }}
           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            Meet Our <span className="text-gold italic">Lead Specialist</span>
          </h2>
          <div className="h-px w-16 bg-gold mb-8"></div>
          
          <h3 className="text-3xl font-heading text-cream mb-2">Dr. Priya Sharma</h3>
          <p className="text-gold tracking-widest uppercase text-sm mb-6 font-medium">
            BDS, MDS (Prosthodontics) · 15 Years Exp.
          </p>

          <p className="text-cream/70 font-light leading-relaxed mb-8">
            Dr. Sharma combines her extensive academic background with a deep passion for aesthetic and restorative dentistry. Her approach focuses on minimal intervention and maximum results, ensuring every patient leaves with a confident, natural smile.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Gold Medalist in Prosthodontics",
              "Fellow of the Indian Association of Aesthetic Dentistry",
              "Certified Invisalign Provider",
              "Specialist in Full Mouth Rehabilitation"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-cream/80 text-sm font-light">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-cream/5 border border-white/10 p-6 rounded-sm relative">
            <div className="text-6xl text-gold font-heading absolute top-2 left-4 opacity-30">"</div>
            <p className="font-heading text-xl italic text-cream relative z-10 pt-2 pl-4">
              A smile is a work of art that you wear every single day. My goal is to make sure it represents the brightest, most authentic version of you.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
