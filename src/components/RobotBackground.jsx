import React from 'react';

const RobotBackground = () => {
    return (
        <div className="robot-background">
            <iframe
                title="S-Bot - Lowpoly"
                src="https://sketchfab.com/models/60d996fe709f406580b7bfe8feb6dcca/embed?autospin=1&autostart=1&ui_hint=0&ui_theme=dark&dnt=1"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
};

export default RobotBackground;
