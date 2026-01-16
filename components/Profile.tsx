
import React from 'react';
import { User, Mail, Shield, MapPin, Activity, Calendar, Camera } from 'lucide-react';

const Profile: React.FC = () => {
  const handleEditProfile = () => {
    alert("Funcionalidade de edição de perfil: Em breve você poderá alterar sua foto, nome e dados de contato diretamente por aqui.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
        <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
          <div className="absolute inset-0 bg-white/5 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="px-10 pb-10 relative">
          <div className="flex flex-col md:flex-row md:items-end -mt-20 md:space-x-8">
            <div className="relative group">
              <div className="w-40 h-40 bg-white rounded-3xl border-4 border-white shadow-2xl overflow-hidden ring-4 ring-slate-100">
                <img src="https://picsum.photos/seed/admin-logismart/400" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <button 
                onClick={handleEditProfile}
                className="absolute bottom-2 right-2 bg-slate-900 text-white p-2.5 rounded-xl shadow-lg hover:scale-110 active:scale-95 transition-all group-hover:bg-blue-600"
                title="Editar Foto"
              >
                <Camera size={18} />
              </button>
            </div>
            
            <div className="mt-6 md:mb-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tight">Admin LogiSmart</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <Shield size={14} className="mr-1 text-blue-500" /> Gestor Estratégico
                    </span>
                    <span className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <MapPin size={14} className="mr-1 text-red-500" /> Porto Alegre, BR
                    </span>
                  </div>
                </div>
                <button 
                  onClick={handleEditProfile}
                  className="mt-4 md:mt-0 bg-white border border-slate-200 px-6 py-2 rounded-xl text-sm font-black text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
                >
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="text-slate-400" size={20} />
                <h4 className="text-sm font-black text-slate-700 uppercase tracking-widest">Contato</h4>
              </div>
              <p className="text-sm font-bold text-slate-600">admin@logismart.enterprise</p>
              <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tight">Email verificado em 01/2023</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="text-slate-400" size={20} />
                <h4 className="text-sm font-black text-slate-700 uppercase tracking-widest">Atividade</h4>
              </div>
              <p className="text-sm font-bold text-slate-600">128 Operações Criadas</p>
              <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tight">Membro desde Janeiro 2023</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-slate-400" size={20} />
                <h4 className="text-sm font-black text-slate-700 uppercase tracking-widest">Programação</h4>
              </div>
              <p className="text-sm font-bold text-slate-600">8 Viagens Planejadas</p>
              <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tight">Próximo check-point em 2h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
