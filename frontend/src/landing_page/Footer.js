import React from 'react';

function Footer() {
    return ( 
        <footer style={{ 
            color: "#a0a0a0",
            backgroundColor: "#101010",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            boxShadow: "0 -5px 20px rgba(61, 123, 255, 0.15)",
            marginTop: "80px",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(61, 123, 255, 0.3)"
        }}>
            <div 
                className="position-absolute top-0 start-0 w-100" 
                style={{
                    height: "2px",
                    background: "linear-gradient(90deg, rgba(61, 123, 255, 0) 0%, rgba(61, 123, 255, 0.8) 50%, rgba(61, 123, 255, 0) 100%)",
                    opacity: 0.7
                }}
            />
            <div className='container py-5'>
                <div className='row pt-4 pb-4'>
                    <div className='col-lg-4 mb-4 mb-lg-0'>
                        <img
                            src="media_images/noctra_small_white_border.svg"
                            alt="logo"
                            id="logo" 
                            style={{ width: '60%', marginBottom: '20px' }}
                        />
                        <p style={{ color: "#a0a0a0", fontSize: "0.9rem", maxWidth: "300px" }}>
                            Your trusted partner for seamless and efficient stock trading since 2023.
                        </p>
                        <p style={{ fontSize: "0.85rem", marginTop: "20px" }}>Copyright &copy;2025, NocTra. All rights reserved.</p>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-md-4 mb-4 mb-md-0'>
                                <p style={{ color: "#3d7bff", fontWeight: "500", marginBottom: "15px", fontSize: "1.1rem" }}>Company</p>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">About</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Products</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Pricing</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Careers</a>
                            </div>
                            <div className='col-md-4 mb-4 mb-md-0'>
                                <p style={{ color: "#3d7bff", fontWeight: "500", marginBottom: "15px", fontSize: "1.1rem" }}>Support</p>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Contact us</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Support portal</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">List of charges</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">FAQs</a>
                            </div>
                            <div className='col-md-4'>
                                <p style={{ color: "#3d7bff", fontWeight: "500", marginBottom: "15px", fontSize: "1.1rem" }}>Account</p>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Open an account</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Fund transfer</a>
                                <a href="#" style={{ color: "#a0a0a0", textDecoration: "none", marginBottom: "10px", display: "block", fontSize: "0.95rem", transition: "color 0.2s ease" }} className="footer-link">Demo account</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr style={{ borderColor: "rgba(100, 100, 100, 0.3)", margin: "20px 0 30px 0" }} />
                
                <div className="legal-disclaimer py-3" style={{ fontSize: "0.85rem", color: "#8a8a8a", lineHeight: "1.5" }}>
                    <p>
                        NocTra Broking Ltd. is a stock trading platform designed to provide seamless and efficient trading experiences for investors. Our goal is to offer a user-friendly interface with transparent pricing, making stock trading accessible to all.
                    </p>
                    <p className="mt-3">
                        For any queries or support, users can reach out to us at <a href="mailto:jayantmiglani93@gmail.com" style={{ color: "#3d7bff", textDecoration: "none" }}>jayantmiglani93@gmail.com</a>. Our registered address is SRM University, Chennai, Kattankulathur - 603203.
                    </p>
                    <p className="mt-3">
                        Investors should always review risks associated with stock trading before making investment decisions. To prevent unauthorized transactions, users are encouraged to keep their contact details updated to receive transaction confirmations. Additionally, investors should regularly check their securities, mutual funds, and bond holdings through their consolidated account statements.
                    </p>
                    <p className="mt-3">
                        As a policy, NocTra does not provide stock tips or authorize anyone to trade on behalf of others. If users come across fraudulent claims regarding our platform, they should report them immediately. Investments in the securities market are subject to market risks. Users are advised to read all related documents carefully before investing.
                    </p>
                </div>
                
                <div className="social-links text-center mt-4 pb-2">
                    <a href="#" style={{ color: "#a0a0a0", margin: "0 15px", fontSize: "1.2rem", transition: "color 0.2s ease" }} className="footer-social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" style={{ color: "#a0a0a0", margin: "0 15px", fontSize: "1.2rem", transition: "color 0.2s ease" }} className="footer-social-link">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" style={{ color: "#a0a0a0", margin: "0 15px", fontSize: "1.2rem", transition: "color 0.2s ease" }} className="footer-social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" style={{ color: "#a0a0a0", margin: "0 15px", fontSize: "1.2rem", transition: "color 0.2s ease" }} className="footer-social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            
            <style jsx>{`
                .footer-link:hover {
                    color: #3d7bff !important;
                }
                .footer-social-link:hover {
                    color: #3d7bff !important;
                }
            `}</style>
        </footer>
     );
}

export default Footer;