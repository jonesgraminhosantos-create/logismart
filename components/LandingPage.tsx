
import React from 'react';
import { Truck, ShieldAlert, Zap, BarChart3, Globe, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Sparkles, Navigation } from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3 flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white text-xs font-black">L</span>
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            Logi<span className="text-blue-600">Smart</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-500">
          <a href="#solucao" className="hover:text-blue-600 transition-colors">Solução</a>
          <a href="#beneficios" className="hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#demo" className="hover:text-blue-600 transition-colors">Demonstração</a>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onEnterApp}
            className="hidden sm:block text-sm font-black text-slate-600 hover:text-blue-600 transition-all px-4 py-2"
          >
            Entrar
          </button>
          <a 
            href="#contato"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
          >
            Falar com Especialista
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              <Sparkles size={14} className="text-blue-600" />
              <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Enterprise Logistics AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Logística Dinâmica com <span className="text-blue-600">Inteligência Preditiva.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              Antecipe riscos climáticos, otimize rotas em tempo real e reduza custos operacionais com a plataforma B2B líder em resiliência logística no RS.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contato"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100 flex items-center justify-center active:scale-95"
              >
                Solicitar Demonstração <ArrowRight className="ml-2" size={20} />
              </a>
              <button 
                onClick={onEnterApp}
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center active:scale-95"
              >
                Conhecer o Sistema
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/user${i}/100`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-slate-400">
                <span className="text-slate-900">+50 grandes indústrias</span> já operam com LogiSmart
              </p>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right-8 duration-1000">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-10 animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden group">
              <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-[16/10] shadow-inner relative">
                {/* Mock Dashboard Illustration */}
                <div className="absolute top-0 left-0 w-full h-full p-6 space-y-4 opacity-80 group-hover:scale-105 transition-transform duration-700">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="w-24 h-4 bg-slate-800 rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-slate-800 rounded-xl p-3">
                      <div className="w-8 h-8 bg-blue-600/20 rounded flex items-center justify-center">
                        <Zap className="text-blue-500" size={14} />
                      </div>
                      <div className="mt-2 w-full h-2 bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-20 bg-slate-800 rounded-xl p-3">
                      <div className="w-8 h-8 bg-emerald-600/20 rounded flex items-center justify-center">
                        <BarChart3 className="text-emerald-500" size={14} />
                      </div>
                      <div className="mt-2 w-full h-2 bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-20 bg-slate-800 rounded-xl p-3">
                      <div className="w-8 h-8 bg-rose-600/20 rounded flex items-center justify-center">
                        <ShieldAlert className="text-rose-500" size={14} />
                      </div>
                      <div className="mt-2 w-full h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="h-40 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
                    <Navigation className="text-slate-700" size={60} strokeWidth={1} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Live Operations</p>
                    <p className="text-white font-bold">Monitoramento BR-116</p>
                  </div>
                  <div className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-black text-white">ESTÁVEL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="solucao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
            <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">O Desafio Logístico</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              O custo da incerteza operacional é alto demais para sua indústria.
            </p>
            <p className="text-lg text-slate-500 font-medium">
              Atrasos por clima, falta de visibilidade da frota e incidentes inesperados destroem sua margem. O LogiSmart resolve isso com dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Risco Climático RS", 
                desc: "Monitoramento em tempo real das bacias hidrográficas e condições severas exclusivas da nossa região.",
                icon: ShieldAlert,
                color: "text-rose-600",
                bg: "bg-rose-50"
              },
              { 
                title: "Recálculo Ativo", 
                desc: "IA que desvia frotas de zonas de perigo ou congestionamentos antes mesmo do motorista notar o problema.",
                icon: Zap,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              { 
                title: "Visibilidade Total", 
                desc: "Dashboard executivo que consolida telemetria, clima e SLAs em uma única tela de comando.",
                icon: BarChart3,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em]">Performance Enterprise</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Resultados mensuráveis para o seu supply chain.
            </p>
            <div className="space-y-6">
              {[
                { label: "Redução em custos operacionais", value: "-22%" },
                { label: "Aumento na precisão de entrega (ETA)", value: "+35%" },
                { label: "Conformidade e Segurança (ESG)", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-black text-blue-400">{stat.value}</div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-12 rounded-[40px] shadow-2xl relative">
              <ShieldCheck className="absolute -top-6 -right-6 text-white bg-blue-600 p-4 rounded-3xl shadow-xl" size={80} strokeWidth={1} />
              <blockquote className="text-2xl font-bold leading-relaxed italic">
                "O LogiSmart transformou nossa operação no RS. Pela primeira vez, conseguimos prever os impactos das chuvas nas rotas de escoamento e redirecionar a frota sem perder o prazo do cliente final."
              </blockquote>
              <div className="mt-8 flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-white/20 overflow-hidden border-2 border-white/30">
                  <img src="https://picsum.photos/seed/director/100" alt="Diretor de Logística" />
                </div>
                <div>
                  <p className="font-black">Ricardo Mendes</p>
                  <p className="text-sm text-blue-200 font-medium">Diretor de Operações | Indústria Gauchão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div className="max-w-xl space-y-4">
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Quem atendemos</h2>
              <p className="text-4xl font-black text-slate-900 tracking-tighter">Preparado para qualquer escala industrial.</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <div className="w-4 h-1 bg-slate-100 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Distribuidoras", "Indústria Pesada", "Varejo B2B", "Operadores Logísticos"].map((type, i) => (
              <div key={i} className="p-8 border border-slate-100 rounded-3xl text-center bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all cursor-default">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm mx-auto mb-4 flex items-center justify-center">
                  <Globe className="text-slate-400" size={24} />
                </div>
                <p className="font-black text-slate-800 uppercase tracking-widest text-[10px]">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section / Lead Gen */}
      <section id="contato" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 bg-slate-900 text-white space-y-10">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">Agende uma demonstração personalizada.</h2>
              <p className="text-lg text-slate-400 font-medium">
                Nossos especialistas apresentarão como o LogiSmart pode ser integrado ao seu TMS/ERP atual para elevar sua resiliência.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold">comercial@logismart.com.br</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold">0800-LOGI-SMART</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bold">Distrito Industrial, Porto Alegre - RS</span>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-20 space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nome Completo</label>
                <input className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all font-bold" placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">E-mail Corporativo</label>
                <input className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all font-bold" placeholder="exemplo@suaempresa.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tamanho da Frota</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all font-bold cursor-pointer appearance-none">
                  <option>Até 50 veículos</option>
                  <option>51 a 200 veículos</option>
                  <option>Acima de 200 veículos</option>
                </select>
              </div>
              <button 
                onClick={() => alert('Obrigado! Um especialista entrará em contato em menos de 24h.')}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100 active:scale-95"
              >
                Enviar Solicitação
              </button>
              <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                Proteção de dados garantida (LGPD Compliance)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3 flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-white text-xs font-black">L</span>
                </div>
                <span className="text-xl font-black tracking-tight text-slate-900">
                  Logi<span className="text-blue-600">Smart</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                Plataforma SaaS líder em inteligência logística para o sul do Brasil. Tecnologia de ponta para indústrias que não podem parar.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Produto</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">IA LogiSmart</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Segurança de Dados</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Empresa</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Políticas</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2023 LogiSmart Enterprise SaaS. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {/* Social icons placeholders */}
              <div className="w-5 h-5 bg-slate-100 rounded"></div>
              <div className="w-5 h-5 bg-slate-100 rounded"></div>
              <div className="w-5 h-5 bg-slate-100 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
