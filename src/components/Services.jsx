import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    title: "Dental Implants",
    desc: "Replace missing teeth permanently with natural-looking, durable titanium implants.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M12 2v6" />
        <path d="M9 10c0-1.5 1.5-3 3-3s3 1.5 3 3v2c-2 0-4 1-4 3v4c0 1-1 2-2 2h-4v-2c0-1 1-1.5 1-2.5v-3c0-1.5 1-2 3-3.5" />
      </svg>
    )
  },
  {
    title: "Teeth Whitening",
    desc: "Professional-grade whitening for a dazzling, confident smile in just one session.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M12 4c-4.4 0-8 3-8 7 0 2.5 1.5 4.5 3.5 5.5v2.5h9v-2.5c2-1 3.5-3 3.5-5.5 0-4-3.6-7-8-7z" />
        <path d="M12 7l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2" stroke="currentColor"/>
      </svg>
    )
  },
  {
    title: "Invisible Aligners",
    desc: "Clear braces providing zero discomfort for seamless, invisible teeth straightening.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M4 12c0 4.4 3.6 8 8 8s8-3.6 8-8" />
        <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M3 12h18" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    title: "Root Canal",
    desc: "Pain-free, modern endodontic treatment to save your natural teeth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M12 2C8 2 6 5 6 9v3c-1 1.5-2 3-2 5v3h16v-3c0-2-1-3.5-2-5V9c0-4-2-7-6-7z" />
        <path d="M12 8v8" />
        <path d="M9 12h6" />
      </svg>
    )
  },
  {
    title: "Smile Makeover",
    desc: "Full cosmetic transformation meticulously planned for your unique facial structure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M12 4C7 4 3 8 3 12c0 2 1 4 2 5v3h4c1 0 2-1 3-2h4c1 1 2 2 3 2h4v-3c1-1 2-3 2-5 0-4-4-8-9-8z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      </svg>
    )
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle preventative care tailored completely for children in a relaxed setting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 10h.01M16 10h.01" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 15s1.5 2 4 2 4-2 4-2" />
      </svg>
    )
  }
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading text-navy"
          >
            Every Smile Deserves <span className="text-gold italic">Expert</span> Care
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gold mx-auto mt-6"
          ></motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-cream/40 p-8 rounded-sm shadow-[0_2px_10px_rgba(10,22,40,0.03)] border-b-2 border-transparent hover:border-gold hover:shadow-soft transition-all duration-300 group cursor-default"
            >
              <div className="text-navy group-hover:text-gold transition-colors duration-300 mb-6 drop-shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading mb-3 text-navy group-hover:text-navy-light transition-colors">
                {service.title}
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
