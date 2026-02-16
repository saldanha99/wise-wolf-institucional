import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EmbeddedLeadForm } from './ui/EmbeddedLeadForm';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-navy-900 pt-20 pb-12 overflow-hidden">

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src="/grok-video-d537321f-f935-4b43-abb2-5446b61753dd.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay - darker on left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/70 to-navy-900/25" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-blue-200 text-xs font-medium mb-6 uppercase tracking-wider border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                            Aulas Particulares Online
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                            Domine o Inglês com <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blueLight via-brand-blue to-white font-extrabold">
                                Inteligência e Flexibilidade.
                            </span>
                        </h1>

                        <p className="mt-4 text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-xl drop-shadow-lg mb-8">
                            A metodologia definitiva para executivos e líderes que precisam de resultados rápidos.
                            <strong className="text-white font-semibold"> Personalização total</strong>, horários flexíveis e foco no seu business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                                className="glass-button px-8 py-4 text-white font-medium text-base rounded-xl flex items-center gap-2 shadow-lg group hover:bg-white/10 transition-colors"
                            >
                                CONHECER METODOLOGIA
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 max-w-lg">
                            <div className="glass-card rounded-xl py-3 px-3 text-center border-l-2 border-brand-blue">
                                <p className="text-xl font-display font-bold text-white">500+</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-light">Executivos</p>
                            </div>
                            <div className="glass-card rounded-xl py-3 px-3 text-center border-l-2 border-brand-blue">
                                <p className="text-xl font-display font-bold text-white">98%</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-light">Aprovação</p>
                            </div>
                            <div className="glass-card rounded-xl py-3 px-3 text-center border-l-2 border-brand-blue">
                                <p className="text-xl font-display font-bold text-white">15</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-light">Países</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Blob behind form - Reduced opacity/blur for cleaner look */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-red/20 rounded-2xl opacity-10 blur-xl" />

                        <div className="relative z-10">
                            <EmbeddedLeadForm />
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Hero;