import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { AnimatedGridPattern } from './ui/animated-grid-pattern';
import { cn } from '../lib/utils';

const Benefits: React.FC = () => {
    const comparison = [
        {
            feature: "Foco das Aulas",
            wise: "Personalizado (Seus objetivos)",
            others: "Genérico (Livro padrão)"
        },
        {
            feature: "Flexibilidade",
            wise: "Agendamento Dinâmico",
            others: "Horários Fixos e Rígidos"
        },
        {
            feature: "Formato da Aula",
            wise: "100% Particular (Você e o Mentor)",
            others: "Turmas com vários alunos"
        },
        {
            feature: "Material Didático",
            wise: "Interativo e Digital (Incluso)",
            others: "Livros Caros e Desatualizados"
        },
        {
            feature: "Professor",
            wise: "Mentoria de Carreira + Inglês",
            others: "Apenas ensino do idioma"
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-navy-900 relative overflow-hidden">
            <AnimatedGridPattern
                numSquares={40}
                maxOpacity={0.2}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fill-brand-blue/30 stroke-brand-blue/10",
                )}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Por que escolher a <span className="text-brand-blue">Wise Wolf</span>?
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Elevamos o padrão. Compare e veja a diferença de uma educação executiva de verdade.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Comparison Table Side */}
                    <div className="lg:col-span-7 overflow-hidden rounded-2xl glass-strong">
                        <div className="grid grid-cols-3 glass p-6 border-b border-white/5">
                            <div className="col-span-1 text-slate-400 font-bold uppercase text-xs tracking-wider">Critério</div>
                            <div className="col-span-1 text-center font-bold text-brand-blue text-lg">WISE WOLF</div>
                            <div className="col-span-1 text-center text-slate-500 font-medium">Escolas Tradicionais</div>
                        </div>

                        {comparison.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`grid grid-cols-3 p-6 items-center ${index % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent'} border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors`}
                            >
                                <div className="col-span-1 text-slate-200 font-medium text-sm md:text-base">{item.feature}</div>

                                <div className="col-span-1 flex flex-col items-center justify-center text-center">
                                    <div className="flex items-center gap-2 text-white font-bold">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
                                            <Check size={14} className="text-green-500" />
                                        </div>
                                        <span className="text-sm md:text-base">{item.wise}</span>
                                    </div>
                                </div>

                                <div className="col-span-1 flex flex-col items-center justify-center text-center opacity-60">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                                            <X size={14} className="text-red-500" />
                                        </div>
                                        <span className="text-sm md:text-base">{item.others}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Happy People Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative h-full flex flex-col justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden glass-strong">
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop"
                                alt="Pessoas felizes conversando em inglês"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="glass-strong p-6 rounded-xl">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 bg-slate-700 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-white font-bold text-sm">
                                            +2.000 Alunos <br /><span className="text-green-400 font-normal">Satisfeitos</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-sm italic">
                                        "A energia das aulas é contagiante. Finalmente perdi o medo de falar em público."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center lg:text-left">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex py-4 px-8 bg-brand-red/90 backdrop-blur-sm text-white font-bold rounded-xl shadow-lg shadow-brand-red/20 transition-all hover:-translate-y-1 w-full justify-center border border-brand-red/50"
                            >
                                QUERO ESSA EXPERIÊNCIA
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
