import React, { useState } from 'react';
import { useTraining } from '../../contexts/TrainingContext';
import NeonButton from '../ui/NeonButton';

const QuizQuestion = () => {
    const { currentQuiz, submitQuizAnswer } = useTraining();

    if (!currentQuiz) return null;

    return (
        <div className="border-2 border-matrix-green/80 bg-matrix-green/5 p-6 rounded-lg animate-in zoom-in duration-500 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-matrix-green text-matrix-dark px-2 py-0.5 text-[10px] font-bold uppercase">Formation Flash</span>
                <span className="text-matrix-green/60 text-[10px] uppercase font-mono tracking-widest">{currentQuiz.category}</span>
            </div>

            <h3 className="text-lg font-bold mb-6 text-matrix-green matrix-text-glow leading-tight">
                {currentQuiz.question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuiz.options.map((option, idx) => (
                    <NeonButton
                        key={idx}
                        onClick={() => submitQuizAnswer(idx)}
                        className="text-left text-sm py-3 px-4 justify-start lowercase font-mono"
                    >
                        <span className="mr-2 opacity-50">[{idx + 1}]</span>
                        {option}
                    </NeonButton>
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-matrix-green/20 text-[10px] text-matrix-green/40 uppercase tracking-tighter">
                Attention : Une réponse correcte libère le savoir de l'agence.
            </div>
        </div>
    );
};

export default QuizQuestion;
