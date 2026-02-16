import React from 'react';
import Navbar from '../components/Navbar';
import Methodology from '../components/Methodology';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Award, Calendar } from 'lucide-react';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { cn } from '../lib/utils';
import Footer from '../components/Footer';

const Courses: React.FC = () => {
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

            <main className="pt-24 relative z-10">
                {/* Header Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Mentoria <span className="text-brand-blue">Executive 1:1</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        O programa definitivo para executivos que precisam dominar o inglês para ontem.
                        Personalização total, sem turmas, direto ao ponto.
                    </p>
                </section>

                {/* The Journey / Timeline */}
                <section className="py-20 glass border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">Sua Jornada de Evolução</h2>
                            <p className="text-slate-400">Do diagnóstico à fluência executiva em 4 etapas.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-700/50 -z-10"></div>

                            {[
                                { icon: <Target className="w-6 h-6" />, title: "1. Diagnóstico", desc: "Mapeamento 360º das suas lacunas técnicas e objetivos de carreira." },
                                { icon: <TrendingUp className="w-6 h-6" />, title: "2. Estratégia", desc: "Design do seu plano de estudos personalizado focado no seu ROI." },
                                { icon: <Calendar className="w-6 h-6" />, title: "3. Execução", desc: "Aulas de alta performance com simulações de reuniões reais." },
                                { icon: <Award className="w-6 h-6" />, title: "4. Domínio", desc: "Certificação e preparação contínua para novos desafios globais." }
                            ].map((step, i) => (
                                <div key={i} className="relative flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 rounded-full bg-navy-900 border-2 border-slate-700 flex items-center justify-center text-brand-blue mb-6 shadow-xl group-hover:border-brand-blue transition-colors z-10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-brand-blue/10 scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Existing Methodology */}
                <Methodology />

                {/* Investment Plans */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Investimento Estratégico</h2>
                        <p className="text-slate-400">Escolha o ritmo ideal para o seu momento profissional.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="glass-card rounded-2xl p-8">
                            <h3 className="text-lg font-bold text-white mb-2">Sprint</h3>
                            <p className="text-4xl font-display font-bold text-white mb-6">3 Meses</p>
                            <p className="text-slate-400 text-sm mb-8">Para objetivos urgentes: preparação para entrevistas ou apresentações específicas.</p>
                            <ul className="space-y-3 mb-8 text-sm text-slate-300">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Foco total em 1 objetivo</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> 2h semanais</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Material Sprint</li>
                            </ul>
                            <button className="w-full py-3 border border-slate-600 rounded-lg text-white font-bold hover:bg-white/5 transition-colors">Consultar Valor</button>
                        </div>

                        {/* Plan 2 (Featured) */}
                        <div className="glass-strong rounded-2xl p-8 relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MAIS ESCOLHIDO</div>
                            <h3 className="text-lg font-bold text-white mb-2">Executive</h3>
                            <p className="text-4xl font-display font-bold text-white mb-6">6 Meses</p>
                            <p className="text-slate-400 text-sm mb-8">O programa padrão para atingir fluência operacional e confiança em reuniões.</p>
                            <ul className="space-y-3 mb-8 text-sm text-slate-300">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Plano de Carreira Completo</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> 3h semanais (Recomendado)</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Acesso à Plataforma Gamificada</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Networking de Elite</li>
                            </ul>
                            <button className="w-full py-3 bg-brand-red rounded-lg text-white font-bold hover:bg-brand-redHover transition-colors shadow-lg shadow-brand-red/20">Agendar Entrevista</button>
                        </div>

                        {/* Plan 3 */}
                        <div className="glass-card rounded-2xl p-8">
                            <h3 className="text-lg font-bold text-white mb-2">Master</h3>
                            <p className="text-4xl font-display font-bold text-white mb-6">12 Meses</p>
                            <p className="text-slate-400 text-sm mb-8">Transformação total. De intermediário a negociador global.</p>
                            <ul className="space-y-3 mb-8 text-sm text-slate-300">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Fluência Nativa</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Horários Premium Flexíveis</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Imersão Cultural</li>
                            </ul>
                            <button className="w-full py-3 border border-slate-600 rounded-lg text-white font-bold hover:bg-white/5 transition-colors">Consultar Valor</button>
                        </div>
                    </div>
                </section>

                {/* CTA Footer */}
                <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-red relative overflow-hidden">
                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl font-display font-bold text-white mb-8">Não sabe qual o ideal para você?</h2>
                        <button className="px-10 py-4 bg-white text-brand-blue font-bold text-lg rounded shadow-xl hover:bg-slate-100 transition-all transform hover:scale-105 inline-flex items-center gap-2">
                            FAZER TESTE DE NÍVEL GRATUITO
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Courses;
