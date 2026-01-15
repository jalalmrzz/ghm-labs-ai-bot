import React, { createContext, useContext, useState, useEffect } from 'react';
import { marketingQuestions } from '../lib/quiz/questions';
import { playSuccess, playError } from '../components/ui/SoundEffects';

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: `Initialisation du système GHM... Bienvenue dans la Matrice de formation. Je suis ton tuteur. Comment puis-je t'aider aujourd'hui ?` }
    ]);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [stats, setStats] = useState({
        totalQuestions: 0,
        correctAnswers: 0,
        lastCategory: null
    });

    const triggerQuiz = () => {
        const randomQuestion = marketingQuestions[Math.floor(Math.random() * marketingQuestions.length)];
        setCurrentQuiz(randomQuestion);
    };

    const submitQuizAnswer = (answerIdx) => {
        if (!currentQuiz) return;

        const isCorrect = answerIdx === currentQuiz.answer;

        if (isCorrect) playSuccess();
        else playError();

        setStats(prev => ({
            ...prev,
            totalQuestions: prev.totalQuestions + 1,
            correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
            lastCategory: currentQuiz.category
        }));

        const response = isCorrect
            ? `✅ Bravo ! ${currentQuiz.explanation}`
            : `❌ Presque ! La bonne réponse était l'option ${currentQuiz.answer + 1}. ${currentQuiz.explanation}`;

        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setCurrentQuiz(null);
    };

    return (
        <TrainingContext.Provider value={{
            messages,
            setMessages,
            currentQuiz,
            triggerQuiz,
            submitQuizAnswer,
            stats
        }}>
            {children}
        </TrainingContext.Provider>
    );
};

export const useTraining = () => useContext(TrainingContext);
