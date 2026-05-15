import { motion } from 'framer-motion';

const services = [
  "Teeth Whitening", "Dental Implants", "Braces & Aligners", 
  "Root Canal", "Smile Design", "Pediatric Dentistry", "Cosmetic Dentistry"
];

export default function Marquee() {
  const marqueeText = services.join(" · ") + " · ";

  return (
    <div className="bg-navy-light text-gold py-4 overflow-hidden border-y border-gold/10 relative">
      {/* Gradients for fade effect on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="whitespace-nowrap flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slow smooth scroll
        }}
      >
        {/* Repeat text block twice for seamless loop */}
        <div className="flex-shrink-0 flex pr-4 items-center tracking-widest text-sm uppercase">
          {marqueeText} &nbsp; {marqueeText}
        </div>
        <div className="flex-shrink-0 flex items-center tracking-widest text-sm uppercase">
          {marqueeText} &nbsp; {marqueeText}
        </div>
      </motion.div>
    </div>
  );
}
