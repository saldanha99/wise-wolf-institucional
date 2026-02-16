import React from 'react';
import Navbar from '../components/Navbar';
import { Shield, Target, Award, Users, Globe, BookOpen } from 'lucide-react';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { cn } from '../lib/utils';
import Footer from '../components/Footer';
import { EmbeddedLeadForm } from '../components/ui/EmbeddedLeadForm';

const About: React.FC = () => {
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
                {/* Hero */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Sobre a <span className="text-brand-blue">Wise Wolf</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        Nascemos da frustração com escolas de inglês que tratam executivos como crianças.
                        Nossa missão é entregar resultados de alto nível com eficiência de tempo.
                    </p>
                </section>

                {/* Stats Section */}
                <section className="glass border-y border-white/5 py-12">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-blue mb-2">500+</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                                <Users size={16} /> Executivos
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-blue mb-2">15</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                                <Globe size={16} /> Países
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-blue mb-2">10k+</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                                <BookOpen size={16} /> Aulas Dadas
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-bold text-brand-blue mb-2">98%</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                                <Award size={16} /> Aprovação
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Manifesto */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <div className="glass-strong p-10 md:p-16 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                        <h2 className="text-3xl font-display font-bold text-white mb-8">Nossa Filosofia</h2>
                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                            <p>
                                Acreditamos que o tempo é o ativo mais precioso de um líder. Por isso, abominamos a enrolação pedagógica.
                            </p>
                            <p>
                                <strong className="text-white font-bold">1. Respeito Intelectual:</strong> Você não precisa aprender as cores ou os animais. Você precisa negociar contratos e liderar times.
                            </p>
                            <p>
                                <strong className="text-white font-bold">2. Realidade Crua:</strong> O inglês dos livros não é o inglês da sala de reunião. Ensinamos o idioma que fecha negócios, com seus sotaques, gírias corporativas e nuances culturais.
                            </p>
                            <p>
                                <strong className="text-white font-bold">3. Parceria Real:</strong> Não somos apenas professores. Somos parceiros estratégicos na sua ascensão profissional. Quando você é promovido, nós comemoramos como se fosse nossa vitória.
                            </p>
                        </div>
                        <div className="mt-12 pt-8 border-t border-slate-700/50 flex items-center justify-between">
                            <div>
                                <p className="text-brand-blue font-display font-bold text-xl">The Wise Wolf Team</p>
                                <p className="text-slate-500 text-sm">São Paulo • Global</p>
                            </div>
                            {/* Signature or visual element could go here */}
                        </div>
                    </div>
                </section>

                {/* Existing Values Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white">Nossos Pilares</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-xl">
                            <Shield className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Compromisso</h3>
                            <p className="text-slate-400">Não vendemos sonhos, vendemos competência comunicativa para o mundo real.</p>
                        </div>
                        <div className="glass-card p-8 rounded-xl">
                            <Target className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Precisão</h3>
                            <p className="text-slate-400">Ensino focado nas suas lacunas específicas, sem desperdício de tempo com o que você já sabe.</p>
                        </div>
                        <div className="glass-card p-8 rounded-xl">
                            <Award className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Excelência</h3>
                            <p className="text-slate-400">Nossos mentores respiram o ambiente corporativo e falam a sua língua de negócios.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-navy-900 border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Pronto para transformar sua comunicação?
                        </h2>
                        <p className="text-slate-400 mb-8 text-lg">Agende sua aula experimental gratuita e conheça a metodologia Wise Wolf.</p>
                        <div className="glass p-1 rounded-2xl inline-block w-full max-w-md mx-auto">
                            <EmbeddedLeadForm />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
