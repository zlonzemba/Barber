import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Barbershop Atmosphere"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold uppercase tracking-[0.4em] text-sm mb-6 block"
        >
          Established 2024
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
        >
          L'Art du <br />
          <span className="italic text-gold-gradient">Rasage Moderne</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-paper/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Plus qu'une simple coupe, une expérience de prestige. Redéfinissez votre style avec nos maîtres barbiers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#booking"
            className="px-10 py-5 bg-gold text-dark font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group"
          >
            Réserver Maintenant
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services"
            className="px-10 py-5 border border-white/20 uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Nos Services
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px bg-gold/50"
      />
    </section>
  );
}
