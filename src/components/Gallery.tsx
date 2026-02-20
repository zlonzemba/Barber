import { motion } from "motion/react";

const IMAGES = [
  "https://images.unsplash.com/photo-1599351431247-f10b21ce5602?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1621605815841-2dddb3974b63?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512690196252-741d2fd3f305?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1593702295094-272a6719511f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-7xl">Nos Réalisations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-[4/5] overflow-hidden group relative"
            >
              <img 
                src={img} 
                alt={`Gallery image ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest">Voir</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
