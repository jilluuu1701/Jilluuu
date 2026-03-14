import React from 'react';
import '../styles/calendar.css';

const CalendarPage = ({ onBack, theme }) => {
    // Generate an array from 1 to 31 for March
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="calendar-page-container">
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

            <div className="split-view">
                {/* Left Side: Calendar */}
                <div className="left-panel">
                    <div className="calendar">
                        <h2>March</h2>
                        <div className="weekdays">
                            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                        </div>
                        <div className="days">
                            {/* Empty slots for starting day if needed (e.g. if March starts on Sunday, 0 empty slots) */}
                            {days.map(day => (
                                <div key={day} className={`day ${day === 16 ? 'special-day' : ''}`}>
                                    {day === 16 ? (
                                        <div className="heart-date">
                                            <span className="heart-bg">💖</span>
                                            <span className="date-num">16</span>
                                        </div>
                                    ) : (
                                        day
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Message */}
                <div className="right-panel">
                    <div className="message-card">
                        <p>To the cutest girl born on this day 🙈💚</p>
                        <h2>Happiest Birthday, Dr.Harinii<span className="white-emojis">💚😘!</span> </h2>
                        <p>
                            To my most beautiful girl🙈, my world🌍, and my everything♾️💕. <br /><br />
                            Many more happy returns of the day dii azhagii😘. Your the one who made my life complete and u made me feel the true love. From the day I saw youhh still now my Love😘♾️ for you is increasing day by day 💞💗...I'll always be there for you and hold your hands forever😻. <br /><br />
                            I need a future only with you and no can change that...Happy ahh santhosama Neeyum 💕 Naanum 🫶🤌😽 Ippo mattum illa eppovumae unnaku na enaku nee mattum dha saringala laddoo🥰🤗  <br /><br />
                            You deserve all the happiness in the universe 🪐. I love you more than words can say! ❤️<br /><br /> Love youhh💕 ! Love youhh💗 ! Love youhh💞 !Love youhh soo much 🫶🤌😽! Love youhh endlessleyy♾️🌍🪻
                        </p>
                        <div className="video-container">
                            <video
                                src={`${import.meta.env.BASE_URL}Video2.mp4`}
                                autoPlay
                                muted
                                loop
                                className="birthday-video"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
