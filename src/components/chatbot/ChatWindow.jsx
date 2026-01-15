import React from 'react';

const ChatWindow = ({ messages }) => {
    return (
        <div className="space-y-4">
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                    <div
                        className={`max-w-[80%] p-3 rounded-sm border ${msg.role === 'user'
                                ? 'bg-matrix-green/20 border-matrix-green/50 text-matrix-green'
                                : 'bg-matrix-dark border-matrix-green/30 text-matrix-green/90'
                            }`}
                    >
                        <div className="text-[10px] uppercase mb-1 opacity-50">
                            {msg.role === 'user' ? 'Collaborateur' : 'Tuteur GHM'}
                        </div>
                        <div className="whitespace-pre-wrap leading-relaxed">
                            {msg.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;
