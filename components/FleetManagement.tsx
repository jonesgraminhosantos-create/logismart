
import React, { useState } from 'react';
import { MOCK_VEHICLES, MOCK_DRIVERS } from '../constants';
import { Search, Filter, Plus, MoreVertical, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { ViewType } from '../types';

interface FleetManagementProps {
  onNavigate?: (view: ViewType) => void;
}

const FleetManagement: React.FC<FleetManagementProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddAsset = (type: 'veículo' | 'motorista') => {
    const name = prompt(`Digite o nome/placa do novo ${type}:`);
    if (name) alert(`${type.charAt(0).toUpperCase() + type.slice(1)} "${name}" adicionado com sucesso e aguardando ativação.`);
  };

  const handleAction = (id: string, type: string) => {
    alert(`Abrindo painel de gestão detalhada para o ${type} ID: ${id}. Aqui você pode editar documentos, rastrear manutenção e ver histórico.`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Gestão de Ativos Operacionais</h2>
          <p className="text-slate-500 text-sm font-medium">Controle centralizado de frota e condutores habilitados.</p>
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar placa ou nome..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none w-full md:w-64 transition-all font-medium" 
            />
          </div>
          <button 
            onClick={() => handleAddAsset('veículo')}
            className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"
            title="Adicionar Veículo"
          >
            <Plus size={22} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vehicles Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-black text-slate-700 uppercase tracking-tight text-sm">Frota (Veículos)</h3>
            <button onClick={() => alert('Filtros avançados de frota: em desenvolvimento para v1.1')} className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"><Filter size={18} /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white border-b border-slate-100">
                <tr className="text-slate-400">
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Identificação</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Modelo</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_VEHICLES.filter(v => v.plate.toUpperCase().includes(searchTerm.toUpperCase())).map(v => (
                  <tr key={v.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${v.status === 'active' ? 'bg-emerald-500' : v.status === 'maintenance' ? 'bg-rose-500' : 'bg-slate-300'}`}></div>
                        <span className="font-black text-slate-700 tracking-tight">{v.plate}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{v.model}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        v.status === 'active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                        v.status === 'maintenance' ? 'bg-rose-50 text-rose-700 border border-rose-100' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {v.status === 'active' ? 'Operacional' : v.status === 'maintenance' ? 'Em Reparo' : 'Ocioso'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => handleAction(v.id, 'Veículo')} className="text-slate-300 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drivers Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-black text-slate-700 uppercase tracking-tight text-sm">Equipe (Condutores)</h3>
            <button onClick={() => alert('Filtros avançados de condutores: em desenvolvimento')} className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"><Filter size={18} /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white border-b border-slate-100">
                <tr className="text-slate-400">
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Nome Completo</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">CNH</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_DRIVERS.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase())).map(d => (
                  <tr key={d.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${d.id}/100`} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-black text-slate-700 tracking-tight">{d.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{d.license}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        d.status === 'available' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                        d.status === 'on-trip' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {d.status === 'available' ? 'Disponível' : d.status === 'on-trip' ? 'Em Rota' : 'Descanso'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => handleAction(d.id, 'Motorista')} className="text-slate-300 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;
