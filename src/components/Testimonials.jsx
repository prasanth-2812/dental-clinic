import { motion } from 'framer-motion';

const testimonials = [
  { name: "Ramya K.", location: "MVP Colony", rating: 5, text: "I have always been terrified of the dentist, but Dr. Priya and her team entirely changed my perspective. The root canal was truly painless.", initials: "RK" },
  { name: "Suresh P.", location: "Dwaraka Nagar", rating: 5, text: "The level of professionalism here is unmatched in Vizag. They completely renovated my smile with veneers in time for my daughter's wedding.", initials: "SP" },
  { name: "Anil D.", location: "Seethammadhara", rating: 5, text: "Extremely hygienic and luxurious clinic. You feel like you are in a premium lounge, not a clinic. Highly recommend their teeth whitening.", initials: "AD" },
  { name: "Meghana V.", location: "Maddilapalem", rating: 4.9, text: "Got invisalign here. They use the best 3D scanning tech so I didn't have to deal with messy molds. Worth every single penny.", initials: "MV" },
  { name: "Kiran B.", location: "Siripuram", rating: 5, text: "Took my 6-year-old for her first checkup. The staff was incredibly gentle and patient. Now she actually looks forward to visiting!", initials: "KB" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 select-none overflow-hidden relative">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-navy"
        >
          What Our <span className="text-gold italic">Patients Say</span>
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 w-max pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* Double array for infinite continuous scroll */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] bg-white p-8 rounded-sm shadow-sm border border-navy/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-gold mb-6">
                   {/* Generate 5 stars */}
                   {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                   ))}
                </div>
                <p className="font-heading text-xl italic text-navy/80 leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-navy/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold font-body text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading text-lg text-navy">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-navy/40 font-semibold">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
