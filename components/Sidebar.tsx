
import React from 'react';
import { LayoutDashboard, Truck, MapPin, AlertTriangle, FileText, Settings, LogOut, History } from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: ViewType.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: ViewType.PLANNER, label: 'Planejador', icon: MapPin },
    { id: ViewType.FLEET, label: 'Frota & Motoristas', icon: Truck },
    { id: ViewType.RISKS, label: 'Monitor de Risco', icon: AlertTriangle },
    { id: ViewType.REPORTS, label: 'Relatórios', icon: FileText },
    { id: ViewType.AUDIT, label: 'Log de Auditoria', icon: History },
  ];

  const handleLogout = () => {
    if (confirm("Deseja realmente encerrar sua sessão no LogiSmart Enterprise?")) {
      window.location.reload();
    }
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0 z-50 shadow-2xl border-r border-slate-800">
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tight text-white flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3 flex items-center justify-center">
            <span className="text-white text-xs">L</span>
          </div>
          Logi<span className="text-blue-500">Smart</span>
        </h1>
        <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em] mt-2">Enterprise SaaS v1.0</p>
      </div>

      <nav className="flex-1 mt-4 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20 translate-x-1' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 3 : 2} />
              <span className={`text-sm ${isActive ? 'font-black' : 'font-bold'}`}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-800 space-y-1 bg-slate-900/50">
        <button 
          onClick={() => setActiveView(ViewType.SETTINGS)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
            activeView === ViewType.SETTINGS ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'
          }`}
        >
          <Settings size={18} />
          <span className="text-sm font-bold">Configurações</span>
        </button>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 text-rose-500/80 hover:text-rose-400 hover:bg-rose-500/5 rounded-xl transition-all"
        >
          <LogOut size={18} />
          <span className="text-sm font-bold">Encerrar Sessão</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
