import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container-fluid py-5 mt-5" style={{ background: "#101010" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold text-white">
                            Trade with Confidence
                        </h1>
                        
                        <p className="lead text-light my-4">
                            Experience the next generation trading platform with real-time analytics, 
                            personalized insights, and seamless execution.
                        </p>
                        
                        <div className="d-flex flex-wrap gap-3">
                            <Link to="/signup" className="btn btn-primary btn-lg">
                                Get Started
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                            
                            <Link to="/login" className="btn btn-outline-light btn-lg">
                                Sign In
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="position-relative">
                            <img 
                                src="media_images/dashboard-1.png" 
                                alt="NocTra Dashboard" 
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;