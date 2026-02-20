import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Loader2, Bot } from "lucide-react";
import { getStyleAdvice } from "../services/barberService";
import Markdown from "react-markdown";

export default function AIStyleAdvisor() {
  const [input, setInput] = useState("");
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setAdvice(null);
    try {
      const result = await getStyleAdvice(input);
      setAdvice(result || "Désolé, je n'ai pas pu générer de conseils pour le moment.");
    } catch (error) {
      console.error("AI Advisor error:", error);
      setAdvice("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-32 px-6 bg-dark border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-gold/30 mb-8">
          <Sparkles className="text-gold w-4 h-4" />
          <span className="text-xs uppercase tracking-widest text-gold">Conseiller de Style IA</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl mb-8">Votre Visagiste <br /> <span className="italic text-gold-gradient">Personnel</span></h2>
        <p className="text-paper/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Décrivez votre visage, votre type de cheveux ou le style que vous recherchez. Notre IA experte vous donnera des conseils personnalisés avant votre visite.
        </p>

        <form onSubmit={handleAsk} className="relative max-w-2xl mx-auto mb-12">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: J'ai un visage ovale, des cheveux épais et je veux un look moderne..."
            className="w-full bg-white/5 border border-white/10 px-6 py-6 pr-16 focus:border-gold outline-none transition-colors rounded-xl text-lg"
          />
          <button 
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold text-dark rounded-lg flex items-center justify-center hover:bg-white transition-all disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </form>

        <AnimatePresence>
          {advice && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass p-8 md:p-12 text-left rounded-2xl border-gold/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Bot size={120} />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                  <Bot className="text-gold w-6 h-6" />
                </div>
                <div className="prose prose-invert prose-gold max-w-none">
                  <Markdown>{advice}</Markdown>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
