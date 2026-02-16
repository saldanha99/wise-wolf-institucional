import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = React.memo(() => {
    return (
        <footer className="glass border-t border-white/5 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="inline-block mb-4">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Wise Wolf" className="h-12 w-auto object-contain" />
                            <span className="text-white font-display font-bold text-xl">WISE WOLF</span>
                        </div>
                    </Link>
                    <p className="mt-2 text-sm max-w-sm leading-relaxed text-slate-400">
                        Forjando habilidades de comunicação executiva para o líder global moderno.
                        Experimente a precisão da metodologia americana.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Navegação</h4>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left">Metodologia</button></li>
                        <li><button onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left">Por que Wise Wolf?</button></li>
                        <li><button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left">Depoimentos</button></li>
                        <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left">Agendar Mentoria</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                        <li><a href="https://system.wisewolflanguage.com.br" className="hover:text-white transition-colors">Área do Aluno</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between">
                <p>&copy; {new Date().getFullYear()} Wise Wolf Academy. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
});

export default Footer;