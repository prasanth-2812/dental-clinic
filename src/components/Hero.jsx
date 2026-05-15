import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-navy flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Mesh (Custom SVG/CSS) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-gold rounded-full blur-[120px] mix-blend-screen opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Side Content */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-cream">
          <motion.div variants={item} className="mb-6 inline-block tracking-widest text-xs uppercase border border-gold/30 px-4 py-1.5 rounded-full text-gold bg-gold/5 backdrop-blur-sm">
            Trusted Dental Care · Visakhapatnam
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-heading leading-[1.1] mb-6">
            Your Smile, <br />
            Our <span className="text-gold italic font-medium">Masterpiece</span>.
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-xl text-cream/70 font-light mb-10 max-w-lg">
            15+ years of advanced dentistry with a gentle touch. Experience premium care designed around your comfort.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Link to="appointment" smooth={true} offset={-100} className="bg-gold hover:bg-gold-light text-navy px-8 py-3.5 uppercase tracking-widest text-sm font-semibold transition-colors cursor-pointer rounded-sm shadow-gold">
              Book Appointment
            </Link>
            <Link to="services" smooth={true} offset={-100} className="border border-cream/30 hover:border-gold hover:text-gold px-8 py-3.5 uppercase tracking-widest text-sm font-medium transition-colors cursor-pointer rounded-sm">
              View Services
            </Link>
          </motion.div>
          
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[ 
              { num: '4500+', label: 'Patients' },
              { num: '15+', label: 'Years Exp.' },
              { num: '4.9★', label: 'Rating' },
              { num: '12', label: 'Specialists' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-heading text-gold mb-1">{stat.num}</div>
                <div className="text-xs tracking-wider text-cream/50 uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Visuals */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] mt-8 lg:mt-0 block">
          {/* Main Realistic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-0"
          >
            <img 
              src={heroBg} 
              alt="Premium dental clinic interior" 
              className="w-full h-full object-cover rounded-2xl md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[2px] border-gold/30"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-4 md:inset-0 rounded-2xl md:rounded-[40px] bg-gradient-to-t from-navy/60 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-10 md:top-20 right-[-10px] md:right-0 bg-navy/80 backdrop-blur-md border border-white/10 px-4 md:px-5 py-2 md:py-3 rounded-md shadow-2xl z-20 flex items-center gap-3 scale-90 md:scale-100"
          >
            <span className="text-green-400 text-lg">✓</span>
            <span className="text-white text-sm tracking-wide">Open Today 9AM–8PM</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 md:bottom-40 left-0 md:left-[-20px] bg-navy/90 backdrop-blur-md border border-gold/30 px-5 py-3 rounded-md shadow-2xl z-20 text-cream scale-90 md:scale-100"
          >
            <div className="text-sm font-medium mb-1 flex items-center gap-2">
              <span className="text-gold text-lg">🏆</span> Best Clinic 2024
            </div>
            <div className="text-xs text-cream/60">Visakhapatnam</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-0 md:right-[-20px] bg-cream text-navy p-4 md:p-5 rounded-md shadow-2xl z-20 max-w-[200px] md:max-w-[220px] scale-90 md:scale-100"
          >
            <div className="flex gap-1 text-gold mb-2 text-sm">★★★★★</div>
            <p className="text-xs font-heading italic text-navy/80 mb-3 leading-relaxed">
              "Pain-free experience! They truly treat your smile like a masterpiece."
            </p>
            <div className="text-[10px] uppercase tracking-wider font-bold">— Rahul V.</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
