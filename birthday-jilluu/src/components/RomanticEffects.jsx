import React, { useState, useEffect } from 'react';

const EMOJIS = ['💕', '🌸', '💗'];

/**
 * Each floater has a unique travel direction (tX, tY in vh/vw units),
 * a matching start position on the opposite screen edge, and its own
 * speed & delay so none of them move in sync.
 *
 * Directions (12 total, spread around the compass):
 *   ↑  ↗  →  ↘  ↓  ↙  ←  ↖  + 4 more angled diagonals
 */
const CUTE_FLOATERS = [
    // idx  emoji      left     top    size  dur  delay  tX        tY        label
    { id: 0, emoji: '💕', left: '15%', top: '95%', size: 16, dur: 11, delay: 0, tX: '5vw', tY: '-110vh' }, // ↑ slightly right
    { id: 1, emoji: '🌸', left: '80%', top: '5%', size: 14, dur: 13, delay: -3, tX: '-4vw', tY: '110vh' }, // ↓ slightly left
    { id: 2, emoji: '💗', left: '2%', top: '45%', size: 18, dur: 10, delay: -6, tX: '110vw', tY: '-20vh' }, // → slight up
    { id: 3, emoji: '💕', left: '95%', top: '60%', size: 13, dur: 12, delay: -1, tX: '-110vw', tY: '-15vh' }, // ← slight up
    { id: 4, emoji: '🌸', left: '5%', top: '90%', size: 20, dur: 14, delay: -8, tX: '90vw', tY: '-90vh' }, // ↗ diagonal
    { id: 5, emoji: '💗', left: '90%', top: '5%', size: 15, dur: 10, delay: -4, tX: '-90vw', tY: '90vh' }, // ↙ diagonal
    { id: 6, emoji: '💕', left: '85%', top: '92%', size: 17, dur: 12, delay: -2, tX: '-85vw', tY: '-90vh' }, // ↖ diagonal
    { id: 7, emoji: '🌸', left: '5%', top: '5%', size: 14, dur: 11, delay: -9, tX: '85vw', tY: '90vh' }, // ↘ diagonal
    { id: 8, emoji: '💗', left: '45%', top: '97%', size: 16, dur: 13, delay: -5, tX: '-8vw', tY: '-110vh' }, // ↑ slight left
    { id: 9, emoji: '💕', left: '50%', top: '2%', size: 15, dur: 10, delay: -7, tX: '6vw', tY: '110vh' }, // ↓ slight right
    { id: 10, emoji: '🌸', left: '2%', top: '20%', size: 13, dur: 14, delay: -3, tX: '110vw', tY: '30vh' }, // → slight down
    { id: 11, emoji: '💗', left: '95%', top: '80%', size: 18, dur: 11, delay: -6, tX: '-110vw', tY: '-30vh' }, // ← slight down
];

