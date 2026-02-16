import React from 'react';
import { motion } from 'framer-motion';

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

interface TestimonialsColumnProps {
    testimonials: Testimonial[];
    duration?: number;
    className?: string;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
    testimonials,
    duration = 40,
    className = '',
}) => {
    return (
        <div className={`${className}`}>
            <motion.div
                animate={{ translateY: '-50%' }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                        key={index}
                        className="glass-card rounded-2xl p-6"
                    >
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full object-cover border border-slate-600"
                            />
                            <div>
                                <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                                <p className="text-slate-500 text-xs">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
