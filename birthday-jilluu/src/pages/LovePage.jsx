import React, { useState } from 'react';
import '../styles/lovepage.css';

const LovePage = ({ onBack, onCalendar, onLetter, onReasons, onSorry, theme }) => {
    const [interactionState, setInteractionState] = useState('idle'); // 'idle', 'yes', 'no'

    return (
        <div className="love-page-container">
            {theme !== 'night' && (
                <div className="floating-hearts">
                    {[...Array(15)].map((_, i) => (
                        <div key={`pink-${i}`} className="floating-heart">💖</div>
                    ))}
                    {[...Array(10)].map((_, i) => (
                        <div key={`red-${i}`} className="floating-heart">❤️</div>
                    ))}
                </div>
            )}

            <button className="back-arrow-btn" onClick={onBack}>
                ←
            </button>

            <div className="message-box">
                <div className="name-wrapper">
                    <h1 className="name-nav">
                        <span onClick={onCalendar} className="nav-char" title="Calendar">ஹ</span>
                        <span onClick={onLetter} className="nav-char" title="Love Letter">ரி</span>
                        <span onClick={onReasons} className="nav-char" title="Reasons">னி</span>
                        <span onClick={onSorry} className="nav-char" title="Sorry Message">😘</span>
                    </h1>

                    <div className="tamil-poem">
                        <p style={{ marginBottom: '40px' }}>
                            தொலைவில் இருந்தாலும்… 🌍என் நினைவுகளின் நெஞ்சோரத்தில் நீ தான்… ❤️
                            நீ பேசும் சில நொடிகளுக்காக… ⏳நான் பல மணி நேரம் காத்திருக்கிறேன்… 🥺
                            அந்த நொடிகளுக்கே தெரியும் நான் உன்னை எவ்வளவு நேசிக்கிறேன் என்று… 💞
                            அருகில் இருப்பது மட்டும் காதல் இல்லை… ✨தொலைவில் இருந்தும் நினைத்துக் கொண்டு வாழ்வதும் காதல் தான்… ❤️
                            என் கண்கள் உன்னை பார்க்காமல் இருக்கலாம்… 👀
                            ஆனால் என் இதயம் ஒரு நொடியும் உன்னை மறக்காது… 💖
                            விடியாத ஒரு இரவு வேண்டும்… 🌙அதில் கலையாத ஒரு கனவு வேண்டும்… 💫
                            அந்த கனவிலாவது நீ என் அருகில் இருக்க வேண்டும்… ❤️
                            காலம் தோற்றுப் போகலாம்… ⏳ஆனா உனக்காக நான் காத்திருப்பது ஒருபோதும் மாறாது… 💞

                        </p>

                        <p>
                            பல பெண்களை பார்த்தும் மயங்காத நான்… ✨ உன்னை பார்த்து தான் உண்மையாக மயங்கிவிட்டேன். ❤️
                            நீ என் வாழ்க்கையில் வந்த நாள் முதல் எல்லாமே வண்ணமாய் மாறிவிட்டது… 🌈💖
                            நீ இல்லாத ஒரு நொடி மட்டும் வெயிலில் நிழல் இல்லாமல் நிற்பது போல இருக்கும்… ☀️🥀
                            உன்னை நினைக்காமல் இருக்க முயற்சி செய்தாலும் முடியவில்லை… 💭
                            ஏனெனில் நீ என்னுள் ஒரு வேராய் முளைத்துவிட்டாய்… 🌱❤️
                            இப்போது என் ஒவ்வொரு மூச்சிலும் கூட உன் பெயர் தான் இருக்கிறது… 🫶
                            உன் பின்னால் நான் அலைவது உன் அழகுக்காக அல்ல… 🌸
                            உன் இதயத்தில் ஒரு சிறிய இடம் கிடைக்குமா என்பதற்காக தான். 🥺💎
                            வாழ்வோ சாவோ… ⚔️🥀 இன்பமோ துன்பமோ… 🌈☁️ எதுவாக இருந்தாலும்… ✨
                            என் வாழ்க்கை முழுவதும் உன்னுடன் மட்டுமே இருக்க வேண்டும்… ⏳❤️ செல்லக்குட்டி. 🫂💞
                        </p>
                    </div>
                </div>

                <div className="interactive-love-box">
                    {interactionState === 'idle' && (
                        <div className="question-state">
                            <h2>Unaku ena pudikuma Thangooo?<span className="white-emojis">🥺💖!</span></h2>
                            <div className="button-group">
                                <button className="yes-btn" onClick={() => setInteractionState('yes')}>Yes ❤️</button>
                                <button className="no-btn" onClick={() => setInteractionState('no')}>No 💔</button>
                            </div>
                        </div>
                    )}

                    {interactionState === 'yes' && (
                        <div className="response-state yes-view">
                            <p>Awww...🫠🤗 such a cutiee 😘 Enaku theriyumae nee yes dha select pannuva nu...Love youhhh Thangame ❤️♾️🌍</p>
                            <button className="back-btn" onClick={() => setInteractionState('idle')}>Back ↩️</button>
                        </div>
                    )}

                    {interactionState === 'no' && (
                        <div className="response-state no-view">
                            <p>Hey chumma dhana daa chello no select panna... I will kick you adi vaangidatha da poi crt ahh select pannu podaa 🥺💔</p>
                            <button className="back-btn" onClick={() => setInteractionState('idle')}>Back ↩️</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LovePage;