const RomanticEffects = ({ theme }) => {
    const [mouseHearts, setMouseHearts] = useState([]);
    const [bursts, setBursts] = useState([]);
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // Filter emojis based on theme - Remove flowers and hearts in night mode
    const activeEmojis = theme === 'night' ? [] : EMOJIS;

    // ── Night Sky Effects (Stars & Meteors) ────────────────────────────────
    useEffect(() => {
        if (theme !== 'night') {
            setStars([]);
            setMeteors([]);
            return;
        }

        // Initialize stars
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5
        }));
        setStars(newStars);

        // Meteor interval - Increased frequency for more meteors
        const meteorInterval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            setMeteors(prev => [...prev.slice(-5), { // Keep more in state
                id,
                left: `${Math.random() * 80 + 20}%`,
                top: `${Math.random() * 40}%`,
                duration: Math.random() * 1 + 0.8 // Slightly faster
            }]);
            setTimeout(() => setMeteors(prev => prev.filter(m => m.id !== id)), 1500);
        }, 1500); // 1.5s interval for more activity

        return () => clearInterval(meteorInterval);
    }, [theme]);

    // ── Mouse trail hearts ─────────────────────────────────────────────────
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (Math.random() > 0.8) {
                const id = Math.random().toString(36).substr(2, 9);
                const emoji = activeEmojis[Math.floor(Math.random() * activeEmojis.length)];
                setMouseHearts(prev => [...prev.slice(-20), {
                    id, emoji,
                    x: e.clientX, y: e.clientY,
                    size: Math.random() * 15 + 10,
                    rotation: Math.random() * 360,
                }]);
                setTimeout(() => setMouseHearts(prev => prev.filter(h => h.id !== id)), 1000);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // ── Click burst hearts ─────────────────────────────────────────────────
    useEffect(() => {
        const handleClick = (e) => {
            const burstId = Math.random().toString(36).substr(2, 9);
            const newBursts = Array.from({ length: 8 }).map((_, i) => ({
                id: `${burstId}-${i}`,
                emoji: activeEmojis[i % activeEmojis.length],
                x: e.clientX, y: e.clientY,
                angle: (i * 45) + (Math.random() * 20),
                distance: Math.random() * 100 + 50,
            }));
            setBursts(prev => [...prev, ...newBursts]);
            setTimeout(() => setBursts(prev => prev.filter(b => !newBursts.find(nb => nb.id === b.id))), 1000);
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="romantic-overlay">

            {/* ── Directional floating love symbols ── */}
            {theme !== 'night' && CUTE_FLOATERS
                .map(f => (
                <div
                    key={f.id}
                    className="dir-floater"
                    style={{
                        left: f.left,
                        top: f.top,
                        fontSize: `${f.size}px`,
                        animationDuration: `${f.dur}s`,
                        animationDelay: `${f.delay}s`,
                        '--tx': f.tX,
                        '--ty': f.tY,
                    }}
                >
                    {f.emoji}
                </div>
            ))}

            {/* ── Night Sky Elements ── */}
            {theme === 'night' && (
                <>
                    {stars.map(star => (
                        <div 
                            key={`star-${star.id}`}
                            className="night-star"
                            style={{
                                left: star.left,
                                top: star.top,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                animationDuration: `${star.duration}s`,
                                animationDelay: `${star.delay}s`
                            }}
                        />
                    ))}
                    {meteors.map(meteor => (
                        <div 
                            key={meteor.id}
                            className="falling-meteor"
                            style={{
                                left: meteor.left,
                                top: meteor.top,
                                animationDuration: `${meteor.duration}s`
                            }}
                        />
                    ))}
                </>
            )}

            {/* ── Mouse trail hearts ── */}
            {mouseHearts.map(heart => (
                <div
                    key={heart.id}
                    className="trail-heart"
                    style={{
                        left: heart.x, top: heart.y,
                        fontSize: `${heart.size}px`,
                        transform: `rotate(${heart.rotation}deg)`,
                    }}
                >
                    {heart.emoji}
                </div>
            ))}

            {/* ── Click burst hearts ── */}
            {bursts.map(burst => (
                <div
                    key={burst.id}
                    className="burst-heart"
                    style={{
                        '--x': `${burst.x}px`,
                        '--y': `${burst.y}px`,
                        '--tx': `${Math.cos(burst.angle * Math.PI / 180) * burst.distance}px`,
                        '--ty': `${Math.sin(burst.angle * Math.PI / 180) * burst.distance}px`,
                    }}
                >
                    {burst.emoji}
                </div>
            ))}

            <style>{`
                .romantic-overlay {
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    pointer-events: none;
                    z-index: 9999;
                    overflow: hidden;
                }

                /* Each floater travels in its own unique direction */
                .dir-floater {
                    position: fixed;
                    pointer-events: none;
                    opacity: 0.20;
                    animation: dirTravel linear infinite;
                    filter: drop-shadow(0 0 5px rgba(255, 150, 180, 0.5));
                    will-change: transform, opacity;
                    user-select: none;
                }
                @keyframes dirTravel {
                    0%   { transform: translate(0, 0)                     scale(1);    opacity: 0;    }
                    10%  { opacity: 0.20; }
                    85%  { opacity: 0.20; }
                    100% { transform: translate(var(--tx), var(--ty))     scale(0.75); opacity: 0;    }
                }

                /* Mouse trail hearts */
                .trail-heart {
                    position: absolute;
                    pointer-events: none;
                    animation: fadeOutUp 1s forwards ease-out;
                    opacity: 0.8;
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                }

                /* Click burst hearts */
                .burst-heart {
                    position: absolute;
                    left: var(--x); top: var(--y);
                    font-size: 22px;
                    pointer-events: none;
                    animation: burstOut 1s forwards cubic-bezier(0.1, 0.8, 0.3, 1);
                    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
                }

                @keyframes fadeOutUp {
                    0%   { transform: translateY(0)     scale(1); opacity: 0.8; }
                    100% { transform: translateY(-60px) scale(0); opacity: 0;   }
                }
                @keyframes burstOut {
                    0%   { transform: translate(-50%,-50%) scale(1); opacity: 1; }
                    100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0); opacity: 0; }
                }
                /* Night Sky Effects */
                .night-star {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 0 10px white;
                    animation: twinkle ease-in-out infinite;
                    opacity: 0.8;
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.3); }
                }

                .falling-meteor {
                    position: absolute;
                    width: 2px;
                    height: 100px;
                    background: linear-gradient(to bottom, rgba(255,255,255,1), transparent);
                    transform: rotate(45deg);
                    animation: shoot forwards linear;
                    z-index: 1;
                }

                @keyframes shoot {
                    0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
                    10% { opacity: 1; }
                    100% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default RomanticEffects;
