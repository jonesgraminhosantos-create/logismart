
import React, { useState } from 'react';
import { History, Shield, Filter, Search, Download, Trash2 } from 'lucide-react';

const MOCK_LOGS = [
  { id: '1', user: 'Admin LogiSmart', action: 'Aprovação de Rota', target: 'TR-102 (Pelotas)', timestamp: '2023-10-12 14:05', type: 'info' },
  { id: '2', user: 'Motorista João', action: 'Início de Viagem', target: 'Veículo ABC-1234', timestamp: '2023-10-12 13:58', type: 'info' },
  { id: '3', user: 'Sistema IA', action: 'Alerta Gerado', target: 'Bloqueio Climático BR-116', timestamp: '2023-10-12 13:40', type: 'critical' },
  { id: '4', user: 'Analista Maria', action: 'Alteração de Motorista', target: 'TR-101', timestamp: '2023-10-12 13:10', type: 'warning' },
  { id: '5', user: 'Admin LogiSmart', action: 'Login no Sistema', target: 'Sessão Web', timestamp: '2023-10-12 12:45', type: 'info' },
  { id: '6', user: 'Sistema IA', action: 'Recálculo Automático', target: 'TR-104', timestamp: '2023-10-12 12:30', type: 'warning' },
];

const AuditLog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = MOCK_LOGS.filter(log => 
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.target.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportLogs = () => {
    alert("Exportando logs de auditoria em formato CSV para conformidade fiscal.");
  };

  const handleClearLogs = () => {
    if (confirm("ATENÇÃO: Deseja realmente limpar o histórico de auditoria local? Esta ação não pode ser desfeita nos servidores LogiSmart.")) {
      alert("Operação bloqueada: Apenas usuários com nível ROOT podem realizar esta ação.");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center">
            <History className="mr-3 text-blue-600" size={28} />
            Registro de Auditoria Enterprise
          </h2>
          <p className="text-slate-500 text-sm font-medium">Rastreamento de conformidade e ações de usuários em tempo real.</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0 w-full md:w-auto">
          <button 
            onClick={handleExportLogs}
            className="flex-1 md:flex-none bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center uppercase tracking-widest shadow-sm"
          >
            <Download size={14} className="mr-2" /> Exportar CSV
          </button>
          <button 
            onClick={handleClearLogs}
            className="flex-1 md:flex-none border border-rose-100 text-rose-500 px-4 py-2.5 rounded-xl text-xs font-black hover:bg-rose-50 transition-all flex items-center justify-center uppercase tracking-widest"
          >
            <Trash2 size={14} className="mr-2" /> Limpar
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium" 
              placeholder="Pesquisar por usuário, ação ou alvo..." 
            />
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Filter size={14} />
            <span>Filtrado por: Todos os Eventos</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-slate-100">
              <tr className="text-slate-400">
                <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Status</th>
                <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Usuário / Origem</th>
                <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Ação Realizada</th>
                <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Alvo / Objeto</th>
                <th className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">Data e Hora</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredLogs.length > 0 ? filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${
                      log.type === 'critical' ? 'bg-rose-500 animate-pulse' :
                      log.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                    }`}></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase">
                        {log.user.charAt(0)}
                      </div>
                      <span className="font-bold text-slate-700">{log.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${
                      log.type === 'critical' ? 'text-rose-600 bg-rose-50' :
                      log.type === 'warning' ? 'text-amber-600 bg-amber-50' : 'text-blue-600 bg-blue-50'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-500">{log.target}</td>
                  <td className="px-6 py-4 text-slate-400 text-xs font-mono">{log.timestamp}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center justify-center space-y-3 opacity-30">
                      <Search size={48} />
                      <p className="font-black uppercase tracking-[0.2em] text-xs">Nenhum evento corresponde aos critérios</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Exibindo {filteredLogs.length} de {MOCK_LOGS.length} registros
          </span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black hover:bg-slate-50 transition-all shadow-sm">Anterior</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black hover:bg-slate-50 transition-all shadow-sm">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
