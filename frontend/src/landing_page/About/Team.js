import React from 'react';

function Team() {
    return (
        <div className="container py-5 my-4">
            <div className="row align-items-center mb-5">
                <div className="col-md-6 mb-5 mb-md-0 position-relative">
                    <img 
                        src="/media_images/jayant_2_img.jpeg" 
                        alt="Team" 
                        style={{ 
                            width: '80%', 
                            borderRadius: '16px', 
                            marginLeft: '10%',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            border: '3px solid rgba(61, 123, 255, 0.3)'
                        }} 
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '-15px',
                        right: '10%',
                        backgroundColor: '#1a1a1a',
                        borderRadius: '12px',
                        padding: '12px 20px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(61, 123, 255, 0.3)'
                    }}>
                        <span style={{ 
                            color: 'white', 
                            fontWeight: '500', 
                            fontSize: '1rem',
                            display: 'block' 
                        }}>Jayant Miglani</span>
                        <span style={{ 
                            color: '#3d7bff', 
                            fontSize: '0.9rem' 
                        }}>CEO & Founder</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-center mb-4 mt-md-0">
                        <div style={{ 
                            width: '14px', 
                            height: '14px', 
                            backgroundColor: '#3d7bff', 
                            borderRadius: '50%', 
                            marginRight: '14px' 
                        }}></div>
                        <span style={{ 
                            fontWeight: '600', 
                            fontSize: '1.2rem',
                            color: '#3d7bff',
                            letterSpacing: '1px'
                        }}>OUR TEAM</span>
                    </div>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', 
                        fontWeight: '300', 
                        lineHeight: '1.2',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        A passionate team building a fast and reliable trading platform.
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        color: '#e0e0e0',
                        marginBottom: '2rem'
                    }}>
                        Jayant Miglani brings innovative vision and technical expertise to NocTra as its CEO and Founder. With a strong background in financial markets and software development, he leads the company's strategic direction and product innovation. His passion for creating accessible trading tools has shaped NocTra into a platform known for its user-friendly interface and cutting-edge features.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <button className="btn" style={{
                            backgroundColor: '#3d7bff',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            fontWeight: '500',
                            borderRadius: '8px',
                            border: 'none',
                            transition: 'all 0.2s ease'
                        }}>
                            Join Our Team
                        </button>
                        <button className="btn" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            fontWeight: '500',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.2s ease'
                        }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="row align-items-center mt-5 pt-4">
                <div className="col-md-6 order-md-2 mb-5 mb-md-0 position-relative">
                    <img 
                        src="/media_images/ak_4_img.jpeg" 
                        alt="Akshaya" 
                        style={{ 
                            width: '80%', 
                            borderRadius: '16px', 
                            marginLeft: '10%',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            border: '3px solid rgba(61, 123, 255, 0.3)'
                        }} 
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '-15px',
                        right: '10%',
                        backgroundColor: '#1a1a1a',
                        borderRadius: '12px',
                        padding: '12px 20px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(61, 123, 255, 0.3)'
                    }}>
                        <span style={{ 
                            color: 'white', 
                            fontWeight: '500', 
                            fontSize: '1rem',
                            display: 'block' 
                        }}>C.S. AKSHAYA</span>
                        <span style={{ 
                            color: '#3d7bff', 
                            fontSize: '0.9rem' 
                        }}>CO-Founder</span>
                    </div>
                </div>
                <div className="col-md-6 order-md-1">
                    <div className="d-flex align-items-center mb-4 mt-md-0">
                        <div style={{ 
                            width: '14px', 
                            height: '14px', 
                            backgroundColor: '#3d7bff', 
                            borderRadius: '50%', 
                            marginRight: '14px' 
                        }}></div>
                        <span style={{ 
                            fontWeight: '600', 
                            fontSize: '1.2rem',
                            color: '#3d7bff',
                            letterSpacing: '1px'
                        }}>LEADERSHIP</span>
                    </div>
                    <h1 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', 
                        fontWeight: '300', 
                        lineHeight: '1.2',
                        color: 'white',
                        marginBottom: '1.5rem'
                    }}>
                        A passionate team building a fast and reliable trading platform.
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        color: '#e0e0e0',
                        marginBottom: '2rem'
                    }}>
                        With extensive expertise in financial markets and technology, C.S. Akshaya brings valuable insights to the NocTra platform. Her leadership in product development ensures that our trading solutions are both innovative and user-friendly. Her commitment to excellence helps drive NocTra's mission forward.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <button className="btn" style={{
                            backgroundColor: '#3d7bff',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            fontWeight: '500',
                            borderRadius: '8px',
                            border: 'none',
                            transition: 'all 0.2s ease'
                        }}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
