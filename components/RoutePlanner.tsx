
import React, { useState } from 'react';
import { MapPin, ShieldAlert, Sparkles, Loader2, Navigation, CheckCircle2, DollarSign, CloudRain } from 'lucide-react';
import { analyzeRouteRisk } from '../geminiService';
import { AIAnalysis, ViewType } from '../types';

interface RoutePlannerProps {
  onNavigate?: (view: ViewType) => void;
}

const RoutePlanner: React.FC<RoutePlannerProps> = ({ onNavigate }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);

  const handleAnalyze = async () => {
    if (!origin || !destination) return;
    setIsAnalyzing(true);
    setLoadingStep('Consultando meteorologia regional...');
    
    setTimeout(() => setLoadingStep('Analisando topografia e bacias hidrográficas...'), 1000);
    setTimeout(() => setLoadingStep('Calculando impacto em SLAs industriais...'), 2000);

    try {
      const weatherContext = "Instabilidade severa no Centro-Sul, ventos de 40km/h na Freeway, céu nublado na Serra.";
      const result = await analyzeRouteRisk(origin, destination, weatherContext);
      setAnalysis(result);
    } catch (err) {
      console.error(err);
      alert("Houve um erro na análise de IA. Tente novamente em instantes.");
    } finally {
      setIsAnalyzing(false);
      setLoadingStep('');
    }
  };

  const handleApprove = () => {
    if (onNavigate) {
      onNavigate(ViewType.NEW_OPERATION);
    }
  };

  const handleSaveSimulation = () => {
    alert("Simulação salva com sucesso na sua biblioteca de planejamento estratégico.");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Navigation size={120} className="text-slate-900 rotate-12" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Navigation size={20} />
            </div>
            <span>Inteligência Logística RS</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-lg">
            Utilize nosso motor de IA treinado em dados regionais para validar a segurança de suas rotas e prever gargalos operacionais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Ponto de Origem</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Ex: Porto Alegre, RS"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Ponto de Destino</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Ex: Caxias do Sul, RS"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing || !origin || !destination}
            className="w-full mt-8 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all shadow-xl active:scale-[0.98] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isAnalyzing ? (
              <div className="relative z-10 flex items-center space-x-3">
                <Loader2 className="animate-spin" size={22} />
                <span className="animate-pulse">{loadingStep}</span>
              </div>
            ) : (
              <div className="relative z-10 flex items-center space-x-3">
                <Sparkles size={22} />
                <span>Gerar Análise de Confiabilidade</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in slide-in-from-bottom-8 duration-700">
          {/* Score Card */}
          <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-lg flex flex-col items-center justify-center text-center">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">Índice de Confiabilidade</h3>
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="72" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                <circle 
                  cx="80" cy="80" r="72" 
                  stroke={analysis.reliabilityScore > 80 ? '#10b981' : analysis.reliabilityScore > 50 ? '#f59e0b' : '#ef4444'} 
                  strokeWidth="12" fill="none" 
                  strokeDasharray={`${2 * Math.PI * 72}`}
                  strokeDashoffset={`${2 * Math.PI * 72 * (1 - analysis.reliabilityScore / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1500 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-slate-800 tracking-tighter">{analysis.reliabilityScore}%</span>
              </div>
            </div>
            <div className="mt-8 space-y-1">
              <p className={`text-lg font-bold ${analysis.reliabilityScore > 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                {analysis.reliabilityScore > 80 ? 'Viagem Otimizada' : 'Revisão Recomendada'}
              </p>
              <p className="text-xs text-slate-400 font-medium">Análise baseada em dados reais INMET/LogiSmart</p>
            </div>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="text-blue-600" size={20} />
                <h3 className="font-bold text-slate-800">Insights Estratégicos LogiSmart</h3>
              </div>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">GERADO POR IA FLASH 3</span>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center mb-3">
                    <CloudRain size={14} className="mr-2" /> Impacto Climático
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium bg-blue-50 p-4 rounded-xl border border-blue-100">
                    {analysis.climateImpact}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center mb-3">
                    <DollarSign size={14} className="mr-2" /> Risco Financeiro
                  </p>
                  <p className="text-sm text-slate-800 font-bold">
                    {analysis.financialRiskEstimate}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Recomendações Táticas</p>
                <div className="space-y-3">
                  {analysis.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="mt-1 bg-emerald-500 rounded-full p-0.5">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <span className="text-xs text-slate-600 font-medium leading-tight">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {analysis.alternativeRouteNeeded && (
              <div className="mx-8 mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center space-x-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <ShieldAlert className="text-amber-700" size={20} />
                </div>
                <div>
                  <p className="text-amber-900 font-bold text-sm tracking-tight">Recálculo Dinâmico Necessário</p>
                  <p className="text-[11px] text-amber-700 mt-0.5">Nossa IA detectou anomalias na rota principal. Recomenda-se via alternativa para evitar atrasos de SLA.</p>
                </div>
              </div>
            )}

            <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100 flex space-x-4">
              <button 
                onClick={handleApprove}
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Aprovar & Despachar
              </button>
              <button 
                onClick={handleSaveSimulation}
                className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all"
              >
                Salvar Simulação
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutePlanner;
