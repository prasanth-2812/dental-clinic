import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ShieldCheck, Stethoscope, IndianRupee, Clock } from 'lucide-react';
import equipmentImg from '../assets/equipment.png';

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Painless Procedures", desc: "Advanced anesthesia protocols ensuring complete comfort." },
    { icon: <Stethoscope className="w-6 h-6" />, title: "Advanced Technology", desc: "Digital X-Ray & 3D Scanning for absolute precision." },
    { icon: <IndianRupee className="w-6 h-6" />, title: "Transparent Pricing", desc: "No hidden costs. Detailed treatment estimates provided upfront." },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Timings", desc: "Open 9AM–8PM daily, and Sunday 10AM–4PM for your convenience." },
  ];

  return (
    <section id="why-us" className="bg-cream py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block tracking-widest text-xs uppercase text-gold font-semibold">
            The SmileCraft Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-navy mb-8 leading-tight">
            Elevating Dental Care to an <span className="text-gold italic">Art Form</span>
          </h2>
          <p className="text-navy/70 mb-10 leading-relaxed font-light">
            We don't just treat teeth; we design smiles. Our clinic merges state-of-the-art dental technology with a soothing, spa-like environment. Experience the new standard in premium dentistry.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading text-xl text-navy mb-1">{item.title}</h4>
                  <p className="text-sm text-navy/60 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-8 py-6 border-t border-navy/10"
          >
            <div>
              <div className="text-3xl font-heading text-navy flex items-baseline gap-1">
                <Counter end={4500} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-widest text-navy/50 mt-1">Happy Smiles</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-navy flex items-baseline gap-1">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-widest text-navy/50 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-navy flex items-baseline gap-1">
                <Counter end={99} suffix="%" />
              </div>
              <div className="text-xs uppercase tracking-widest text-navy/50 mt-1">Success Rate</div>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="relative h-full min-h-[500px] flex justify-center items-center rounded-2xl bg-white/50 border border-white/80 p-8 shadow-soft"
        >
          <img src={equipmentImg} alt="State of the art dental equipment" className="w-[85%] h-auto max-h-[400px] object-cover rounded-xl shadow-lg border border-gold/20" />
          
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-cream/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-heading text-navy">ISO 9001:2015</div>
              <div className="text-[10px] text-navy/50 uppercase tracking-wide">Certified Clinic</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
