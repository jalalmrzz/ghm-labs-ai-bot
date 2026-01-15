import React, { useState } from 'react';
import {
    ArrowLeft,
    Bell,
    Mic,
    RefreshCw,
    X
} from 'lucide-react';

const VoiceScreen = ({ onBack }) => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    const toggleListening = () => {
        setIsListening(!isListening);
        if (!isListening) {
            setTranscript("Bonjour, pouvez-vous me dire quel est le fleuve le plus long du monde? Je suis curieux de savoir!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-text-secondary" />
                </button>
                <h1 className="text-text-primary font-semibold">Mode Vocal</h1>
                <button className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
                    <Bell className="w-5 h-5 text-text-secondary" />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
                {/* Status */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold text-text-primary mb-2">
                        {isListening ? "Je vous écoute..." : "Appuyez pour parler"}
                    </h2>
                    {transcript && (
                        <p className="text-text-secondary text-sm max-w-xs mx-auto mt-4">
                            {transcript}
                        </p>
                    )}
                </div>

                {/* Voice Waves */}
                {isListening && (
                    <div className="flex items-center justify-center gap-1 h-16 mb-8">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="wave-bar"
                                style={{
                                    animationDelay: `${i * 100}ms`,
                                    height: `${Math.random() * 40 + 20}px`
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Voice Button with Rings */}
                <div className="relative">
                    {/* Animated Rings */}
                    {isListening && (
                        <>
                            <div className="voice-ring w-40 h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pulse-ring" />
                            <div className="voice-ring w-52 h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pulse-ring" style={{ animationDelay: '0.5s' }} />
                            <div className="voice-ring w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pulse-ring" style={{ animationDelay: '1s' }} />
                        </>
                    )}

                    {/* Static Rings */}
                    <div className="voice-ring w-40 h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="voice-ring w-52 h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="voice-ring w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                    {/* Main Button */}
                    <button
                        onClick={toggleListening}
                        className={`voice-btn relative z-10 ${isListening ? 'scale-110' : ''}`}
                    >
                        <Mic className="w-7 h-7 text-bg-dark" />
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6 mt-16">
                    <button className="w-14 h-14 rounded-full bg-bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
                        <RefreshCw className="w-5 h-5 text-primary" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center hover:bg-red-500/30 transition-colors">
                        <X className="w-5 h-5 text-red-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VoiceScreen;
