import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, BookOpen, Users, FileText, ClipboardCheck } from 'lucide-react';

const navItems = [
    { name: 'Início', url: '/', icon: Home },
    { name: 'Cursos', url: '/cursos/criancas', icon: BookOpen },
    { name: 'Sobre Nós', url: '/sobre', icon: Users },
    { name: 'Conteúdos', url: '/blog', icon: FileText },
    { name: 'Teste de Nível', url: '/teste-nivel', icon: ClipboardCheck },
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeTab = navItems.find(item => item.url === location.pathname)?.name || navItems[0].name;

    return (
        <>
            {/* ... (Top Bar remains unchanged) ... */}
            <motion.nav
                initial={false}
                animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 left-0 right-0 z-50 py-5 ${isScrolled ? 'pointer-events-none' : ''}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src="/logo.png"
                            alt="Wise Wolf"
                            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Início</Link>
                        <Link to="/sobre" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sobre Nós</Link>

                        {/* Dropdown Cursos */}
                        <div className="relative group">
                            <button className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors flex items-center gap-1 py-4">
                                Cursos
                            </button>
                            <div className="absolute top-full left-0 w-48 bg-navy-900 border border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                                <Link to="/cursos/criancas" className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white border-b border-slate-800">
                                    Para Crianças
                                </Link>
                                <Link to="/cursos/business" className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white border-b border-slate-800">
                                    Para Reuniões
                                </Link>
                                <Link to="/cursos/viagens" className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                                    Para Viagens
                                </Link>
                            </div>
                        </div>

                        <Link to="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Conteúdos</Link>
                        <Link to="/teste-nivel" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Teste de Nível</Link>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/5511999999999?text=Quero+agendar+minha+aula+experimental"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-brand-red/90 hover:bg-brand-red text-white text-sm font-bold tracking-wide rounded-xl transition-all shadow-lg shadow-brand-red/20 transform hover:-translate-y-0.5 backdrop-blur-sm border border-brand-red/50"
                        >
                            AGENDAR AULA
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-slate-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass-strong absolute w-full left-0 top-full">
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.url}
                                    className="block text-slate-300 font-medium hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a href="https://system.wisewolflanguage.com.br" target="_blank" rel="noopener noreferrer" className="block text-slate-400 text-sm font-medium mt-4 pt-4 border-t border-white/10">
                                Área do Aluno
                            </a>
                        </div>
                    </div>
                )}
            </motion.nav>

            {/* ===== TUBELIGHT FLOATING NAV (visible on scroll) ===== */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: -30, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -30, x: "-50%" }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed top-0 left-1/2 z-50 pt-6"
                    >
                        <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.1] backdrop-blur-2xl py-2 px-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] relative">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeTab === item.name;

                                // Handle "Cursos" separately to add dropdown
                                if (item.name === 'Cursos') {
                                    return (
                                        <div key={item.name} className="relative group">
                                            <button
                                                className={`relative cursor-pointer text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors whitespace-nowrap flex items-center gap-1 ${isActive
                                                    ? 'text-brand-blue'
                                                    : 'text-slate-400 hover:text-white'
                                                    }`}
                                            >
                                                <span className="hidden md:inline relative z-10">{item.name}</span>
                                                <span className="md:hidden relative z-10">
                                                    <Icon size={18} strokeWidth={2.5} />
                                                </span>
                                            </button>

                                            {/* Floating Menu Dropdown */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-navy-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden text-left z-50 transform origin-top scale-95 group-hover:scale-100">
                                                <Link to="/cursos/criancas" className="block px-4 py-3 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white border-b border-white/5">
                                                    Para Crianças
                                                </Link>
                                                <Link to="/cursos/business" className="block px-4 py-3 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white border-b border-white/5">
                                                    Para Reuniões
                                                </Link>
                                                <Link to="/cursos/viagens" className="block px-4 py-3 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white">
                                                    Para Viagens
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.url}
                                        className={`relative cursor-pointer text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors whitespace-nowrap ${isActive
                                            ? 'text-brand-blue'
                                            : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        <span className="hidden md:inline relative z-10">{item.name}</span>
                                        <span className="md:hidden relative z-10">
                                            <Icon size={18} strokeWidth={2.5} />
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="tubelight"
                                                className="absolute inset-0 w-full bg-brand-blue/[0.08] rounded-full -z-0"
                                                initial={false}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            >
                                                {/* Tubelight glow on top */}
                                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-blue rounded-t-full">
                                                    <div className="absolute w-12 h-6 bg-brand-blue/20 rounded-full blur-md -top-2 -left-2" />
                                                    <div className="absolute w-8 h-6 bg-brand-blue/20 rounded-full blur-md -top-1" />
                                                    <div className="absolute w-4 h-4 bg-brand-blue/20 rounded-full blur-sm top-0 left-2" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </Link>
                                );
                            })}

                            {/* Divider + Área do Aluno */}
                            <div className="hidden md:flex items-center gap-3 ml-2">
                                <div className="w-px h-6 bg-white/10" />
                                <a
                                    href="https://system.wisewolflanguage.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-brand-red/80 hover:bg-brand-red text-white text-[10px] md:text-xs font-bold tracking-wide rounded-full transition-all border border-brand-red/40 backdrop-blur-sm whitespace-nowrap"
                                >
                                    ÁREA DO ALUNO
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;