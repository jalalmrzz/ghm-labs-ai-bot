import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ onGetStarted }) => {
    const [phase, setPhase] = useState('title'); // 'title', 'subtitle', 'message', 'done'
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [displayedSubtitle, setDisplayedSubtitle] = useState('');
    const [displayedMessage, setDisplayedMessage] = useState('');

    const title = "GHM LABS";
    const subtitle = "SMART DIGITAL SOLUTIONS";
    const message = "Bienvenue dans le programme d'excellence commerciale\nGHM LABS à Kénitra. 🚀\n\nNotre objectif est de booster tes compétences\npour faire de toi un consultant d'élite.\n\nEnsemble, nous allons maîtriser\nl'art de la vente consultative.";

    useEffect(() => {
        let charIndex = 0;
        let timer;

        if (phase === 'title') {
            timer = setInterval(() => {
                if (charIndex < title.length) {
                    setDisplayedTitle(title.slice(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => setPhase('subtitle'), 300);
                }
            }, 80); // Slower for dramatic title
        } else if (phase === 'subtitle') {
            timer = setInterval(() => {
                if (charIndex < subtitle.length) {
                    setDisplayedSubtitle(subtitle.slice(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => setPhase('message'), 500);
                }
            }, 50);
        } else if (phase === 'message') {
            timer = setInterval(() => {
                if (charIndex < message.length) {
                    setDisplayedMessage(message.slice(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(timer);
                    setPhase('done');
                    setTimeout(() => onGetStarted(), 1500);
                }
            }, 25); // Slower typewriter
        }

        return () => clearInterval(timer);
    }, [phase, onGetStarted]);

    const isComplete = phase === 'done';

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            zIndex: 99999,
            overflow: 'hidden',
            fontFamily: "'DS-Digital', 'Courier New', monospace",
            padding: '40px',
            cursor: isComplete ? 'pointer' : 'default'
        }} onClick={isComplete ? onGetStarted : undefined}>

            {/* CRT Scan Lines Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.06,
                pointerEvents: 'none',
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)',
                zIndex: 100
            }} />

            {/* Content Container */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                maxWidth: '900px'
            }}>
                {/* BIG TITLE - Typewriter */}
                <h1 className="welcome-title title-glow" style={{
                    fontSize: '72px',
                    fontWeight: 'bold',
                    color: '#00ffcc',
                    textShadow: '0 0 30px #00ffcc, 0 0 60px #00ffcc, 0 0 90px #00ffcc',
                    marginBottom: '20px',
                    letterSpacing: '8px',
                    minHeight: '90px'
                }}>
                    {displayedTitle}
                    {phase === 'title' && (
                        <span style={{
                            display: 'inline-block',
                            width: '20px',
                            height: '60px',
                            backgroundColor: '#00ffcc',
                            animation: 'blink 0.4s infinite',
                            boxShadow: '0 0 20px #00ffcc',
                            verticalAlign: 'middle',
                            marginLeft: '8px'
                        }} />
                    )}
                </h1>

                {/* Subtitle - Typewriter */}
                <div className="welcome-subtitle" style={{
                    fontSize: '28px',
                    color: '#ffe600',
                    letterSpacing: '8px',
                    textShadow: '0 0 15px #ffe600',
                    marginBottom: '60px',
                    minHeight: '40px'
                }}>
                    {displayedSubtitle}
                    {phase === 'subtitle' && (
                        <span style={{
                            display: 'inline-block',
                            width: '14px',
                            height: '28px',
                            backgroundColor: '#ffe600',
                            animation: 'blink 0.4s infinite',
                            boxShadow: '0 0 15px #ffe600',
                            verticalAlign: 'middle',
                            marginLeft: '4px'
                        }} />
                    )}
                </div>

                {/* Message - Typewriter */}
                <div className="welcome-message" style={{
                    color: '#00ff00',
                    fontSize: '20px',
                    lineHeight: '1.8',
                    textShadow: '0 0 10px #00ff00',
                    minHeight: '200px',
                    whiteSpace: 'pre-wrap'
                }}>
                    {displayedMessage}
                    {phase === 'message' && (
                        <span style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '22px',
                            backgroundColor: '#00ff00',
                            animation: 'blink 0.4s infinite',
                            boxShadow: '0 0 10px #00ff00',
                            verticalAlign: 'middle',
                            marginLeft: '4px'
                        }} />
                    )}
                </div>

                {/* Ready indicator */}
                {isComplete && (
                    <div style={{
                        marginTop: '50px',
                        color: '#ff00ff',
                        fontSize: '16px',
                        letterSpacing: '6px',
                        animation: 'blink 1s infinite',
                        textShadow: '0 0 20px #ff00ff'
                    }}>
                        [ CLICK TO START ]
                    </div>
                )}
            </div>

            <style>
                {`
                @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                }
                @keyframes titlePulse {
                    0%, 100% {
                        textShadow: '0 0 30px #00ffcc, 0 0 60px #00ffcc, 0 0 90px #00ffcc';
                        transform: 'scale(1)';
                    }
                    50% {
                        textShadow: '0 0 50px #00ffcc, 0 0 100px #00ffcc, 0 0 150px #00ffcc';
                        transform: 'scale(1.02)';
                    }
                }
                .title-glow {
                    animation: 'titlePulse 2s ease-in-out infinite';
                }
                `}
            </style>
        </div>
    );
};

export default WelcomeScreen;
