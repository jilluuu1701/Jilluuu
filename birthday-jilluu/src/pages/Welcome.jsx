import React, { useState, useEffect } from 'react';
import '../styles/welcome.css';

const Welcome = ({ onEnter, theme, onThemeChange }) => {
    const [floatingHearts, setFloatingHearts] = useState([]);

    useEffect(() => {
        const heartEmojis = theme === 'night' ? ['💕', '💗'] : ['💕', '🌸', '💗'];

        const createHeart = () => {
            const heart = {
                id: Math.random().toString(36).substr(2, 9),
                left: Math.random() * 100,
                size: Math.random() * 8 + 10,
                duration: Math.random() * 8 + 8,
                delay: Math.random() * 3,
                rotation: Math.random() * 60 - 30, // -30 to +30 degrees
                sway: Math.random() * 40 - 20, // -20 to +20 pixels horizontal sway
                emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
            };
            setFloatingHearts(prev => [...prev.slice(-20), heart]);
            setTimeout(() => {
                setFloatingHearts(prev => prev.filter(h => h.id !== heart.id));
            }, (heart.duration + heart.delay) * 1000);
        };

        const interval = setInterval(createHeart, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="welcome-container">
            {/* Single Theme Toggle Button - Now without container */}
            <button
                className="theme-icon-btn toggle-active"
                onClick={() => onThemeChange(theme === 'lavender' ? 'night' : 'lavender')}
                title={theme === 'lavender' ? "Switch to Night Mode" : "Switch to Day Mode"}
            >
                {theme === 'lavender' ? '🌙' : '☀️'}
            </button>
            {/* Background Animations Layer (Clipped) */}
            <div className="bg-container">
                {theme === 'night' && (
                    <>
                        <div className="romantic-aurora"></div>
                        <div className="moon march-16-2006"></div>
                    </>
                )}

                {theme === 'sakura' && (
                    <>
                        <div className="sakura-sun"></div>
                    </>
                )}

                {theme === 'lavender' && (
                    <>
                        <div className="moon march-16-2006"></div>
                    </>
                )}
            </div>

            {/* Floating Hearts - Hidden in Night Mode */}
            {theme !== 'night' && (
                <div className="floating-hearts">
                    {floatingHearts.map(heart => (
                        <div
                            key={heart.id}
                            className="floating-heart"
                            style={{
                                left: `${heart.left}%`,
                                fontSize: `${heart.size}px`,
                                animationDuration: `${heart.duration}s`,
                                animationDelay: `${heart.delay}s`,
                                '--rotation': `${heart.rotation}deg`,
                                '--sway': `${heart.sway}px`,
                            }}
                        >
                            {heart.emoji}
                        </div>
                    ))}
                </div>
            )}

            <div className="welcome-content">
                <br></br>
                <h3>16/03/2026💕</h3>
                <p>To the most special person in my life ❤️ </p>
                <h1>Happy Birthday Thangam😘🫂</h1>
                <p>Love you soo much 🫶🤌😽</p>
                <button className="enter-btn" onClick={onEnter}>
                    Enter
                </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '40px', padding: '0 20px', zIndex: 10 }}>
                <video
                    autoPlay
                    muted
                    loop
                    className="video-player"
                    playsInline
                    style={{
                        objectFit: 'contain',
                        background: 'transparent'
                    }}
                >
                    <source src="/Video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Welcome;
