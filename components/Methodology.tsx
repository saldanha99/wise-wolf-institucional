import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, MessageCircle, Zap, Globe, Video, Users } from 'lucide-react';
import { GlowCard } from './ui/spotlight-card';

const Methodology: React.FC = () => {
    const pillars = [
        {
            icon: <MessageCircle size={32} />,
            title: "Conversação Ativa",
            description: "Esqueça gramática isolada. Aqui você fala desde o primeiro dia, simulando situações reais do seu cotidiano profissional.",
            image: "/logos/pillar-active-conversation.png"
        },
        {
            icon: <Brain size={32} />,
            title: "Aprendizado Cognitivo",
            description: "Método baseado em como o cérebro realmente aprende idiomas: associação, contexto e repetição espaçada inteligente.",
            image: "/logos/pillar-cognitive-learning.png"
        },
        {
            icon: <Zap size={32} />,
            title: "Material Gamificado",
            description: "Plataforma interativa que torna o dever de casa viciante. Acompanhe seu progresso em tempo real.",
            image: "/logos/pillar-gamified.png"
        },
        {
            icon: <Globe size={32} />,
            title: "Imersão Global",
            description: "Conteúdo autêntico (notícias, vídeos, artigos) para você entender não só a língua, mas a cultura.",
            image: "/logos/pillar-global-immersion.png"
        }
    ];

    const mentorImages = [
        "/logos/grok-image-32b21dea-7e7c-4720-86da-b3bede916be8.png",
        "/logos/c1e9f1a7-b82d-46e2-90f7-eb8d49ad715a.jpg",
        "/logos/grok-image-fa43e3c9-ee9c-4186-a531-9afee48dcc08.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mentorImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="methodology" className="py-24 bg-navy-900 relative border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Mentor Highlight Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Image Side - Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden glass-strong group h-[600px] w-full"
                    >
                        <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>

                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentImageIndex}
                                src={mentorImages[currentImageIndex]}
                                alt={`Mentor Wise Wolf ${currentImageIndex + 1}`}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-navy-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 z-20 shadow-xl">
                            <div className="glass rounded-lg inline-flex items-center gap-3 px-4 py-2 text-sm font-medium text-white">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                <div>
                                    <p className="text-white text-xs font-bold uppercase tracking-wide">Mentoria Executiva</p>
                                    <p className="text-slate-400 text-[10px] mt-0.5">Networking & Business</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass inline-flex items-center gap-2 px-3 py-1 rounded-full text-brand-blue text-xs font-bold mb-6 uppercase tracking-wider border border-brand-blue/20">
                            <Video size={14} /> Metodologia Imersiva
                        </div>
                        <h2 className="text-4xl font-display font-bold text-white mb-6">
                            Mentores, não apenas Professores.
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                            Esqueça as aulas gravadas monótonas. Na Wise Wolf, você interage com especialistas que entendem seu mercado. Nossas aulas simulam board meetings reais, com feedback instantâneo e correções de postura vocal.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-white flex-shrink-0 border border-slate-700 group-hover:border-brand-blue/50 transition-colors">
                                    <Globe size={20} className="text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Conexão Global</h4>
                                    <p className="text-sm text-slate-400 font-light">Interaja com professores nativos de diversos centros comerciais (NY, Londres, Singapura).</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-white flex-shrink-0 border border-slate-700 group-hover:border-brand-blue/50 transition-colors">
                                    <Users size={20} className="text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Personalização Total</h4>
                                    <p className="text-sm text-slate-400 font-light">Ensino 100% particular adaptado à sua agenda e objetivos. Sem turmas, sem distrações.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Pillars Grid */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                            Os Pilares do <span className="text-brand-blue">Wolf Method</span>
                        </h3>
                    </motion.div>
                </div>


                {/* ... (inside component) */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <GlowCard
                                className="h-full p-0 group hover:border-brand-blue/50 transition-all duration-500 overflow-hidden relative"
                                glowColor="blue"
                                customSize={true}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={pillar.image}
                                        alt={pillar.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/40 group-hover:via-navy-900/60 transition-colors duration-500" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full p-8">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-blue-light mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">{pillar.title}</h3>
                                    <p className="text-slate-300 leading-relaxed text-sm font-light drop-shadow-sm">
                                        {pillar.description}
                                    </p>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
