import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: API Key must be provided in the environment variables as process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

/**
 * A placeholder function to demonstrate how we would integrate Gemini
 * to generate dynamic bio or chat responses in the future.
 */
export const generateBioEnhancement = async (currentBio: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key missing");
    return "AI features unavailable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Rewrite this short bio to sound more futuristic and cyberpunk, keep it under 10 words: ${currentBio}`,
    });
    return response.text || currentBio;
  } catch (error) {
    console.error("Error generating content:", error);
    return currentBio;
  }
};