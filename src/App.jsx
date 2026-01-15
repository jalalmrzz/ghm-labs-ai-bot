import React, { useState } from 'react';
import { MessageSquare, Layout, History, Settings, LogOut, User } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatScreen from './components/ChatScreen';

function App() {
  const [screen, setScreen] = useState('welcome');

  const handleGetStarted = () => setScreen('chat');
  const handleBack = () => setScreen('welcome');

  return (
    <>
      <div className="robot-bg">
        <iframe
          title="S-Bot Robot"
          src="https://sketchfab.com/models/60d996fe709f406580b7bfe8feb6dcca/embed?autospin=1&autostart=1&ui_hint=0&ui_theme=dark&dnt=1"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      </div>
      <div className="overlay" />

      <div className="app-container">
        <main className="main-content">
          {screen === 'welcome' && (
            <div className="centered-view">
              <WelcomeScreen onGetStarted={handleGetStarted} />
            </div>
          )}

          {screen === 'chat' && (
            <ChatScreen onBack={handleBack} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
