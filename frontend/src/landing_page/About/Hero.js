import React from "react";

function Hero() {
    return (
        <div className="about-hero-container">
            <div className="parallax-section" 
                style={{ 
                    background: "#101010",
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                }}>
                
                <div className="container position-relative">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1 style={{ 
                                fontSize: "clamp(6rem, 20vw, 20rem)", 
                                fontWeight: "200", 
                                color: "white",
                                margin: "0"
                            }}>NocTra</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container my-3 py-3">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="description-box p-4" style={{
                            backgroundColor: "#1a1a1a",
                            borderRadius: "15px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(100, 100, 100, 0.2)"
                        }}>
                            <p className="lead" style={{ 
                                fontSize: "1.5rem", 
                                lineHeight: "1.8",
                                fontWeight: "300",
                                color: "white" 
                            }}>
                                <span className="fw-bold" style={{ color: "#3d7bff" }}>NocTra</span> is a fast and intuitive stock trading platform designed for seamless investing. It offers real-time stock updates, a personalized watchlist, and lightning-fast order execution.
                            </p>
                            <p className="mt-3" style={{ 
                                fontSize: "1.2rem", 
                                lineHeight: "1.6",
                                color: "white"
                            }}>
                                With a sleek UI, advanced charting tools, and minimal brokerage fees, NocTra ensures a smooth and cost-effective trading experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;