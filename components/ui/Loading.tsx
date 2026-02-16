import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-navy-900 flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="text-white animate-pulse" size={24} />
                    </div>
                </div>
                <p className="text-slate-400 text-sm tracking-wider animate-pulse">CARREGANDO...</p>
            </div>
        </div>
    );
};

export default Loading;
