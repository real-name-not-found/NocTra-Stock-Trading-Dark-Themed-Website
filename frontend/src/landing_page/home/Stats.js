import React from 'react';

function Stats() {
    return ( 
        <div className="container mt-5 p-4">
            <div className="row align-items-center g-5">
                <div className="col-lg-6">
                    <div className="stats-content">
                        <h6 className="text-primary fw-bold mb-3">WHY CHOOSE US</h6>
                        <h2 className="fw-bold mb-4">Trust with Confidence</h2>
                        
                        <div className="features-list">
                            <div className="mb-4 d-flex gap-3">
                                <div className="feature-icon p-2 rounded" style={{ background: "rgba(13, 110, 253, 0.1)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="fs-5 fw-bold mb-2">Customer-first Always</h4>
                                    <p className="text-light">That's why 1.5+ crore customers trust us with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                                </div>
                            </div>
                            
                            <div className="mb-4 d-flex gap-3">
                                <div className="feature-icon p-2 rounded" style={{ background: "rgba(13, 110, 253, 0.1)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="fs-5 fw-bold mb-2">No Spam or Gimmicks</h4>
                                    <p className="text-light">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                                </div>
                            </div>
                            
                            <div className="mb-4 d-flex gap-3">
                                <div className="feature-icon p-2 rounded" style={{ background: "rgba(13, 110, 253, 0.1)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="fs-5 fw-bold mb-2">The Complete Ecosystem</h4>
                                    <p className="text-light">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                                </div>
                            </div>
                            
                            <div className="mb-4 d-flex gap-3">
                                <div className="feature-icon p-2 rounded" style={{ background: "rgba(13, 110, 253, 0.1)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="fs-5 fw-bold mb-2">Do Better with Money</h4>
                                    <p className="text-light">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="text-center">
                        <img src="media_images/CHATGPT_2_IMG.png" alt="NocTra Ecosystem" className="img-fluid rounded shadow" />
                        
                        <div className="mt-4">
                            <a href="#" className="btn btn-outline-primary me-3">
                                Explore our products
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                            </a>
                            <a href="#" className="btn btn-outline-primary">
                                Try demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;