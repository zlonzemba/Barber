import { motion } from "motion/react";
import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <Scissors className="text-gold w-8 h-8" />
          <span className="text-2xl font-serif tracking-widest uppercase text-gold">The Prestige</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {["Services", "Booking", "AI Advisor", "Gallery", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-t border-white/5 px-6 py-10 flex flex-col gap-6"
        >
          {["Services", "Booking", "AI Advisor", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
