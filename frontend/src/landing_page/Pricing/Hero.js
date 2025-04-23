import React from "react";

function Hero() {
    return (
        <div className="pricing-hero py-5 text-center">
            <div className="container py-5">
                <h1 style={{ 
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
                    fontWeight: '300', 
                    color: 'white',
                    marginBottom: '1rem'
                }}>
                    Pricing
                </h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.4',
                            color: '#a0a0a0',
                            fontWeight: '300',
                            marginBottom: '3rem'
                        }}>
                            Noctra offers ultra-low brokerage with zero hidden charges,<br/> making trading cost-effective.
                        </p>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    {/* Equity Delivery Card */}
                    <div className="col-md-5 mb-4 mb-md-0">
                        <div style={{
                            backgroundColor: 'rgba(30, 30, 30, 0.6)',
                            borderRadius: '16px',
                            padding: '2rem',
                            height: '100%',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                            border: '1px solid rgba(100, 100, 100, 0.2)',
                            transition: 'transform 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                backgroundColor: 'rgba(61, 123, 255, 0.1)',
                                padding: '5px 15px',
                                borderBottomLeftRadius: '10px',
                                fontSize: '0.8rem',
                                color: '#3d7bff'
                            }}>
                                POPULAR
                            </div>
                            
                            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontWeight: '400' }}>
                                Equity Delivery
                            </h3>
                            <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '2rem' }}>
                                For long-term investors
                            </p>
                            
                            <div className="price-tag mb-4">
                                <span style={{ fontSize: '3rem', fontWeight: '300', color: 'white' }}>₹0</span>
                                <span style={{ color: '#a0a0a0', fontSize: '0.9rem', marginLeft: '5px' }}>
                                    /per transaction
                                </span>
                            </div>
                            
                            <div className="features text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Free equity delivery trading</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>No account maintenance charges</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Free demat account opening</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Unlimited watchlists</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Research reports & analysis</span>
                                </div>
                            </div>
                            
                            <button className="btn mt-4" style={{
                                backgroundColor: '#3d7bff',
                                color: 'white',
                                padding: '0.6rem 2rem',
                                borderRadius: '8px',
                                border: 'none',
                                width: '100%'
                            }}>
                                Get Started
                            </button>
                        </div>
                    </div>
                    
                    {/* Intraday & F&O Card */}
                    <div className="col-md-5">
                        <div style={{
                            backgroundColor: 'rgba(30, 30, 30, 0.6)',
                            borderRadius: '16px',
                            padding: '2rem',
                            height: '100%',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                            border: '1px solid rgba(100, 100, 100, 0.2)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontWeight: '400' }}>
                                Intraday & F&O
                            </h3>
                            <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '2rem' }}>
                                For active traders
                            </p>
                            
                            <div className="price-tag mb-4">
                                <span style={{ fontSize: '3rem', fontWeight: '300', color: 'white' }}>₹20</span>
                                <span style={{ color: '#a0a0a0', fontSize: '0.9rem', marginLeft: '5px' }}>
                                    /per transaction
                                </span>
                            </div>
                            
                            <div className="features text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Flat ₹20 per executed order</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Advanced charting tools</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Real-time market data</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Margin trading facility</span>
                                </div>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div style={{ 
                                        width: '20px', 
                                        height: '20px', 
                                        backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L10 17L20 7" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span style={{ color: 'white', fontSize: '0.9rem' }}>Options analytics tools</span>
                                </div>
                            </div>
                            
                            <button className="btn mt-4" style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                padding: '0.6rem 2rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(61, 123, 255, 0.5)',
                                width: '100%'
                            }}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
