import React from 'react';
import {
    MessageSquare,
    Mic,
    Image as ImageIcon,
    Clock,
    ArrowUpRight,
    Bell,
    ChevronRight,
    Search,
    Pin
} from 'lucide-react';

const Dashboard = ({ onNavigate }) => {
    const features = [
        {
            id: 'chat',
            title: 'Chat avec BDT',
            icon: MessageSquare,
            color: 'coral',
            description: 'Formation interactive'
        },
        {
            id: 'voice',
            title: 'Parler à BDT',
            icon: Mic,
            color: 'cyan',
            description: 'Mode conversation'
        },
        {
            id: 'image',
            title: 'Analyse Image',
            icon: ImageIcon,
            color: 'purple',
            description: 'Recherche visuelle'
        },
        {
            id: 'history',
            title: 'Tout l\'historique',
            icon: Clock,
            color: 'orange',
            description: 'Sessions passées'
        }
    ];

    const pinnedChats = [
        {
            id: 1,
            title: 'Compréhension de l\'IA',
            preview: 'Dites-moi ce qu\'est l\'intelligence artificielle ?'
        },
        {
            id: 2,
            title: 'Mode de vie sain',
            preview: 'Quelle est la meilleure façon de rester en forme ?'
        },
        {
            id: 3,
            title: 'Valeur de la lecture',
            preview: 'Qu\'est-ce qui fait de la lecture une habitude ?'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col p-6 animate-fade-in relative z-10 w-full overflow-y-auto scrollbar-none">
            {/* Header / User Profile Area */}
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 overflow-hidden">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-bg-dark" />
                    </div>
                    <div>
                        <p className="text-text-secondary text-xs">Bonjour,</p>
                        <h2 className="text-text-primary font-bold text-base">Agent GHM</h2>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                        <Search className="w-5 h-5 text-text-secondary" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                        <Bell className="w-5 h-5 text-text-secondary" />
                    </button>
                </div>
            </div>

            {/* Main Title */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-text-primary leading-tight">
                    Comment puis-je vous <br />
                    <span className="gradient-text">aider aujourd'hui?</span>
                </h1>
            </div>

            {/* Feature Cards Grid */}
            <div className="feature-grid">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        onClick={() => onNavigate(feature.id)}
                        className="feature-card"
                    >
                        <div className={`icon-btn ${feature.color} mb-6`}>
                            <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-text-primary font-bold text-sm mb-1">{feature.title}</h3>
                        <p className="text-text-secondary text-[10px] uppercase tracking-wider font-semibold opacity-40">Débuter</p>
                        <div className="absolute bottom-4 right-4">
                            <ArrowUpRight className="w-4 h-4 text-text-secondary/30" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pinned Chats Section */}
            <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-text-primary font-bold text-lg">Sessions Épinglées</h3>
                    <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:opacity-80 transition-all">
                        Tout voir
                    </button>
                </div>

                <div className="space-y-4">
                    {pinnedChats.map((chat) => (
                        <div key={chat.id} className="group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-5 h-5 text-text-secondary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-text-primary font-bold text-sm mb-1">
                                    {chat.title}
                                </h4>
                                <p className="text-text-secondary text-xs truncate">
                                    {chat.preview}
                                </p>
                            </div>
                            <Pin className="w-4 h-4 text-text-secondary opacity-30 rotate-45" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
