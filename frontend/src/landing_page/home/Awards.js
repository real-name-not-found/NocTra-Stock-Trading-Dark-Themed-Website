import React from 'react';

function Awards() {
    return ( 
        <div className="container py-5 my-5">
            <div className="text-center mb-5">
                <h6 className="text-primary fw-bold">RECOGNITION</h6>
                <h2 className="fw-bold">India's Leading Stock Broker</h2>
            </div>
            
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="text-center">
                        <img 
                            src="/media_images/largestbroker_2_canva.png" 
                            alt="Largest Broker in India" 
                            className="img-fluid rounded mb-4" 
                            style={{ maxWidth: "80%" }}
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <h3 className="fw-bold mb-4">Trade in Dark Mode</h3>
                    <p className="text-light mb-4">Experience seamless trading with our flagship stock broker web application - NocTra. We offer a wide range of investment options with a modern, intuitive interface.</p>
                    
                    <div className="row">
                        <div className="col-6 col-md-4 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="me-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <span>Futures & Options</span>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-4 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="me-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                    </svg>
                                </div>
                                <span>Stocks & IPOs</span>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-4 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="me-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="2" x2="12" y2="22"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                                <span>Currency</span>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-4 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="me-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="8 12 12 16 16 12"></polyline>
                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                    </svg>
                                </div>
                                <span>Mutual Funds</span>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-4 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="me-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                </div>
                                <span>Commodity</span>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-4 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="me-2 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"></path>
                                        <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
                                        <path d="M16 11h0"></path>
                                    </svg>
                                </div>
                                <span>Bonds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;