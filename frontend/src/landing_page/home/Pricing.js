import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return ( 
        <div className="container py-5 my-5">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <h6 className="text-primary fw-bold">TRANSPARENT PRICING</h6>
                    <h2 className="fw-bold mb-4">Unbeatable Pricing</h2>
                    
                    <p className="text-light mb-4">
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    
                    <div className="mb-4">
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div className="text-light">Free account opening</div>
                        </div>
                        
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div className="text-light">Zero maintenance charges</div>
                        </div>
                        
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div className="text-light">Free equity delivery trading</div>
                        </div>
                    </div>
                    
                    <Link to="/pricing" className="btn btn-primary">
                        See detailed pricing
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </Link>
                </div>
                
                <div className="col-lg-7">
                    <div className="row g-4">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}>
                                <div className="card-body text-center">
                                    <img src="media_images/pricingEquity.svg" alt="Free Account Opening" style={{ height: "60px", marginBottom: "1rem" }} />
                                    <h4 className="card-title text-white">Account Opening</h4>
                                    <div className="my-3">
                                        <span className="fs-1 fw-bold text-white">₹0</span>
                                        <span className="text-light ms-2">One-time</span>
                                    </div>
                                    <p className="card-text text-white">
                                        Open your trading and demat account completely free. No hidden fees or charges.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}>
                                <div className="card-body text-center">
                                    <img src="media_images/pricingEquity.svg" alt="Equity Delivery" style={{ height: "60px", marginBottom: "1rem" }} />
                                    <h4 className="card-title text-white">Equity Delivery</h4>
                                    <div className="my-3">
                                        <span className="fs-1 fw-bold text-white">₹0</span>
                                        <span className="text-light ms-2">Per trade</span>
                                    </div>
                                    <p className="card-text text-white">
                                        All equity delivery investments and direct mutual fund transactions are free.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 mx-auto">
                            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#1a1a1a", borderColor: "#333" }}>
                                <div className="card-body text-center">
                                    <img src="media_images/other-trades.svg" alt="Intraday & F&O" style={{ height: "60px", marginBottom: "1rem" }} />
                                    <h4 className="card-title text-white">Intraday & F&O</h4>
                                    <div className="my-3">
                                        <span className="fs-1 fw-bold text-white">₹20</span>
                                        <span className="text-light ms-2">Per executed order</span>
                                    </div>
                                    <p className="card-text text-white">
                                        Flat fee per executed order, regardless of order size. No percentage brokerage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;