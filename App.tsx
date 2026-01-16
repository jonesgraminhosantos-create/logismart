
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FleetManagement from './components/FleetManagement';
import RoutePlanner from './components/RoutePlanner';
import RiskMonitor from './components/RiskMonitor';
import Settings from './components/Settings';
import Profile from './components/Profile';
import AuditLog from './components/AuditLog';
import OperationForm from './components/OperationForm';
import LandingPage from './components/LandingPage';
import { ViewType } from './types';
import { Bell, Search, Globe, Sparkles, MessageSquare, Info, X, FileText, Download, Filter, Calendar } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>(ViewType.LANDING);
  const [showNotifications, setShowNotifications] = useState(false);

  // Se estiver na Landing Page, renderiza apenas ela sem o layout do dashboard
  if (activeView === ViewType.LANDING) {
    return <LandingPage onEnterApp={() => setActiveView(ViewType.DASHBOARD)} />;
  }

  const renderContent = () => {
    switch (activeView) {
      case ViewType.DASHBOARD: return <Dashboard onNavigate={setActiveView} />;
      case ViewType.FLEET: return <FleetManagement onNavigate={setActiveView} />;
      case ViewType.PLANNER: return <RoutePlanner onNavigate={setActiveView} />;
      case ViewType.RISKS: return <RiskMonitor onNavigate={setActiveView} />;
      case ViewType.SETTINGS: return <Settings />;
      case ViewType.PROFILE: return <Profile />;
      case ViewType.AUDIT: return <AuditLog />;
      case ViewType.NEW_OPERATION: return <OperationForm onNavigate={setActiveView} />;
      case ViewType.REPORTS:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Relatórios & Analytics</h2>
                <p className="text-slate-500 text-sm font-medium">Extração de dados consolidados e inteligência de negócios.</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => alert('Gerando relatório consolidado em PDF... Por favor, aguarde.')} 
                  className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center hover:bg-slate-800 transition-all active:scale-95"
                >
                  <Download size={16} className="mr-2" /> Exportar Tudo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Performance Mensal', icon: FileText, color: 'text-blue-600', file: 'Relatorio_Perf_Jan.pdf' },
                { title: 'Análise de Risco RS', icon: Filter, color: 'text-rose-600', file: 'Analise_Climatica_Q1.pdf' },
                { title: 'Uso de Combustível', icon: Calendar, color: 'text-emerald-600', file: 'Efficiency_Report.pdf' }
              ].map((report, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group border-b-4 border-b-transparent hover:border-b-indigo-500">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 group-hover:bg-white group-hover:scale-110 transition-all ${report.color}`}>
                    <report.icon size={24} />
                  </div>
                  <h4 className="font-black text-slate-800 tracking-tight">{report.title}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Última atualização: 2h atrás</p>
                  <button 
                    onClick={() => alert(`Iniciando download de: ${report.file}`)}
                    className="mt-6 w-full py-3 bg-slate-50 text-slate-600 rounded-xl text-xs font-black hover:bg-slate-900 hover:text-white transition-all border border-slate-100 uppercase tracking-widest"
                  >
                    Download PDF
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-indigo-600 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                <Sparkles size={180} />
              </div>
              <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-black tracking-tight">LogiSmart Insight AI</h3>
                <p className="mt-4 text-indigo-100 font-medium leading-relaxed">
                  Estamos processando 1.2M de pontos de dados para sua próxima previsão trimestral. Deseja receber um resumo executivo por IA no seu email?
                </p>
                <button 
                  onClick={() => alert('Sucesso! Você receberá os insights semanais da IA no email cadastrado.')}
                  className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-sm hover:shadow-xl transition-all active:scale-95 uppercase tracking-widest"
                >
                  Ativar Insights IA
                </button>
              </div>
            </div>
          </div>
        );
      default: return <Dashboard onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-1 ml-64 overflow-y-auto overflow-x-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200/50">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Sistemas OK</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-500">
              <Globe size={14} className="text-blue-500" />
              <span>RS Operações Centrais</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden xl:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input 
                placeholder="Pesquisar ativos, rotas ou alertas..." 
                className="pl-12 pr-4 py-2.5 bg-slate-100/50 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500/50 w-80 transition-all font-medium" 
                onKeyDown={(e) => e.key === 'Enter' && alert(`Buscando por: ${(e.target as HTMLInputElement).value}`)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all relative"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
              </button>
              <button 
                onClick={() => alert('Iniciando chat com o suporte especializado...')}
                className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
              >
                <MessageSquare size={20} />
              </button>
            </div>

            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

            <div className="flex items-center space-x-3 pl-2">
              <div className="text-right hidden sm:block">
                <button onClick={() => setActiveView(ViewType.PROFILE)} className="text-sm font-black text-slate-800 leading-none hover:text-blue-600 transition-colors block w-full text-right">
                  Admin LogiSmart
                </button>
                <button onClick={() => setActiveView(ViewType.AUDIT)} className="text-[10px] text-slate-400 uppercase tracking-tighter mt-1 font-black hover:text-indigo-600 transition-colors">
                  Ver Logs de Auditoria
                </button>
              </div>
              <button onClick={() => setActiveView(ViewType.PROFILE)} className="relative group">
                <div className="w-10 h-10 bg-slate-200 rounded-2xl border-2 border-white shadow-md overflow-hidden ring-2 ring-blue-50 group-hover:ring-blue-100 transition-all">
                  <img src="https://picsum.photos/seed/admin-logismart/100" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></div>
              </button>
            </div>
          </div>
        </header>

        {showNotifications && (
          <div className="absolute top-20 right-8 w-80 bg-white rounded-3xl border border-slate-200 shadow-2xl z-50 p-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-slate-800 uppercase tracking-widest text-xs">Notificações</h3>
              <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-slate-600"><X size={16} /></button>
            </div>
            <div className="space-y-4">
              <div onClick={() => { setActiveView(ViewType.FLEET); setShowNotifications(false); }} className="p-3 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
                <p className="text-xs font-bold text-blue-800">Nova Viagem Criada</p>
                <p className="text-[10px] text-blue-600">A operação TR-104 foi registrada com sucesso.</p>
              </div>
              <div onClick={() => { setActiveView(ViewType.RISKS); setShowNotifications(false); }} className="p-3 bg-rose-50 rounded-xl border border-rose-100 cursor-pointer hover:bg-rose-100 transition-colors">
                <p className="text-xs font-bold text-rose-800">Risco Climático Detectado</p>
                <p className="text-[10px] text-rose-600">Possível alagamento na BR-116 em 2h.</p>
              </div>
              <button onClick={() => setShowNotifications(false)} className="w-full py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Limpar Tudo</button>
            </div>
          </div>
        )}

        <div className="p-8 pb-20">
          {renderContent()}
        </div>

        <button 
          onClick={() => setActiveView(ViewType.NEW_OPERATION)}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-slate-900 text-white p-5 rounded-3xl shadow-2xl flex items-center space-x-3 hover:scale-105 active:scale-95 transition-all">
            <Sparkles className="animate-pulse text-blue-400" size={24} />
            <span className="text-sm font-bold pr-2">Nova Operação</span>
          </div>
        </button>
      </main>
    </div>
  );
};

export default App;
