
import React, { useState } from 'react';
import { Truck, User, Package, MapPin, Calendar, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { MOCK_VEHICLES, MOCK_DRIVERS } from '../constants';
import { ViewType } from '../types';

interface OperationFormProps {
  onNavigate: (view: ViewType) => void;
}

const OperationForm: React.FC<OperationFormProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula a validação da IA e salvamento no banco (Supabase)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      // Retorna ao dashboard após sucesso
      setTimeout(() => {
        onNavigate(ViewType.DASHBOARD);
      }, 1500);
    }, 2000);
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-3xl border border-slate-200 shadow-2xl text-center animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <Sparkles size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Operação Registrada!</h2>
        <p className="text-slate-500 mt-2">A IA validou a rota e o despacho foi enviado ao motorista.</p>
        <div className="mt-8 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 animate-progress"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-300">
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
            <Package size={120} className="rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black tracking-tight">Nova Operação Logística</h2>
            <p className="text-slate-400 mt-2">Cadastre uma nova jornada e receba análise de risco automática.</p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Seção 1: Carga e Veículo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                <Package size={14} className="mr-2" /> Identificação da Carga
              </h3>
              <input 
                required
                placeholder="Ex: Lote de Fertilizantes 2023-A"
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none font-bold text-slate-700 transition-all"
              />
              <div className="grid grid-cols-2 gap-4">
                <input required type="number" placeholder="Peso (kg)" className="px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
                <input required type="number" placeholder="Volume (m³)" className="px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                <Truck size={14} className="mr-2" /> Veículo Designado
              </h3>
              <select required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none font-bold text-slate-700 transition-all appearance-none cursor-pointer">
                <option value="">Selecione da Frota Ativa...</option>
                {MOCK_VEHICLES.filter(v => v.status === 'active').map(v => (
                  <option key={v.id} value={v.id}>{v.plate} - {v.model}</option>
                ))}
              </select>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-[10px] text-emerald-700 font-bold">Apenas veículos com manutenção em dia estão listados.</p>
              </div>
            </div>
          </div>

          {/* Seção 2: Equipe e Rota */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                <User size={14} className="mr-2" /> Motorista Responsável
              </h3>
              <select required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold text-slate-700 transition-all appearance-none cursor-pointer">
                <option value="">Consultar Disponibilidade...</option>
                {MOCK_DRIVERS.filter(d => d.status === 'available').map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                <Calendar size={14} className="mr-2" /> Programação
              </h3>
              <input required type="datetime-local" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold text-slate-700" />
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-indigo-600">
              <Sparkles size={18} className={isSubmitting ? 'animate-spin' : 'animate-pulse'} />
              <span className="text-sm font-bold">A IA LogiSmart validará esta rota após o salvamento.</span>
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <button 
                type="button"
                onClick={() => onNavigate(ViewType.DASHBOARD)}
                className="flex-1 md:flex-none px-8 py-4 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition-all"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex-1 md:flex-none bg-blue-600 text-white px-10 py-4 rounded-2xl font-black flex items-center justify-center space-x-3 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-95 disabled:bg-blue-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Validando IA...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmar & Despachar</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OperationForm;
