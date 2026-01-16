
import React, { useState } from 'react';
import { AlertTriangle, Map as MapIcon, ShieldAlert, Activity, ChevronRight, X } from 'lucide-react';
import { MOCK_ALERTS, MOCK_INCIDENTS } from '../constants';
import LogisticsMap from './LogisticsMap';

const RiskMonitor: React.FC = () => {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  const handleVerImpacto = (id: string) => {
    setSelectedAlert(id);
    // Simular foco no mapa
    console.log(`Focando no alerta ${id} no mapa central.`);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 overflow-hidden animate-in fade-in duration-500">
      {/* Sidebar: Alert Feed */}
      <div className="w-full md:w-80 flex flex-col space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center mb-6">
            <ShieldAlert size={16} className="mr-2 text-rose-500" />
            Zonas de Alerta (RS)
          </h3>
          <div className="space-y-4">
            {MOCK_ALERTS.map(alert => (
              <div 
                key={alert.id} 
                className={`p-4 rounded-2xl border-l-4 transition-all group cursor-pointer ${
                  selectedAlert === alert.id ? 'scale-[1.02] shadow-md border-l-blue-500 bg-blue-50/50' : 
                  alert.severity === 'critical' ? 'bg-rose-50/50 border-l-rose-500 hover:bg-rose-50' : 
                  alert.severity === 'moderate' ? 'bg-amber-50/50 border-l-amber-500 hover:bg-amber-50' : 
                  'bg-blue-50/50 border-l-blue-500 hover:bg-blue-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-tight">{alert.region}</span>
                  <Activity size={14} className={alert.severity === 'critical' ? 'text-rose-500 animate-pulse' : 'text-slate-400'} />
                </div>
                <p className="text-xs font-bold text-slate-800 mt-2 leading-tight">{alert.message}</p>
                <button 
                  onClick={() => handleVerImpacto(alert.id)}
                  className={`mt-3 text-[10px] font-black flex items-center transition-colors px-2 py-1 rounded-lg ${
                    selectedAlert === alert.id ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {selectedAlert === alert.id ? 'FOCADO NO MAPA' : 'VER IMPACTO'} <ChevronRight size={10} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white p-5 rounded-3xl border border-slate-800 shadow-xl">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center mb-6">
            <AlertTriangle size={16} className="mr-2 text-amber-400" />
            Ocorrências Vivas
          </h3>
          <div className="space-y-5">
            {MOCK_INCIDENTS.map(inc => (
              <div key={inc.id} className="relative pl-5 border-l-2 border-slate-800 hover:border-blue-500 transition-colors cursor-pointer group">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform"></div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-amber-400 font-black uppercase tracking-tight">{inc.type}</span>
                  <span className="text-slate-500 font-bold">{inc.timestamp}</span>
                </div>
                <p className="text-xs font-black mt-1 tracking-tight">{inc.location}</p>
                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed font-medium line-clamp-2">{inc.description}</p>
                <button 
                  onClick={() => alert(`Enviando equipe de apoio para ${inc.location}...`)}
                  className="mt-2 text-[9px] font-black text-slate-500 hover:text-white transition-colors"
                >
                  ACIONAR SUPORTE →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: Map */}
      <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">
        <div className="absolute top-6 left-6 z-[1000] bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl border border-slate-200 shadow-2xl flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-200"></div>
            <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight">Bloqueios Críticos</span>
          </div>
          <div className="w-[1px] h-4 bg-slate-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-200"></div>
            <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight">Monitoramento RS</span>
          </div>
          {selectedAlert && (
            <button 
              onClick={() => setSelectedAlert(null)}
              className="bg-slate-100 hover:bg-slate-200 p-1 rounded-lg text-slate-500 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
        
        <LogisticsMap />
      </div>
    </div>
  );
};

export default RiskMonitor;
