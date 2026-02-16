import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const tenantId = import.meta.env.VITE_TENANT_ID || 'wise-wolf';
const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const EmbeddedLeadForm: React.FC = () => {
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
                    source: 'institutional_site',
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

    if (status === 'success') {
        return (
            <div className="text-center py-12 glass-strong rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Recebemos seu contato!</h3>
                <p className="text-slate-400 text-sm mb-6">Em breve um de nossos consultores entrará em contato via WhatsApp.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-red underline hover:text-white text-sm"
                >
                    Enviar outro contato
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 glass-strong p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Aula Experimental Gratuita</h3>
                <p className="text-slate-300 font-light text-xs">Preencha para agendar sua experiência exclusiva.</p>
            </div>

            {status === 'error' && (
                <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle size={14} />
                    {errorMessage}
                </div>
            )}

            <div>
                <input
                    required
                    type="text"
                    className="glass-input w-full rounded-lg p-3 text-white outline-none text-sm font-light placeholder-slate-400"
                    placeholder="Nome Completo"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div>
                <input
                    required
                    type="email"
                    className="glass-input w-full rounded-lg p-3 text-white outline-none text-sm font-light placeholder-slate-400"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            <div>
                <input
                    required
                    type="tel"
                    className="glass-input w-full rounded-lg p-3 text-white outline-none text-sm font-light placeholder-slate-400"
                    placeholder="WhatsApp (com DDD)"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
            </div>

            <div>
                <select
                    className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-3 text-white text-sm font-light focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all appearance-none placeholder-slate-400"
                    value={formData.objective}
                    onChange={e => setFormData({ ...formData, objective: e.target.value })}
                >
                    <option value="" disabled className="text-slate-500">Selecione seu objetivo</option>
                    <option value="Viagem a Negócios">Viagem Internacional a Negócios</option>
                    <option value="Entrevista de Emprego">Preparação para Entrevista</option>
                    <option value="Fluência Geral">Melhorar Fluência e Confiança</option>
                    <option value="Inglês Técnico">Inglês Técnico (TI, Med, Finanças)</option>
                    <option value="Reunião Empresarial">Reunião Empresarial (B2B)</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 bg-brand-red hover:bg-brand-redHover text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-red/20 transform active:scale-95 flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
            >
                {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={18} />
                ) : (
                    <>QUERO MINHA AULA GRÁTIS <Send size={16} /></>
                )}
            </button>
            <p className="text-center text-[10px] text-slate-500 mt-2 font-light">Seus dados estão protegidos.</p>
        </form>
    );
};
