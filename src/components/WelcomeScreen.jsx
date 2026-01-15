import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ onGetStarted }) => {
    const [text, setText] = useState('');
    const fullText = "🔐 INITIALISATION DU MODULE CRM...\n✅ CONNEXION SÉCURISÉE ÉTABLIE.\n\n🎯 BIENVENUE SUR GHM TRAINING PLATFORM.\n📊 MODULE : GESTION DES LEADS & ACQUISITION CLIENTS\n⚡ PRÉPARATION DES SCÉNARIOS DE FORMATION...";
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
                setIsFinished(true);
                setTimeout(() => {
                    onGetStarted();
                }, 2500);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [onGetStarted]);

    // Function to render text with colors and code styling
    const renderColoredText = (fullText) => {
        return fullText.split('\n').map((line, i) => {
            let styledLine = line;

            // Highlight GHM TRAINING PLATFORM
            if (line.includes('GHM TRAINING')) {
                const parts = line.split('GHM TRAINING');
                return (
                    <div key={i} style={{ marginBottom: '8px', fontFamily: "'DS-Digital', monospace", fontSize: '24px' }}>
                        {parts[0]}<span style={{ color: '#ff00ff', textShadow: '0 0 15px #ff00ff', fontWeight: 'bold' }}>GHM TRAINING</span>{parts[1]}
                    </div>
                );
            }

            // Highlight MODULE
            if (line.includes('MODULE')) {
                const parts = line.split('MODULE');
                return (
                    <div key={i} style={{ marginBottom: '8px', fontFamily: "'DS-Digital', monospace", fontSize: '24px' }}>
                        {parts[0]}<span style={{ color: '#00e5ff', textShadow: '0 0 15px #00e5ff', fontWeight: 'bold' }}>MODULE</span>{parts[1]}
                    </div>
                );
            }

            // Highlight LEADS
            if (line.includes('LEADS')) {
                const parts = line.split('LEADS');
                return (
                    <div key={i} style={{ marginBottom: '8px', fontFamily: "'DS-Digital', monospace", fontSize: '24px' }}>
                        {parts[0]}<span style={{ color: '#ff9f1c', textShadow: '0 0 15px #ff9f1c', fontWeight: 'bold' }}>LEADS</span>{parts[1]}
                    </div>
                );
            }

            return (
                <div key={i} style={{ marginBottom: '8px', color: '#00ffcc', fontFamily: "'DS-Digital', monospace", fontSize: '24px' }}>
                    {line}
                </div>
            );
        });
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#050505',
            zIndex: 99999,
            overflow: 'hidden',
            fontFamily: "'JetBrains Mono', monospace",
        }}>
            {/* Ultra-Strong Matrix Scan Lines */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.3,
                pointerEvents: 'none',
                background: `linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.5) 50%), 
                           linear-gradient(90deg, rgba(0,255,204,0.1), rgba(0,255,0,0.05), rgba(0,0,255,0.1))`,
                backgroundSize: '100% 4px, 100% 100%',
                zIndex: 5
            }} />

            {/* Pulsating Cyber Core (Backdrop) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80vw',
                height: '80vh',
                background: 'radial-gradient(circle, rgba(0, 255, 204, 0.08) 0%, transparent 60%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 1,
                animation: 'pulse-glow 4s infinite alternate'
            }} />

            <div style={{
                width: '100%',
                maxWidth: '900px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 10,
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Top Status Bar */}
                <div style={{
                    marginBottom: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{ width: '40px', height: '1px', background: 'rgba(0, 255, 204, 0.3)' }} />
                    <div className="animate-pulse" style={{
                        fontSize: '10px',
                        letterSpacing: '0.4em',
                        color: '#00ffcc',
                        opacity: 0.7,
                        fontWeight: 'bold'
                    }}>
                        SECURE NEURAL LINK ESTABLISHED
                    </div>
                    <div style={{ width: '40px', height: '1px', background: 'rgba(0, 255, 204, 0.3)' }} />
                </div>

                <h1 style={{
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    letterSpacing: '0.12em',
                    lineHeight: '1.8',
                    margin: 0,
                    color: '#fff',
                    textShadow: '0 0 20px rgba(0, 255, 204, 0.8), 0 0 40px rgba(0, 255, 204, 0.4)',
                    whiteSpace: 'pre-wrap',
                    maxWidth: '100%'
                }}>
                    {renderColoredText(text)}
                    {!isFinished && (
                        <span className="animate-pulse" style={{
                            display: 'inline-block',
                            width: '4px',
                            height: '1.2em',
                            backgroundColor: '#00ffcc',
                            marginLeft: '10px',
                            verticalAlign: 'middle',
                            boxShadow: '0 0 15px #00ffcc'
                        }} />
                    )}
                </h1>

                {isFinished && (
                    <div className="animate-fade-in" style={{ marginTop: '80px' }}>
                        <div className="animate-pulse" style={{
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '1em',
                            color: '#ff00ff',
                            fontWeight: 'bold',
                            textShadow: '0 0 15px #ff00ff',
                            background: 'rgba(255, 0, 255, 0.1)',
                            padding: '10px 30px',
                            border: '1px solid rgba(255, 0, 255, 0.3)',
                            borderRadius: '4px'
                        }}>
                            INITIALISATION FINALE...
                        </div>
                    </div>
                )}
            </div>

            <style>
                {`
                @keyframes pulse-glow {
                    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
                    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                }
                `}
            </style>
        </div>
    );
};

export default WelcomeScreen;
