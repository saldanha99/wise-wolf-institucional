import React, { useState, Suspense } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';


// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const tenantId = import.meta.env.VITE_TENANT_ID || 'wise-wolf-school';
const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Lazy load the heavy 3D background
// const AnimatedShaderBackground = React.lazy(() => import('./ui/animated-shader-background'));

const LeadForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        objective: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        if (!supabase) {
            // Fallback for demo mode without keys
            console.warn("Supabase keys missing. Simulating success.");
            setTimeout(() => setStatus('success'), 2000);
            return;
        }

        try {
            const { error } = await supabase
                .from('crm_leads')
                .insert([{
                    tenant_id: tenantId,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    goal: formData.objective,
                    source: 'institutional_site_home',
                    status: 'NEW'
                }]);

            if (error) throw error;
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', objective: '' });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setErrorMessage('Erro ao enviar. Tente novamente ou contate via WhatsApp.');
            setStatus('error');
        }
    };


    // ... (previous imports)

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
            {/* Background Decorative */}
            {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/3 skew-x-12 transform origin-top-right pointer-events-none backdrop-blur-3xl" /> */}

            {/* Meteor Shader Background - Removed for performance */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none bg-slate-900/20" />



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">

                {/* Copy Side */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        A primeira aula é <br /><span className="text-brand-blue">por nossa conta.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Não pedimos seu cartão de crédito. Queremos que você sinta na pele a metodologia Wise Wolf antes de tomar qualquer decisão.
                    </p>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex items-center gap-3">
                            <CheckCircle className="text-brand-blue" size={20} />
                            <span>Análise de perfil profissional</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="text-brand-blue" size={20} />
                            <span>Aula prática de 30min (Onboarding)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="text-brand-blue" size={20} />
                            <span>Roadmap de estudos personalizado</span>
                        </li>
                    </ul>
                </div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 w-full glass-strong p-8 rounded-2xl"
                >
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={40} className="text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Recebemos seu contato!</h3>
                            <p className="text-slate-400">Em breve um de nossos consultores entrará em contato via WhatsApp para agendar sua aula.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-brand-red underline hover:text-white"
                            >
                                Enviar outro contato
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {status === 'error' && (
                                <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
                                    <AlertCircle size={16} />
                                    {errorMessage}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Nome Completo</label>
                                <input
                                    required
                                    type="text"
                                    className="glass-input w-full rounded-lg p-3 text-white outline-none"
                                    placeholder="Ex: João da Silva"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Email Corporativo</label>
                                    <input
                                        required
                                        type="email"
                                        className="glass-input w-full rounded-lg p-3 text-white outline-none"
                                        placeholder="joao@empresa.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">WhatsApp</label>
                                    <input
                                        required
                                        type="tel"
                                        className="glass-input w-full rounded-lg p-3 text-white outline-none"
                                        placeholder="(11) 99999-9999"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Objetivo Principal</label>
                                <select
                                    className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all appearance-none"
                                    value={formData.objective}
                                    onChange={e => setFormData({ ...formData, objective: e.target.value })}
                                >
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="Viagem a Negócios">Viagem Internacional a Negócios</option>
                                    <option value="Entrevista de Emprego">Preparação para Entrevista</option>
                                    <option value="Fluência Geral">Melhorar Fluência e Confiança</option>
                                    <option value="Inglês Técnico">Inglês Técnico (TI, Med, Finanças)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-brand-red/90 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-brand-red transition-all shadow-lg shadow-brand-red/20 transform active:scale-95 border border-brand-red/50 flex items-center justify-center gap-2 hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <>AGENDAR AGORA <Send size={18} /></>
                                )}
                            </button>
                            <p className="text-center text-xs text-slate-500">Seus dados estão seguros conosco.</p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default LeadForm;
