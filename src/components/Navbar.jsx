import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'Services', to: 'services' },
  { name: 'Why Us', to: 'why-us' },
  { name: 'Testimonials', to: 'testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-navy/95 backdrop-blur-md py-4 border-b border-gold/20 shadow-soft' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#" className="font-heading text-3xl text-white tracking-widest flex items-baseline">
            Smile<span className="text-gold italic font-medium">Craft</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-100}
                duration={800}
                className="text-sm uppercase tracking-widest text-cream/70 hover:text-gold transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="appointment"
              smooth={true}
              offset={-100}
              duration={800}
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-2.5 rounded-sm uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy pt-24 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading text-cream hover:text-gold border-b border-white/5 pb-4 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="appointment"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gold text-navy font-semibold text-center py-4 uppercase tracking-widest mt-4"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
