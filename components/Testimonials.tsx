import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn, Testimonial } from './ui/TestimonialsColumn';

const testimonials: Testimonial[] = [
    {
        text: "Em 3 meses de Wise Wolf, consegui minha promoção regional. A simulação de board meetings foi crucial.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
        name: "Mariana Costa",
        role: "Head de Marketing @ Ambev",
    },
    {
        text: "Não é cursinho de inglês. É treinamento de alta performance. O foco em negociação mudou meu jogo.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
        name: "Carlos Mendes",
        role: "Diretor de TI @ Embraer",
    },
    {
        text: "A flexibilidade do 1:1 me permitiu estudar entre reuniões. Eficiência pura para quem não tem tempo.",
        image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?q=80&w=200&auto=format&fit=crop",
        name: "Dra. Juliana Paiva",
        role: "Medical Manager @ Novo Nordisk",
    },
    {
        text: "Os mentores entendem o mundo corporativo real. Vocabulário cirúrgico para minha área de finanças.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        name: "Roberto Almeida",
        role: "CFO @ Tupy",
    },
    {
        text: "Perdi o medo de leads internacionais. Hoje fecho contratos em dólar com a mesma confiança que em real.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        name: "Fernanda Lima",
        role: "Sales Executive @ Lilly",
    },
    {
        text: "A metodologia direto ao ponto corta a gordura gramatical e vai para o que interessa: comunicação.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
        name: "André Silva",
        role: "Gerente de Projetos @ Ambev",
    },
    {
        text: "Material de Harvard e TechCrunch nas aulas. Finalmente um curso que trata o aluno como adulto.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        name: "Ricardo Oliveira",
        role: "Senior Eng. Manager",
    },
    {
        text: "O feedback imediato sobre pronúncia tirou meu sotaque carregado. Me sinto global agora.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        name: "Patricia Santos",
        role: "VP de Operações @ Embraer",
    },
    {
        text: "Investimento com retorno garantido. Minha comunicação executiva é outra após 6 meses.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
        name: "Lucas Ferreira",
        role: "Product Owner",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-navy-900 py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16 text-center"
                >
                    <div className="glass inline-block py-1 px-4 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider mb-5">
                        Depoimentos Reais
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        O que nossos <span className="text-brand-blue">alunos</span> dizem
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Histórias de quem transformou a carreira dominando o inglês executivo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[800px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={40} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={50} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={35} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
