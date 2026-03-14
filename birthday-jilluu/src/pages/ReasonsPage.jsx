import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/calendar.css';

// Component for a single page in the book
const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref} style={{
            backgroundColor: 'transparent',
            padding: '20px',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: props.number % 2 !== 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            borderLeft: props.number % 2 === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: props.number % 2 === 0 ? 0 : 'auto',
                right: props.number % 2 !== 0 ? 0 : 'auto',
                width: '30px',
                background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />
            {props.children}
        </div>
    );
});

const ReasonsPage = ({ onBack, theme }) => {
    // Array of image filenames from a.jpg to p.jpg
    const images = Array.from({ length: 16 }, (_, i) => String.fromCharCode(97 + i) + '.jpg');

    // Hook to handle responsive FlipBook size
    const [viewSize, setViewSize] = React.useState({
        width: window.innerWidth > 768 ? 350 : (window.innerWidth > 480 ? 300 : window.innerWidth - 40),
        height: window.innerWidth > 768 ? 450 : (window.innerWidth > 480 ? 400 : 400),
        isMobile: window.innerWidth <= 768
    });

    React.useEffect(() => {
        const handleResize = () => {
            setViewSize({
                width: window.innerWidth > 768 ? 350 : (window.innerWidth > 480 ? 300 : window.innerWidth - 40),
                height: window.innerWidth > 768 ? 450 : (window.innerWidth > 480 ? 400 : 400),
                isMobile: window.innerWidth <= 768
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

            <button className="back-arrow-btn" onClick={onBack} style={{ zIndex: 100 }}>
                ←
            </button>

            <div className="reasons-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', padding: '20px', zIndex: 10 }}>
                <h2 className="section-title" style={{
                    marginBottom: '20px',
                    color: 'inherit',
                    textAlign: 'center',
                    fontSize: viewSize.isMobile ? '1.8rem' : '2.5rem'
                }}>
                    Adiyae Harinii<span className="white-emojis">😘🌍🫂</span>
                </h2>
                <p style={{ opacity: 0.8, marginBottom: '20px' }}>Just open the pages</p>

                <div className="book-wrapper" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    perspective: '1000px'
                }}>
                    <HTMLFlipBook
                        width={viewSize.width}
                        height={viewSize.height}
                        size="fixed"
                        minWidth={250}
                        maxWidth={400}
                        minHeight={300}
                        maxHeight={500}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        usePortrait={viewSize.isMobile}
                        startPage={0}
                        drawShadow={true}
                        flippingTime={1000}
                        useMouseEvents={true}
                        className="demo-book"
                        style={{
                            margin: '0 auto',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            borderRadius: '10px'
                        }}
                    >
                        {/* Cover Page */}
                        <Page number={0}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <img
                                    src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/z.jpg`}
                                    alt="Cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1,
                                        borderRadius: '5px'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                    zIndex: 2,
                                    borderRadius: '5px'
                                }}></div>
                                <div style={{ 
                                    position: 'relative', 
                                    zIndex: 3, 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    justifyContent: 'flex-start', 
                                    height: '100%', 
                                    textAlign: 'center', 
                                    padding: '20px',
                                    paddingTop: '60px' 
                                }}>
                                    <h1 style={{
                                        color: theme === 'night' ? '#ffffff' : '#000000',
                                        fontFamily: 'cursive',
                                        marginBottom: '10px',
                                        fontSize: viewSize.isMobile ? '1.4rem' : '2rem',
                                        textShadow: theme === 'night' ? '1px 1px 2px rgba(0, 0, 0, 0.8)' : '1px 1px 2px rgba(255, 255, 255, 0.8)',
                                        lineHeight: 1.4
                                    }}>
                                        Harini <br />💕♾️ <br />Sudharsan
                                    </h1>
                                </div>
                            </div>
                        </Page>

                        {/* Image Pages */}
                        {images.map((imgSrc, index) => (
                            <Page key={index} number={index + 1}>
                                <img
                                <img
                                    src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/${imgSrc}`}
                                    alt={`Memory ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '5px',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1
                                    }}
                                />
                            </Page>
                        ))}
                    </HTMLFlipBook>
                </div>

                <div
                    className="thank-you-letter"
                    style={{
                        marginTop: '40px',
                        padding: viewSize.isMobile ? '15px' : '20px',
                        color: 'inherit',
                        textAlign: 'center',
                        maxWidth: '600px',
                        width: '100%',
                        background: 'transparent'
                    }}
                >
                    <h3 style={{
                        fontFamily: 'cursive',
                        color: theme === 'night' ? '#ffffff' : '#000000',
                        marginBottom: '15px',
                        fontSize: viewSize.isMobile ? '1.4rem' : '1.8rem',
                        textShadow: theme === 'night' ? '1px 1px 2px rgba(0, 0, 0, 0.8)' : '1px 1px 2px rgba(255,255,255,0.7)'
                    }}>
                        Hey Chella Pondattiyae 🥺💖
                    </h3>
                    <p style={{
                        fontSize: viewSize.isMobile ? '0.95rem' : '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '15px'
                    }}>
                        Thank you soo much for being mine, dii... 🔐💕 I really don't know what I did to deserve a devathai like you in my life 🧚‍♂️🥹, but I am the luckiest guy in the whole universe to have you! 🌌🪐✨ Everything feels so magical when you are with me.
                    </p>
                    <p style={{
                        fontSize: viewSize.isMobile ? '1rem' : '1.15rem',
                        fontWeight: 'bold',
                    }}>
                        I love you endlessly, my whole wide world! 🌍♾️🫶💞
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReasonsPage;
