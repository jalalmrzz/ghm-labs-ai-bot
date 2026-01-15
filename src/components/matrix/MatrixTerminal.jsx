import React, { useState, useRef, useEffect } from 'react';
import { useTraining } from '../../contexts/TrainingContext';
import { sendMessageToBot } from '../../lib/api/ghmBotAPI';
import NeonButton from '../ui/NeonButton';
import ChatWindow from '../chatbot/ChatWindow';
import QuizQuestion from '../chatbot/QuizQuestion';
import { playClick } from '../ui/SoundEffects';

const MatrixTerminal = () => {
    const { messages, setMessages, currentQuiz, triggerQuiz, stats } = useTraining();
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, currentQuiz]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMessage = input.trim();
        setInput('');
        playClick();
        const newMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);

        setIsTyping(true);

        // Command handling
        if (userMessage.toLowerCase() === '/quiz') {
            triggerQuiz();
            setIsTyping(false);
            return;
        }

        const response = await sendMessageToBot(newMessages);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsTyping(false);

        // Random quiz trigger (1/5 chance after an interaction)
        if (Math.random() > 0.8 && !currentQuiz) {
            setTimeout(triggerQuiz, 2000);
        }
    };

    return (
        <div className="relative z-10 w-full max-w-4xl mx-auto h-[80vh] flex flex-col bg-matrix-dark/80 border border-matrix-green/30 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden p-1">
            {/* Terminal Header */}
            <div className="bg-matrix-green/10 p-2 flex justify-between items-center border-b border-matrix-green/30 px-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs uppercase tracking-widest text-matrix-green flex items-center gap-4">
                    <span>{stats.correctAnswers}/{stats.totalQuestions} SAVOIR</span>
                    <span className="opacity-50">AGENT GHM_KENITRA</span>
                </div>
            </div>

            {/* Main content */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-matrix-green scrollbar-track-transparent"
            >
                <ChatWindow messages={messages} />
                {currentQuiz && <QuizQuestion />}
                {isTyping && (
                    <div className="flex gap-2 items-center text-matrix-green animate-pulse">
                        <span className="text-xs">Bot analyse la matrice...</span>
                    </div>
                )}
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-matrix-green/30 flex gap-4">
                <div className="flex-1 relative flex items-center">
                    <span className="absolute left-3 text-matrix-green">{'>'}</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={currentQuiz}
                        placeholder={currentQuiz ? "Réponds au quiz d'abord..." : "Tape /quiz ou discute avec le tuteur..."}
                        className="w-full bg-transparent border border-matrix-green/50 p-2 pl-8 text-matrix-green focus:outline-none focus:border-matrix-green shadow-[inset_0_0_5px_rgba(0,255,0,0.2)] disabled:opacity-30 transition-all"
                    />
                </div>
                <NeonButton active type="submit" disabled={currentQuiz || !input.trim()}>
                    ENVOYER
                </NeonButton>
            </form>
        </div>
    );
};

export default MatrixTerminal;
