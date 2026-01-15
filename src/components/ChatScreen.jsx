import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    ArrowLeft,
    Send,
    Bot,
    User,
    ChevronDown,
    PlusCircle,
    Download
} from 'lucide-react';
import { sendMessageToBot } from '../lib/api/ghmBotAPI';
import { questions } from '../data/questions';

const TypewriterText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        setDisplayedText('');
        setIsComplete(false);
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
                setIsComplete(true);
                if (onComplete) onComplete();
            }
        }, 20); // Slightly faster for long scenarios

        return () => clearInterval(timer);
    }, [text, onComplete]);

    // Function to parse special tags for color
    const renderContent = (content) => {
        // Split by lines first to handle full-line coloring for choices
        const lines = content.split('\n');

        return lines.map((line, lineIdx) => {
            let lineClass = '';
            // Robust check for lines starting with A), A., [A], [A)] etc.
            const trimmed = line.trim();
            const upper = trimmed.toUpperCase();

            if (upper.match(/^\[?A[\]).]/)) lineClass = 'choice-row-a';
            else if (upper.match(/^\[?B[\]).]/)) lineClass = 'choice-row-b';
            else if (upper.match(/^\[?C[\]).]/)) lineClass = 'choice-row-c';
            else if (upper.match(/^\[?D[\]).]/)) lineClass = 'choice-row-d';

            // Special check for [SCÉNARIO] or [MISSION] lines to color the whole line if desired, 
            // or we rely on the tags inside. Let's keep relying on tags inside for flexibility.

            const parts = line.split(/(\[.*?\])/g);
            const renderedLine = parts.map((part, i) => {
                if (part.startsWith('[') && part.endsWith(']')) {
                    const tag = part.slice(1, -1).toUpperCase();
                    let className = '';
                    if (['IMPORTANT', 'CONFLICT', 'DANGER', 'ALERTE', 'URGENT', 'ECHEC'].includes(tag)) className = 'tag-important';
                    else if (['MISSION', 'START', 'DEBUT', 'RISQUE'].includes(tag)) className = 'tag-urgent';
                    else if (['SCÉNARIO', 'CLIENT'].includes(tag)) className = 'tag-scenario';
                    else if (['OPTION', 'CHOIX', 'PACKAGE'].includes(tag)) className = 'tag-option';
                    else if (['BRAVO', 'SUCCESS', 'VALIDE', 'ASTUCE', 'CONSEIL'].includes(tag)) className = 'tag-success';
                    else if (['LIEU', 'CONTEXTE'].includes(tag)) className = 'highlight-blue';
                    else if (['CIBLE', 'PROSPECT'].includes(tag)) className = 'highlight-yellow';
                    else if (tag === 'A' || tag === 'A)') className = 'choice-a';
                    else if (tag === 'B' || tag === 'B)') className = 'choice-b';
                    else if (tag === 'C' || tag === 'C)') className = 'choice-c';
                    else if (tag === 'D' || tag === 'D)') className = 'choice-d';

                    return <span key={i} className={className || 'highlight'}>{part}</span>;
                }

                // Highlight specific keywords in the text (outside of tags)
                // We split by a larger set of keywords
                const words = part.split(/(\bSITE WEB\b|\bWEB\b|\bADS\b|\bGOOGLE\b|\bMETA\b|\bSEO\b|\bGHM\b|\bDIGITAL\b|\bMARKETING\b|\bCLIENT\b|\bLEAD\b|\bVENTE\b)/gi);
                return words.map((word, j) => {
                    const upperWord = word.toUpperCase();
                    if (['SITE WEB', 'WEB', 'DIGITAL', 'CLIENT', 'LEAD'].includes(upperWord)) return <span key={j} className="hl-web">{word}</span>;
                    if (['ADS', 'GOOGLE', 'META', 'MARKETING', 'VENTE'].includes(upperWord)) return <span key={j} className="hl-ads">{word}</span>;
                    if (upperWord === 'SEO') return <span key={j} className="hl-seo">{word}</span>;
                    if (upperWord.includes('GHM')) return <span key={j} className="hl-ghm">{word}</span>;
                    return word;
                });
            });

            return (
                <div key={lineIdx} className={lineClass} style={{ marginBottom: line.trim() === '' ? '12px' : '4px' }}>
                    {renderedLine}
                </div>
            );
        });
    };

    return (
        <span className="bubble-content">
            {renderContent(displayedText)}
            {!isComplete && <span className="cursor" />}
        </span>
    );
};

