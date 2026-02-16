import React from 'react';
import Navbar from '../components/Navbar';
import { CheckCircle2, Mic, Brain, PenTool, Layout } from 'lucide-react';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { cn } from '../lib/utils';
import Footer from '../components/Footer';

const LevelTest: React.FC = () => {
    return (
        <div className="min-h-screen bg-navy-900 font-sans text-slate-200 selection:bg-brand-red selection:text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <AnimatedGridPattern
                    numSquares={60}
                    maxOpacity={0.05}
                    duration={4}
                    repeatDelay={0.5}
                    className={cn(
                        "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-10%] h-[150%] skew-y-12 opacity-50",
                    )}
                />
            </div>

            <Navbar />

            <main className="pt-24 min-h-[calc(100vh-80px)] flex flex-col justify-center relative z-10">
                <section className="px-4 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

                    <div className="flex-1">
                        <div className="glass inline-flex items-center gap-2 px-3 py-1 rounded-full text-brand-blue text-xs font-bold mb-6 uppercase tracking-wider">
                            Avaliação Gratuita
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            Descubra seu <br /><span className="text-brand-blue">Nível Real</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                            Este não é um teste de gramática comum. Avaliamos sua competência comunicativa em cenários de alta pressão corporativa.
                        </p>

                        {/* Criteria Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="glass-card p-5 rounded-xl">
                                <Mic className="text-brand-blue mb-3" size={24} />
                                <h4 className="text-white font-bold mb-1">Speaking Tático</h4>
                                <p className="text-xs text-slate-400">Capacidade de argumentar e persuadir, não apenas formar frases.</p>
                            </div>
                            <div className="glass-card p-5 rounded-xl">
                                <Brain className="text-brand-blue mb-3" size={24} />
                                <h4 className="text-white font-bold mb-1">Agilidade Cognitiva</h4>
                                <p className="text-xs text-slate-400">Velocidade de resposta em perguntas complexas ou inesperadas.</p>
                            </div>
                            <div className="glass-card p-5 rounded-xl">
                                <Layout className="text-brand-blue mb-3" size={24} />
                                <h4 className="text-white font-bold mb-1">Vocabulário Técnico</h4>
                                <p className="text-xs text-slate-400">Domínio da terminologia da sua indústria (Finanças, Tech, Agro, etc).</p>
                            </div>
                            <div className="glass-card p-5 rounded-xl">
                                <PenTool className="text-brand-blue mb-3" size={24} />
                                <h4 className="text-white font-bold mb-1">Estrutura Executiva</h4>
                                <p className="text-xs text-slate-400">Clareza, concisão e formalidade adequada ao contexto.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md mx-auto lg:ml-auto glass-strong p-8 rounded-3xl relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Solicitar Avaliação</h3>
                        <p className="text-slate-400 text-sm mb-8 relative z-10">Um consultor sênior entrará em contato para agendar sua entrevista de nivelamento (15 min via Zoom).</p>

                        <form className="space-y-4 relative z-10">
                            <div>
                                <label className="text-xs text-slate-400 font-bold uppercase ml-1 mb-1 block">Nome Completo</label>
                                <input type="text" className="glass-input w-full rounded-lg px-4 py-3 text-white outline-none placeholder-slate-600" placeholder="Ex: João Silva" />
                            </div>
                            <div>
                                <label className="text-xs text-slate-400 font-bold uppercase ml-1 mb-1 block">E-mail Corporativo</label>
                                <input type="email" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder-slate-600" placeholder="joao@empresa.com" />
                            </div>
                            <div>
                                <label className="text-xs text-slate-400 font-bold uppercase ml-1 mb-1 block">Cargo Atual</label>
                                <input type="text" className="glass-input w-full rounded-lg px-4 py-3 text-white outline-none placeholder-slate-600" placeholder="Ex: Diretor Comercial" />
                            </div>

                            <div className="pt-2">
                                <button className="w-full py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-brand-redHover transition-all shadow-lg shadow-brand-red/20 transform active:scale-95">
                                    AGENDAR AGORA
                                </button>
                                <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                                    <CheckCircle2 size={12} /> Seus dados estão seguros.
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LevelTest;
