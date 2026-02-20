import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getStyleAdvice(userDescription: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `En tant qu'expert barbier visagiste, donne des conseils de style de cheveux et de barbe pour cette personne : ${userDescription}. Sois élégant, professionnel et précis. Réponds en français.`,
    config: {
      systemInstruction: "Tu es un barbier de luxe nommé 'The Prestige'. Ton ton est sophistiqué et expert.",
    },
  });

  return response.text;
}

export const SERVICES = [
  {
    id: "classic-cut",
    name: "Coupe Classique",
    price: "35€",
    duration: "45 min",
    description: "Coupe aux ciseaux et tondeuse, finition rasoir et coiffage.",
  },
  {
    id: "beard-trim",
    name: "Taille de Barbe",
    price: "25€",
    duration: "30 min",
    description: "Taille sculptée, contours au rasoir et soin à l'huile chaude.",
  },
  {
    id: "prestige-ritual",
    name: "Rituel Prestige",
    price: "55€",
    duration: "75 min",
    description: "Le combo ultime : Coupe de cheveux + Taille de barbe + Soin du visage.",
  },
  {
    id: "traditional-shave",
    name: "Rasage Traditionnel",
    price: "30€",
    duration: "40 min",
    description: "Rasage à l'ancienne avec serviettes chaudes et blaireau.",
  },
];
