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
    const messagesEndRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    // Initialize with first scenario from API
    useEffect(() => {
        const initChat = async () => {
            setIsLoading(true);
            try {
                // Trigger a RANDOM first scenario
                const topics = [
                    "la vente d'un Site Vitrine à un avocat",
                    "la vente de Google Ads à un plombier",
                    "la vente de SEO à une clinique",
                    "la vente d'un E-commerce à une boutique de vêtements",
                    "la gestion d'un client mécontent des résultats Facebook Ads",
                    "le closing d'un gros contrat avec une agence immobilière"
                ];
                const randomTopic = topics[Math.floor(Math.random() * topics.length)];

                const response = await sendMessageToBot([{ role: 'user', content: `Introduis le programme d'excellence GHM LABS et lance une mission de conseil sur le thème : ${randomTopic}.` }]);
                const cleanResponse = response.replace(/<[^>]*>?/gm, '');

                setMessages([
                    {
                        id: 1,
                        type: 'bot',
                        text: cleanResponse,
                        isFinished: false
                    }
                ]);
            } catch (error) {
                console.error("Init Error:", error);
                setMessages([{ id: 'err', type: 'bot', text: "Erreur de connexion au serveur de formation. Veuillez réessayer.", isFinished: true }]);
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
        if (!input.trim() || isLoading) return;

        const userMsg = {
            id: Date.now(),
            type: 'user',
            text: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        // Prepare context for API
        const apiContext = messages.map(m => ({
            role: m.type === 'bot' ? 'assistant' : 'user',
            content: m.text
        }));
        apiContext.push({ role: 'user', content: input });

        try {
            const rawResponse = await sendMessageToBot(apiContext);
            // Safety: Remove any HTML tags if the bot ignores the prompt
            const cleanResponse = rawResponse.replace(/<[^>]*>?/gm, '');

            const botMsg = {
                id: Date.now() + 1,
                type: 'bot',
                text: cleanResponse,
                isFinished: false
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Chat Error:", error);
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
                        <span>REACT: ON</span>
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
                        <span>VITE: 5.0</span>
                        <div className="led led-green" />
                    </div>
                    <div className="status-item">
                        <span>GROQ: LNK</span>
                        <div className="led led-yellow led-blink" />
                    </div>
                    <a href="https://github.com/jalalmrzz/ghm-labs-ai-bot" target="_blank" rel="noopener noreferrer" className="status-item" style={{ cursor: 'pointer', marginLeft: '10px', textDecoration: 'none' }}>
                        <span>GITHUB LINK</span>
                        <Download size={16} color="#00ffcc" />
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