const ChatScreen = ({ onBack }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const messagesEndRef = useRef(null);

    // State to track if we are waiting to show the next mission
    const [pendingNextMission, setPendingNextMission] = useState(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    // Watch for message typewriting completion to trigger next events
    useEffect(() => {
        if (pendingNextMission) {
            const lastMsg = messages[messages.length - 1];
            // Check if the feedback message (which triggered the pending state) is finished
            if (lastMsg && lastMsg.id === pendingNextMission.afterMessageId && lastMsg.isFinished) {
                // The feedback message has finished typing, so now we show the next mission
                const timer = setTimeout(() => {
                    setMessages(prev => [...prev, pendingNextMission.missionMsg]);
                    setPendingNextMission(null);
                }, 1000); // Small pause for readability
                return () => clearTimeout(timer);
            }
        }
    }, [messages, pendingNextMission]);

    // Function to format the question text for the bot to display
    const formatQuestion = (q) => {
        return `[SCÉNARIO] 📌 ${q.category}\n\n[IMPORTANT] PROBLÈME : ${q.scenario}\n\n👔 CIBLE : Client potentiel GHM\n\n${q.options.map(opt => `[${opt.id.toUpperCase()})] ${opt.text}`).join('\n')}`;
    };

    // Initialize with a RANDOM first scenario from our local bank
    useEffect(() => {
        const initChat = async () => {
            setIsLoading(true);
            try {
                const randomIdx = Math.floor(Math.random() * questions.length);
                const q = questions[randomIdx];
                setCurrentQuestion(q);

                const intro = "Bienvenue dans le programme d'excellence commerciale GHM LABS. 🚀 Notre objectif est de booster tes compétences pour faire de toi un consultant d'élite. Ensemble, nous allons maîtriser l'art de la vente consultative.\n\nVoici ta première mission :\n\n";
                const questionText = formatQuestion(q);

                setMessages([
                    {
                        id: 1,
                        type: 'bot',
                        text: intro + questionText,
                        isFinished: false
                    }
                ]);
            } catch (error) {
                console.error("Init Error:", error);
                setMessages([{ id: 'err', type: 'bot', text: "Erreur de connexion. Veuillez réessayer.", isFinished: true }]);
            } finally {
                setIsLoading(false);
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSend = async () => {
        if (!input.trim() || isLoading || pendingNextMission) return;

        const userInput = input.trim().toUpperCase();
        const userMsg = {
            id: Date.now(),
            type: 'user',
            text: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            let botText = "";

            // Check if user is answering the current question (A, B, C, D)
            const isAnswering = /^[A-D]$/.test(userInput);

            if (isAnswering && currentQuestion) {
                const isCorrect = userInput.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
                const feedbackTag = isCorrect ? "[SUCCESS] ✅" : "[ECHEC] ❌";

                // 1. Get Feedback from AI
                const prompt = `L'utilisateur a choisi la réponse ${userInput} pour le scénario suivant : "${currentQuestion.scenario}". 
                La réponse correcte était ${currentQuestion.correctAnswer.toUpperCase()} car : ${currentQuestion.explanation}.
                
                Donne une évaluation courte (max 3-4 lignes) avec ton style d'EXPERT GHM LABS. 
                Commence par ${feedbackTag}.
                Sois exigeant. Explique pourquoi c'est une faute ou un succès.`;

                const aiFeedback = await sendMessageToBot([{ role: 'user', content: prompt }]);

                const feedbackMsg = {
                    id: Date.now() + 1,
                    type: 'bot',
                    text: aiFeedback.replace(/<[^>]*>?/gm, ''),
                    isFinished: false
                };
                setMessages(prev => [...prev, feedbackMsg]);

                // 2. Clear loading immediately so we see typewriting
                setIsLoading(false);

                // Prepare next mission but DO NOT show it yet
                const nextIdx = Math.floor(Math.random() * questions.length);
                const q = questions[nextIdx];
                setCurrentQuestion(q);

                const nextMissionMsg = {
                    id: Date.now() + 2,
                    type: 'bot',
                    text: "--- MISSION RÉELLE SUIVANTE ---\n\n" + formatQuestion(q),
                    isFinished: false
                };

                setPendingNextMission({
                    afterMessageId: feedbackMsg.id,
                    missionMsg: nextMissionMsg
                });

                return; // Prevent the default botMsg logic at the end
            } else {
                // Normal conversation mode
                const apiContext = messages.map(m => ({
                    role: m.type === 'bot' ? 'assistant' : 'user',
                    content: m.text
                }));
                apiContext.push({ role: 'user', content: input });
                botText = await sendMessageToBot(apiContext);
            }

            const cleanResponse = botText.replace(/<[^>]*>?/gm, '');

            const botMsg = {
                id: Date.now() + 1,
                type: 'bot',
                text: cleanResponse,
                isFinished: false
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { id: 'err', type: 'bot', text: "❌ Erreur de connexion API.", isFinished: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTypewritingComplete = (id) => {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, isFinished: true } : m));
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            position: 'relative'
        }} className="animate-fade-in">
            {/* Minimal Header */}
            {/* 80s Vintage Header */}
            <div className="header">
                <div className="status-panel">
                    <div className="status-item">
                        <div className="led led-green led-blink" />
                        <span style={{ color: '#ff80bf' }}>REACT: ON</span>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <span className="logo">GHM LABS AI BOT</span>
                    <div className="flex gap-2 mt-1" style={{ color: '#00ff00', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", opacity: 0.8 }}>
                        <span>UNIT-01</span>
                        <span>|</span>
                        <span>REAL-WORLD-OPS</span>
                    </div>
                </div>

                <div className="status-panel">
                    <div className="status-item">
                        <span style={{ color: '#ffe600' }}>VITE: 5.0</span>
                        <div className="led led-green" />
                    </div>
                    <div className="status-item">
                        <span style={{ color: '#ff9f1c' }}>GROQ: LNK</span>
                        <div className="led led-yellow led-blink" />
                    </div>
                    <a href="https://github.com/jalalmrzz/ghm-labs-ai-bot" target="_blank" rel="noopener noreferrer" className="status-item" style={{ cursor: 'pointer', marginLeft: '10px', textDecoration: 'none' }}>
                        <span style={{ color: '#00ff00' }}>GITHUB LINK</span>
                        <Download size={16} color="#00ff00" />
                    </a>
                </div>
            </div>

            {/* Chat History */}
            <div className="chat-window">
                <div className="flex-1" /> {/* Spacer to push messages down */}
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.type}`}>
                        <div className="avatar">
                            {msg.type === 'bot' ? (
                                <div className="animated-bot-icon" style={{ transform: 'scale(0.8)' }}>
                                    <div className="bot-eyes">
                                        <div className="eye"></div>
                                        <div className="eye"></div>
                                    </div>
                                </div>
                            ) : <User className="w-4 h-4" />}
                        </div>
                        <div className="bubble">
                            {msg.type === 'bot' && !msg.isFinished ? (
                                <TypewriterText
                                    text={msg.text}
                                    onComplete={() => handleTypewritingComplete(msg.id)}
                                />
                            ) : (
                                <span className={msg.type === 'bot' ? "bubble-content" : ""}>
                                    {msg.type === 'bot' ? (
                                        // Helper function for rendering finished bot messages with tags
                                        messages.find(m => m.id === msg.id)?.text.split(/(\[.*?\])/g).map((part, i) => {
                                            if (part.startsWith('[') && part.endsWith(']')) {
                                                const tag = part.slice(1, -1).toUpperCase();
                                                let c = 'highlight';
                                                if (['IMPORTANT', 'CONFLICT', 'DANGER', 'ALERTE', 'URGENT'].includes(tag)) c = 'tag-important';
                                                else if (['MISSION', 'START', 'DEBUT'].includes(tag)) c = 'tag-urgent';
                                                else if (['SCÉNARIO', 'CLIENT'].includes(tag)) c = 'tag-scenario';
                                                else if (['OPTION', 'CHOIX', 'PACKAGE'].includes(tag)) c = 'tag-option';
                                                else if (['BRAVO', 'SUCCESS', 'VALIDE', 'ASTUCE', 'CONSEIL'].includes(tag)) c = 'tag-success';
                                                else if (['LIEU', 'CONTEXTE'].includes(tag)) c = 'highlight-blue';
                                                else if (['CIBLE', 'PROSPECT'].includes(tag)) c = 'highlight-yellow';
                                                else if (tag === 'A' || tag === 'A)') c = 'choice-a';
                                                else if (tag === 'B' || tag === 'B)') c = 'choice-b';
                                                else if (tag === 'C' || tag === 'C)') c = 'choice-c';
                                                else if (tag === 'D' || tag === 'D)') c = 'choice-d';
                                                return <span key={i} className={c}>{part}</span>;
                                            }
                                            return part;
                                        })
                                    ) : msg.text}
                                    {msg.type === 'bot' && <span className="cursor" />}
                                </span>
                            )}
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="message bot">
                        <div className="avatar">
                            <Bot className="w-4 h-4" />
                        </div>
                        <div className="bubble">
                            <div className="flex gap-1.5 p-1">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="input-container">
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Tape ta réponse (ex: A, B ou C)..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="send-btn"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
