import React from 'react';
import '../styles/calendar.css';

const LoveLetterPage = ({ onBack, theme }) => {
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

            <div className="message-card letter-content">
                <h2 className="section-title">My Everything <span className="white-emojis">♾️🌍❤️!</span></h2>

                <h3>Hey Azhagii 🫶🤌😽</h3>
                <p>
                    Thangam inimay eppovum happy ah irukinga edhukagavum feel pannathinga 💕 I will always be with you 💕 first edhum yosikadha padichu mudi mathathellam next pathukulam ennava irunthalum sari ☺️🖤 nee Doctor aaganum enaku adhu dha ippo thonitu iruku .. the day you get Dr infront of your name na dha avalo sandhosa paduven 🥹💗 and first en kitta dha soldra I should call you as Dr.Harini first okay ahh 😌 and edhunalum sollu I will always be there for you and not only in your up's but also in your down's I will support you always because you are my everything 💕🖤<br /><br />
                    Last two years vida intha birthday enaku konjam special dha 🥹 en na last two years ah olunga wish kuda pannala ... and enaku enamo ippolam nee en kudavae irukura maari iruku dii ... ippolam unna nenaichu azhugurathu lam konjam kammi aagiruku 😌 because en na nee ippolam daily call or msg pandranala enaku konjam okay va iruku illana epd ena aagirupaney theriyala dii🫠😢🫂<br /><br />
                    Analum unna evalo miss pandren theriyuma 🥹🫂 eppovum un niyabagamave dha dii iruku ennala mudiyala un kudavae irunthudalam nu thonum eppovum... apd iruntha kuda nalla irukum un kudavae unna rasichutu 💗 unna konjutu 💕 irupen 🫂🙈 <br /><br />
                    Enaku ana epd soldrathunae theriyala thangam un mela vachurukura love yaaru melaiyum varala 🌍😘🫂♾️ I don't know how to say it... I am getting more crazy about youhh💕🫠 I want to be with you forever ♾️🌍❤️ I want to make you happy always , I want to love you always , I want to respect you always , I want to admire you always 🥹💗 <br /><br />
                    You're a gem dii 💎 na la romba lucky theriyuma nee en wife ahh kedaika 🥹💗 Unna vittudamaten dii ♾️🌍❤️ You're mine only mine ♾️🫂🙈 and no one can change that... You're my Everything ♾️🌍❤️ <br /><br />
                    Nee illama oru life ennala yosichu kuda paaka mudiyala dii pls enna vittu epovum pogaadha 🥺💗 and I will be always be with you dii ennanalum na un kuda nippen♾️🌍❤️  <br /><br />
                    Love youhh Thangam♾️ Love youhh Pattu🌍 Love youhh Chellam❤️ Love youhh Laddoo💗 Love youhh Azhagii😘 Love youhh Dii♾️🌍❤️
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0', marginBottom: '15px', padding: '0 20px' }}>
                <img
                    src={`${import.meta.env.BASE_URL}Image1.jpg`}
                    alt="Our precious moment"
                    style={{
                        maxWidth: '90%',
                        maxHeight: '300px',
                        objectFit: 'contain'
                    }}
                />
                <p style={{ 
                    marginTop: '10px', 
                    textAlign: 'center', 
                    fontWeight: 'bold', 
                    fontSize: '1.1rem', 
                    color: theme === 'night' ? '#ffffff' : 'var(--text-color, #000000ff)', 
                    textShadow: theme === 'night' ? '1px 1px 3px rgba(0,0,0,0.8)' : '1px 1px 3px rgba(0,0,0,0.3)' 
                }}>
                    LOVE YOUHH LOTZZ AZHAGIII🌍😘🫂♾️
                </p>
            </div>
        </div>
    );
};

export default LoveLetterPage;
