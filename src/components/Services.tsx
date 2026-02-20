import { motion } from "motion/react";
import { SERVICES } from "../services/barberService";

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Menu de Soins</span>
            <h2 className="text-5xl md:text-7xl">Nos Services</h2>
          </div>
          <p className="max-w-md text-paper/50 font-light leading-relaxed">
            Chaque service est réalisé avec une attention méticuleuse aux détails, utilisant les meilleurs produits du marché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark p-12 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-serif group-hover:text-gold transition-colors">{service.name}</h3>
                <span className="text-2xl text-gold font-serif">{service.price}</span>
              </div>
              <p className="text-paper/60 mb-8 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-paper/40">
                <span>Durée: {service.duration}</span>
                <div className="w-1 h-1 rounded-full bg-gold/50" />
                <span>Finition Premium</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
