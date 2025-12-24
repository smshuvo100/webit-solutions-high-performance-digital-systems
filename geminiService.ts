import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Fix: Using process.env.API_KEY directly as required by the @google/genai SDK guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getGrowthAdvice(query: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `You are the Lead Growth Strategist at WebIT Solutions. 
          Your tone is aggressive, direct, and results-oriented (Big-Dog positioning).
          You focus on ROI, scale, systems, and market domination.
          Avoid fluff. If someone asks for a "nice website," tell them we don't do "nice," we do "profitable."
          Keep responses under 100 words. Always steer back to booking a strategy call with WebIT Solutions.`
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm busy scaling another client. If you're serious, book a strategy call now.";
    }
  }
}

export const geminiService = new GeminiService();