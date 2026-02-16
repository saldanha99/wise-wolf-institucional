import React from 'react';
import Navbar from '../components/Navbar';
import LevelQuiz from '../components/LevelQuiz';
import Footer from '../components/Footer';

const QuizPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 flex flex-col items-center justify-center relative">
        {/* Ambient background for quiz page */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-10 blur-sm"
            alt="Study background"
          />
          <div className="absolute inset-0 bg-navy-900/80"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl mix-blend-screen" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Centro de Avaliação</h1>
            <p className="text-slate-400 text-lg">Preciso. Rápido. Profissional.</p>
          </div>
          <LevelQuiz />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;