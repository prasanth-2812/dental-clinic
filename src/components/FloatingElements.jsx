import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingElements() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* Call Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href="tel:+919848012345"
        className="w-14 h-14 bg-navy hover:bg-navy-light text-gold rounded-full flex items-center justify-center shadow-lg border border-gold/30 group"
        aria-label="Call Clinic"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        href="https://wa.me/919848012345"
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg group"
        aria-label="WhatsApp Clinic"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
        
        {/* Pulse animation rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></div>
      </motion.a>
      
    </div>
  );
}
