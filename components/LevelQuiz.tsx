import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, LeadData, QuizPhase, QuizLevel } from '../types';
import { Check, ChevronRight, Lock, Clock, Send, ShieldCheck, Loader2 } from 'lucide-react';
import { EmbeddedLeadForm } from './ui/EmbeddedLeadForm';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const tenantId = import.meta.env.VITE_TENANT_ID || 'wise-wolf-school';
const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Questions stay in English as it is an English test
const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which sentence is grammatically correct?",
    options: [
      "I have been working here since 3 years.",
      "I have been working here for 3 years.",
      "I am working here since 3 years.",
      "I work here for 3 years."
    ],
    correctIndex: 1
  },
  {
    id: 2,
    text: "Complete the sentence: 'If I _____ more time, I would travel the world.'",
    options: [
      "have",
      "had",
      "would have",
      "have had"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    text: "Select the best synonym for 'Ubiquitous':",
    options: [
      "Rare",
      "Expensive",
      "Omnipresent",
      "Delicious"
    ],
    correctIndex: 2
  },
  {
    id: 4,
    text: "The meeting has been ______ until next Tuesday.",
    options: [
      "put off",
      "put out",
      "put away",
      "put up"
    ],
    correctIndex: 0
  },
  {
    id: 5,
    text: "He is the manager ______ I spoke yesterday.",
    options: [
      "who",
      "that",
      "to whom",
      "which"
    ],
    correctIndex: 2
  }
];

const LevelQuiz: React.FC = () => {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [lead, setLead] = useState<LeadData>({ name: '', email: '', phone: '' });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = () => setPhase('question');

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    // Delay to show selection
    setTimeout(() => {
      if (index === QUESTIONS[currentQ].correctIndex) {
        setScore(s => s + 1);
      }

      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(c => c + 1);
        setSelectedOption(null);
      } else {
        setPhase('capture');
      }
    }, 400);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (supabase) {
      try {
        const { error } = await supabase
          .from('crm_leads')
          .insert([{
            tenant_id: tenantId,
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            goal: 'Placement Test Result',
            source: 'level_quiz',
            status: 'NEW',
            notes: `Placement score: ${score}/${QUESTIONS.length}`
          }]);

        if (error) throw error;
      } catch (err) {
        console.error("Error saving quiz lead:", err);
      }
    } else {
      console.log("Supabase missing. Simulating lead capture:", lead, "Score:", score);
    }

    setIsSubmitting(false);
    setPhase('result');
  };

  const calculateLevel = (): QuizLevel => {
    const percentage = (score / QUESTIONS.length) * 100;
    if (percentage <= 20) return QuizLevel.A1;
    if (percentage <= 40) return QuizLevel.A2;
    if (percentage <= 60) return QuizLevel.B1;
    if (percentage <= 80) return QuizLevel.B2;
    return QuizLevel.C1;
  };

  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 min-h-[550px] flex flex-col relative">

      {/* Header Bar */}
      {phase !== 'intro' && phase !== 'result' && (
        <div className="w-full h-2 bg-slate-900/50">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-red to-red-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
        <AnimatePresence mode="wait">

          {/* INTRO PHASE */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-8 ring-1 ring-brand-red/30">
                <Clock className="text-brand-red" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Smart Placement Test</h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Descubra sua verdadeira proficiência em inglês profissional em menos de 2 minutos.
                Nosso algoritmo adaptativo analisa gramática, vocabulário e uso situacional.
              </p>
              <ul className="text-left text-sm text-slate-300 space-y-4 mb-10 max-w-xs mx-auto bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> Resultados Instantâneos</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> Plano de Ação Gratuito</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-green-400" /> Sem Compromisso</li>
              </ul>
              <button
                onClick={handleStart}
                className="w-full py-4 bg-brand-red hover:bg-brand-redHover text-white font-bold text-lg rounded shadow-xl hover:shadow-red-900/20 transition-all transform hover:scale-[1.02]"
              >
                INICIAR AVALIAÇÃO
              </button>
            </motion.div>
          )}

          {/* QUESTION PHASE */}
          {phase === 'question' && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-4 block">
                Questão {currentQ + 1} de {QUESTIONS.length}
              </span>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-10 leading-snug">
                {QUESTIONS[currentQ].text}
              </h3>
              <div className="space-y-4">
                {QUESTIONS[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group flex items-center justify-between text-lg
                      ${selectedOption === idx
                        ? 'bg-brand-red border-brand-red text-white shadow-lg scale-[1.02]'
                        : 'bg-slate-700/30 border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:border-slate-500 hover:pl-6'}`}
                  >
                    <span>{opt}</span>
                    <ChevronRight size={20} className={`opacity-0 group-hover:opacity-100 transition-opacity ${selectedOption === idx ? 'opacity-100' : ''}`} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* LEAD CAPTURE PHASE */}
          {phase === 'capture' && (
            <motion.div
              key="capture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 ring-1 ring-green-500/30">
                <Lock className="text-green-500" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Análise Completa</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Para desbloquear sua pontuação CEFR e baixar seu plano de estudos personalizado, confirme onde devemos enviá-lo.
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-5 text-left max-w-md mx-auto">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Nome Completo</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-900/80 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder="Seu nome"
                    value={lead.name}
                    onChange={e => setLead({ ...lead, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Seu melhor e-mail</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-900/80 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder="seu@email.com"
                    value={lead.email}
                    onChange={e => setLead({ ...lead, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">WhatsApp (com DDD)</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-slate-900/80 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder="(11) 99999-9999"
                    value={lead.phone}
                    onChange={e => setLead({ ...lead, phone: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-red hover:bg-brand-redHover text-white font-bold text-lg rounded shadow-lg mt-6 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>REVELAR MEUS RESULTADOS <Send size={18} /></>
                  )}
                </button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-xs">
                <ShieldCheck size={12} />
                <span>Seus dados estão 100% seguros.</span>
              </div>
            </motion.div>
          )}

          {/* RESULT PHASE */}
          {phase === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h3 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-4">Seu Nível Estimado</h3>
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl mb-8">
                <div className="text-6xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 mb-2">
                  {calculateLevel().split(' - ')[0]}
                </div>
                <p className="text-xl text-white font-medium">
                  {calculateLevel().split(' - ')[1]}
                </p>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-6 mb-8 text-left border border-slate-600/50">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-brand-red rounded-full"></span>
                  Caminho Recomendado:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Com base na sua pontuação, você está pronto para o nosso <strong>Executive Fluency Accelerator</strong>.
                  Áreas de foco sugeridas: Sintaxe avançada e Vocabulário de Negociação Estratégica.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="mt-4 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-bold text-white mb-2">Agende sua aula experimental gratuita</h4>
                  <p className="text-slate-400 text-sm mb-4">Trace seu plano de evolução personalizado com um mentor Wise Wolf.</p>
                  <EmbeddedLeadForm />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default LevelQuiz;