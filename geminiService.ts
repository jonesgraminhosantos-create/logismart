
import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysis } from './types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeRouteRisk = async (origin: string, destination: string, weatherData: string): Promise<AIAnalysis> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Você é um Analista de Risco Logístico Enterprise. 
              Analise os riscos para uma viagem de carga de ${origin} para ${destination} no Rio Grande do Sul.
              Contexto Climático Regional Atual: ${weatherData}.
              
              Sua análise deve ser técnica, focada em segurança operacional e cumprimento de prazos (SLA).
              Considere:
              1. Bacias hidrográficas e riscos de alagamento (comum no RS).
              2. Relevo da Serra Gaúcha (neblina, curvas).
              3. Impacto financeiro de atrasos em cargas industriais.
              
              Forneça a análise em JSON seguindo o schema estrito.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          reliabilityScore: { type: Type.NUMBER, description: "Score de 0 a 100 de confiabilidade da rota" },
          recommendations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista de 3-5 recomendações táticas" },
          climateImpact: { type: Type.STRING, description: "Resumo técnico do impacto do clima no trajeto" },
          financialRiskEstimate: { type: Type.STRING, description: "Estimativa qualitativa de risco financeiro (ex: 'Moderado devido a perecíveis')" },
          alternativeRouteNeeded: { type: Type.BOOLEAN, description: "Se uma rota alternativa deve ser considerada imediatamente" }
        },
        required: ["reliabilityScore", "recommendations", "climateImpact", "financialRiskEstimate", "alternativeRouteNeeded"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}') as AIAnalysis;
  } catch (error) {
    console.error("Failed to parse AI response", error);
    return {
      reliabilityScore: 50,
      recommendations: ["Manter cautela devido a falha na análise preditiva", "Check-up preventivo do veículo"],
      climateImpact: "Indisponível no momento",
      financialRiskEstimate: "Não calculado",
      alternativeRouteNeeded: false
    };
  }
};
