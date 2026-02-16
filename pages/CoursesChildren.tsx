import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Users, Brain, Rocket, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EmbeddedLeadForm } from '../components/ui/EmbeddedLeadForm';

const CoursesChildren: React.FC = () => {
    return (
        <div className="min-h-screen bg-navy-900 text-white selection:bg-brand-blue selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                        alt="Crianças aprendendo inglês de forma divertida"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
                    >
                        <Heart className="text-brand-red w-4 h-4" />
                        <span className="text-sm font-medium text-slate-200">Inglês para o Futuro</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
                    >
                        Wise Wolf <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Kids</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12"
                    >
                        Metodologia lúdica e imersiva para despertar o amor pelo inglês desde cedo. Prepare seu filho para ser um cidadão global.
                    </motion.p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-navy-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain className="w-8 h-8 text-brand-blue" />,
                                title: "Neuroplasticidade",
                                desc: "Aproveitamos a melhor fase do cérebro para fixar o idioma naturalmente."
                            },
                            {
                                icon: <Rocket className="w-8 h-8 text-brand-red" />,
                                title: "Aulas Gamificadas",
                                desc: "Aprender brincando com jogos, músicas e histórias interativas."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
                                title: "Ambiente Seguro",
                                desc: "Professores especializados em pedagogia infantil e monitoramento constante."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all"
                            >
                                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-navy-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-display font-bold mb-6">Por que começar cedo?</h2>
                        <div className="space-y-6 text-slate-300">
                            <p>
                                O cérebro infantil é como uma esponja. Na Wise Wolf, utilizamos essa capacidade natural de absorção para introduzir o inglês não como uma matéria escolar, mas como uma ferramenta de comunicação viva.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Pronúncia nativa facilitada",
                                    "Desenvolvimento cognitivo superior",
                                    "Maior facilidade em outras disciplinas",
                                    "Autoconfiança e habilidades sociais"
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden glass-strong p-2">
                            <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1587&auto=format&fit=crop"
                                alt="Criança estudando feliz"
                                className="rounded-xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-navy-900 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                        Garanta o futuro do seu filho hoje
                    </h2>
                    <div className="glass p-1 rounded-2xl inline-block w-full max-w-md mx-auto">
                        <EmbeddedLeadForm />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CoursesChildren;
