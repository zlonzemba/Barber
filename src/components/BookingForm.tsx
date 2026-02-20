import { useState } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../services/barberService";
import { Calendar, Clock, User, Mail, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: SERVICES[0].id,
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", service: SERVICES[0].id, date: "", time: "" });
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="booking" className="py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-2xl mx-auto glass p-12 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="text-dark w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl mb-4">Réservation Confirmée</h2>
          <p className="text-paper/60 mb-8">
            Merci pour votre confiance. Vous recevrez un email de confirmation sous peu.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="px-8 py-4 border border-gold text-gold uppercase tracking-widest hover:bg-gold hover:text-dark transition-all"
          >
            Nouvelle Réservation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Prendre Rendez-vous</span>
          <h2 className="text-5xl md:text-7xl mb-8">Réservez votre <br /> <span className="italic text-gold-gradient">Moment Prestige</span></h2>
          <p className="text-paper/60 font-light leading-relaxed mb-12">
            Choisissez votre service et l'horaire qui vous convient. Notre équipe vous accueillera dans un cadre d'exception.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-paper/80">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full border-gold/20">
                <Calendar className="text-gold w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/40">Ouvert</p>
                <p className="font-serif text-lg">Mardi - Samedi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-paper/80">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full border-gold/20">
                <Clock className="text-gold w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/40">Horaires</p>
                <p className="font-serif text-lg">09:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 border-gold/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/40 ml-1">Nom Complet</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-12 py-4 focus:border-gold outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/40 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-12 py-4 focus:border-gold outline-none transition-colors"
                    placeholder="jean@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-paper/40 ml-1">Service</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors appearance-none"
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id} className="bg-dark">{s.name} - {s.price}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/40 ml-1">Date</label>
                <input 
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/40 ml-1">Heure</label>
                <input 
                  required
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-gold outline-none transition-colors"
                />
              </div>
            </div>

            <button 
              disabled={isSubmitting}
              className="w-full py-5 bg-gold text-dark font-bold uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Traitement..." : "Confirmer le Rendez-vous"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
