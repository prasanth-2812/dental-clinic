import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import beforeImg from '../assets/before.png';
import afterImg from '../assets/after.png';

const BeforeAfterCard = ({ label, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div 
        className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-cream cursor-ew-resize border border-navy/5 shadow-md"
      >
        {/* BEFORE image (background layer) */}
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
          <img src={beforeImg} alt="Before Treatment" className="w-full h-full object-cover object-center opacity-90 saturate-50 contrast-75" />
          <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest text-navy bg-white/80 px-2 py-1 rounded backdrop-blur-sm">Before</span>
        </div>

        {/* AFTER image (foreground layer via clip-path) */}
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out [clip-path:polygon(50%_0%,100%_0%,100%_100%,50%_100%)] group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
          <img src={afterImg} alt="After Treatment" className="w-full h-full object-cover object-center saturate-110 contrast-105" />
          <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest text-gold bg-navy/80 px-2 py-1 rounded backdrop-blur-sm">After</span>
        </div>

        {/* Slider Handle (visual only) */}
        <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-gold/50 group-hover:bg-gold transition-colors duration-500 z-10 -ml-[1px] group-hover:opacity-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gold/30 shadow-md flex items-center justify-center group-hover:scale-0 transition-transform duration-300">
            <div className="w-4 h-4 text-gold flex justify-between items-center opacity-70">
              <span className="text-[10px]">◀</span>
              <span className="text-[10px]">▶</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center font-heading text-lg text-navy">{label}</p>
    </motion.div>
  );
};

export default function SmileGallery() {
  return (
    <section id="gallery" className="bg-white py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-navy"
          >
            Real Results, <span className="text-gold italic">Real Smiles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-navy/60 font-light max-w-xl mx-auto"
          >
            Hover over the images to reveal the stunning transformations achieved by our expert specialists.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <BeforeAfterCard label="Smile Makeover · 3 months" delay={0.1} />
          <BeforeAfterCard label="Whitening · 1 session" delay={0.3} />
          <BeforeAfterCard label="Dental Implants · 6 months" delay={0.5} />
        </div>
      </div>
    </section>
  );
}
