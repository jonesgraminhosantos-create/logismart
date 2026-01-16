
import React, { useEffect, useState } from 'react';
import { TrendingUp, Truck, AlertCircle, ShieldCheck, ChevronRight, Activity, Map as MapIcon, Loader2 } from 'lucide-react';
import { dataService } from '../dataService';
import { Trip, Incident, ViewType } from '../types';
import LogisticsMap from './LogisticsMap';

interface DashboardProps {
  onNavigate?: (view: ViewType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [tripsData, incidentsData] = await Promise.all([
          dataService.getTrips(),
          dataService.getIncidents()
        ]);
        setTrips(tripsData);
        setIncidents(incidentsData);
      } catch (error) {
        console.error("Erro ao carregar dashboard", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Sincronizando com LogiSmart Cloud...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Painel de Controle Estratégico</h2>
          <p className="text-slate-500 text-sm font-medium">Monitoramento dinâmico de frotas e riscos operacionais (RS).</p>
        </div>
        <div className="flex space-x-3 w-full md:w-auto">
          <button 
            onClick={() => onNavigate?.(ViewType.AUDIT)}
            className="flex-1 md:flex-none bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm active:scale-95"
          >
            <Activity size={16} className="mr-2 text-indigo-500" />
            Auditoria
          </button>
          <button 
            onClick={() => onNavigate?.(ViewType.NEW_OPERATION)}
            className="flex-1 md:flex-none bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"
          >
            Nova Operação
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Viagens em Curso', value: trips.filter(t => t.status === 'in-transit').length.toString(), change: '+12%', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50', view: ViewType.FLEET },
          { label: 'Índice de Segurança', value: '98.4%', change: '+1.5%', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', view: ViewType.RISKS },
          { label: 'Eventos Críticos', value: incidents.length.toString().padStart(2, '0'), change: '-4', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50', view: ViewType.RISKS },
          { label: 'Economia de Escala', value: '14%', change: '+2.1%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50', view: ViewType.REPORTS },
        ].map((stat, i) => (
          <button 
            key={i} 
            onClick={() => onNavigate?.(stat.view)}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
          >
            <div className="flex justify-between items-start">
              <div className={`${stat.bg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-3xl font-black text-slate-800 tracking-tighter">{stat.value}</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[520px]">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm">
            <div>
              <h3 className="font-black text-slate-800 uppercase tracking-tight">Geolocalização & Tráfego</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Atualização em tempo real ativo</p>
            </div>
            <button 
              onClick={() => onNavigate?.(ViewType.RISKS)}
              className="text-xs font-black text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all border border-transparent hover:border-blue-100 flex items-center"
            >
              <MapIcon size={14} className="mr-2" />
              Ver Mapa Completo
            </button>
          </div>
          <div className="flex-1">
            <LogisticsMap />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[520px]">
          <h3 className="font-black text-slate-800 mb-6 flex items-center uppercase text-sm tracking-tight">
            <Activity className="mr-2 text-indigo-500" size={18} />
            Incidentes Recentes
          </h3>
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {incidents.length > 0 ? incidents.map(inc => (
              <div key={inc.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group cursor-pointer border-l-4 border-l-transparent hover:border-l-blue-500">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${
                    inc.severity === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inc.severity}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">{inc.timestamp}</span>
                </div>
                <h4 className="text-sm font-black text-slate-800">{inc.type}</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">{inc.location}</p>
                <div className="mt-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => alert(`Detalhes do Incidente ${inc.id}: ${inc.description}`)}
                    className="text-[10px] font-black text-blue-600 flex items-center hover:bg-blue-50 px-2 py-1 rounded-lg"
                  >
                    DETALHES <ChevronRight size={10} className="ml-1" />
                  </button>
                </div>
              </div>
            )) : (
              <p className="text-slate-400 text-xs text-center py-10 font-bold uppercase tracking-widest">Nenhuma ocorrência registrada</p>
            )}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button 
              onClick={() => onNavigate?.(ViewType.PLANNER)}
              className="w-full bg-indigo-50 p-4 rounded-2xl border border-indigo-100 hover:bg-indigo-100 transition-all text-left group"
            >
              <p className="text-xs font-black text-indigo-800 mb-1 flex items-center">
                <ShieldCheck size={14} className="mr-2" /> Dica de IA LogiSmart
              </p>
              <p className="text-[11px] text-indigo-700 leading-relaxed font-medium">
                Neblina na Serra Gaúcha. Clique para recalcular rotas de segurança.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
