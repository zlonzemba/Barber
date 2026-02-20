import { Scissors, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Scissors className="text-gold w-8 h-8" />
            <span className="text-2xl font-serif tracking-widest uppercase text-gold">The Prestige</span>
          </div>
          <p className="text-paper/40 font-light leading-relaxed">
            L'excellence du rasage traditionnel alliée à la modernité. Un lieu dédié à l'homme élégant.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-serif mb-8 text-gold">Contact</h4>
          <ul className="space-y-4 text-paper/60 font-light">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-gold" />
              123 Avenue des Champs-Élysées, Paris
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold" />
              +33 1 23 45 67 89
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold" />
              contact@theprestige.fr
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-serif mb-8 text-gold">Horaires</h4>
          <ul className="space-y-2 text-paper/60 font-light">
            <li className="flex justify-between">
              <span>Lundi</span>
              <span className="text-paper/40">Fermé</span>
            </li>
            <li className="flex justify-between">
              <span>Mardi - Vendredi</span>
              <span>09:00 - 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Samedi</span>
              <span>09:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Dimanche</span>
              <span className="text-paper/40">Fermé</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-serif mb-8 text-gold">Newsletter</h4>
          <p className="text-paper/40 text-sm mb-6 font-light">
            Inscrivez-vous pour recevoir nos offres exclusives et conseils de style.
          </p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Votre email"
              className="bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold transition-colors w-full text-sm"
            />
            <button className="bg-gold text-dark px-4 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">
              OK
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-paper/20 text-xs uppercase tracking-[0.2em]">
        © 2024 The Prestige Barbershop. Tous droits réservés.
      </div>
    </footer>
  );
}
