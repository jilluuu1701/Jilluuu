import React from 'react';
import '../styles/calendar.css';

const SorryPage = ({ onBack, theme }) => {
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

            <div className="message-card sorry-content">
                <h2 className="section-title">I'm Truly Sorry, Dii Pattuu <span className="white-emojis">🥺🙏!</span></h2>

                <p className="sorry-intro">
                    I know I haven't been perfect, and I might have hurt you in ways I didn't intend.
                </p>

                <div className="sorry-messages">
                    <p>Dii na ithu varaikum unna hurt pannathuku sorry dii🫂. Na venumnu pannirundhalum or enakae theriyama pannirunthalum sari sorry for everything dii Thangam ❤️</p>

                    <p>Na oru lusu eppo ena pesanum epd pesanum nu theriyathu , So na unna hurt pandra maari pesirunthalum or edhachu pannirunthalum sorry sorry daa 🫠💎</p>

                    <p>Ithuvaraikum nadanthathu la maranthu konjam ennai mannithuvidungal pondattii🫂💕 pls inimay ipd nadakama iruka ennala mudinja varaikum try pandren ... try pandren illa inimay apd la pesamaaten dii 🥺. Love youhh Dii ♾️🌎</p>

                    <p>Na konjam apd dha da thangoo first edhachu pesiduven ena nu yosikamaiyae aprm dha en ipd pesanum edhuku ipd pesanum nu realise pandren ... suppose na edhachu apd sonna thittu adi you have all right's to ask mee 😊 appo achu  apd la pesama irukena nu paakuren...🙃 But ithukaga la kochikutu vittutu poidatha aprm avalodha na nee illama epd irupeno nu nenaichavae bayama iruku dii 🥹🖤 </p>
                </div>

                <div className="sorry-footer">
                    <p>Please forgive me baby... You more than anything in this universe for me! 🪐💕</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '40px', padding: '0 20px' }}>
                <img
                    src={`${import.meta.env.BASE_URL}Image2.jpg`}
                    alt="Forgive me"
                    style={{
                        maxWidth: '90%',
                        maxHeight: '350px',
                        objectFit: 'contain'
                    }}
                />
            </div>
        </div>
    );
};

export default SorryPage;
