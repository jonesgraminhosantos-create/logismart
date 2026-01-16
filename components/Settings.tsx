
import React, { useState } from 'react';
import { Settings as SettingsIcon, CreditCard, Bell, Building, ShieldCheck, Save, Loader2, CheckCircle2 } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'billing' | 'notifications'>('general');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cardLast4, setCardLast4] = useState('4242');

  const handleSave = () => {
    setIsSaving(true);
    // Simulação de salvamento em banco de dados
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const handleChangeCard = () => {
    const newDigits = Math.floor(1000 + Math.random() * 9000).toString();
    if (confirm(`Deseja simular a troca do cartão para o final ${newDigits}?`)) {
      setCardLast4(newDigits);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Configurações do Sistema</h2>
          <p className="text-slate-500 text-sm">Gerencie as preferências da sua organização LogiSmart.</p>
        </div>
        {showSuccess && (
          <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Alterações Salvas</span>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Tabs Sidebar */}
        <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('general')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'general' ? 'bg-white text-blue-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <Building size={18} />
            <span>Empresa & Conta</span>
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'billing' ? 'bg-white text-blue-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <CreditCard size={18} />
            <span>Faturamento & Plano</span>
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'notifications' ? 'bg-white text-blue-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <Bell size={18} />
            <span>Notificações & IA</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {activeTab === 'general' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Nome Fantasia</label>
                  <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" defaultValue="Logística Nacional Sul LTDA" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">CNPJ / Identificação Fiscal</label>
                  <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" defaultValue="00.000.000/0001-91" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Fuso Horário Operacional</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer">
                    <option>(GMT-03:00) Brasília / São Paulo</option>
                    <option>(GMT-04:00) Manaus</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Plano Atual</p>
                    <h3 className="text-2xl font-black mt-1">Enterprise Pro</h3>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">ATIVO</span>
                </div>
                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <p className="text-blue-100 text-[10px] uppercase font-bold">Próximo faturamento</p>
                    <p className="font-bold">12 de Outubro, 2023</p>
                  </div>
                  <p className="text-2xl font-black">R$ 1.250<span className="text-sm font-normal">/mês</span></p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800">Método de Pagamento</h4>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-lg border border-slate-100">
                      <CreditCard className="text-slate-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">•••• •••• •••• {cardLast4}</p>
                      <p className="text-[10px] text-slate-400 font-bold">Expira em 12/28</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleChangeCard}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Alterar
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="space-y-4">
                {[
                  { title: "Alertas Climáticos em Tempo Real", desc: "Notificar gestores sobre riscos de inundação e ventos no RS.", checked: true },
                  { title: "Relatórios de SLA por E-mail", desc: "Enviar resumo semanal de eficiência de rotas.", checked: true },
                  { title: "Sugestões de IA Antecipadas", desc: "IA sugere desvios antes mesmo do início da viagem.", checked: false }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div onClick={(e) => {
                      const checkbox = (e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement);
                      if(checkbox) checkbox.checked = !checkbox.checked;
                    }}>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked={item.checked} className="w-5 h-5 accent-blue-600 cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-slate-800 transition-all shadow-lg active:scale-95 disabled:bg-slate-400"
            >
              {isSaving ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Salvando...</span>
                </>
              ) : (
                <>
                  <Save size={18} />
                  <span>Salvar Alterações</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
