import React from 'react';
import Navbar from '../components/Navbar';
import { BookOpen, Calendar, Clock, ArrowRight, Mail } from 'lucide-react';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { cn } from '../lib/utils';
import Footer from '../components/Footer';
import { EmbeddedLeadForm } from '../components/ui/EmbeddedLeadForm';

const Blog: React.FC = () => {
    // Mock Data
    const featuredPost = {
        title: "Como a Cultura Organizacional afeta a Fluência em Inglês",
        excerpt: "Muitos executivos falham não por falta de vocabulário, mas por não entenderem os códigos culturais de empresas globais. Entenda a diferença entre ser direto e ser rude.",
        category: "Liderança",
        date: "05 Fev, 2026",
        readTime: "5 min"
    };

    const posts = [
        {
            title: "Como se preparar para uma apresentação em inglês",
            excerpt: "Dicas práticas para reduzir a ansiedade e garantir clareza na sua fala corporativa.",
            category: "Carreira",
            date: "01 Fev, 2026",
            readTime: "4 min"
        },
        {
            title: "Vocabulário Financeiro Essencial",
            excerpt: "Termos como EBITDA, Revenue, e Fiscal Year explicados para não passar vergonha no call.",
            category: "Finanças",
            date: "28 Jan, 2026",
            readTime: "3 min"
        },
        {
            title: "Inglês para Negociação: Frases Chave",
            excerpt: "Como discordar educadamente e fechar acordos sem parecer agressivo.",
            category: "Negociação",
            date: "20 Jan, 2026",
            readTime: "6 min"
        }
    ];

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

            <main className="pt-24 pb-20 relative z-10">
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-display font-bold text-white mb-4">
                            Executive <span className="text-brand-blue">Insights</span>
                        </h1>
                        <p className="text-xl text-slate-400">Estratégias de comunicação para o mercado global.</p>
                    </div>

                    {/* Featured Post Hero */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                            alt="Featured Post"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="relative z-20 p-8 md:p-16 max-w-3xl">
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="bg-brand-blue text-white px-2 py-1 rounded">{featuredPost.category}</span>
                                <span className="flex items-center gap-1 text-slate-300"><Calendar size={14} /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1 text-slate-300"><Clock size={14} /> {featuredPost.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight group-hover:text-brand-blueLight/90 transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline">
                                LER ARTIGO COMPLETO <ArrowRight size={18} />
                            </span>
                        </div>
                    </div>
                </section>

                {/* Post Grid */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-brand-blue pl-4">Mais Recentes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer flex flex-col h-full">
                                <div className="h-48 bg-slate-700 relative overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                    <BookOpen className="absolute bottom-4 right-4 text-white opacity-20 transform group-hover:scale-125 transition-transform duration-500" size={64} />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-brand-blue text-xs font-bold uppercase tracking-wider">{post.category}</span>
                                        <span className="text-slate-500 text-xs">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blueLight transition-colors">{post.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-700/50">
                                        <Clock size={14} /> {post.readTime} de leitura
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA Lead Form */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Quer colocar essas dicas em prática?
                    </h2>
                    <p className="text-slate-400 mb-8 text-lg">Agende sua aula experimental gratuita e comece a evoluir seu inglês agora.</p>
                    <div className="glass p-1 rounded-2xl inline-block w-full max-w-md mx-auto">
                        <EmbeddedLeadForm />
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <div className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
                        <Mail className="mx-auto text-slate-400 mb-6" size={40} />
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Wise Wolf Monthly Briefing</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Receba uma curadoria mensal de dicas de inglês corporativo, análises de mercado e convites para eventos exclusivos. Sem spam.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="seu@emailcorporativo.com"
                                className="glass-input flex-grow rounded-lg px-4 py-3 text-white placeholder-slate-500 outline-none"
                            />
                            <button className="bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-brand-red/20">
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
