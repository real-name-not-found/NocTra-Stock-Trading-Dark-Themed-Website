import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      {/* Left section - Login Form */}
      <div className="login-form-section">
        <div className="login-form-wrapper">
          <img 
            src="/media_images/noctra_small_white_border.svg" 
            alt="NocTra Logo" 
            className="login-logo" 
          />
          
          <h1 className="login-heading">Log in to your account</h1>
          
          <div className="login-options">
            <button className="google-login-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Log in with Google
            </button>
            
            <div className="separator">
              <span>OR</span>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="Enter your email" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-input" 
                placeholder="Enter your password" 
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button className="login-btn">Log in</button>
            
            <div className="signup-option">
              <span>Don't have an account?</span>
              <a href="/signup" className="signup-link">Sign up</a>
            </div>
            
            <a href="/" className="guest-link">Continue as guest</a>
          </div>
        </div>
      </div>
      
      {/* Right section - Information */}
      <div className="info-section">
        <div className="info-content">
          <h2 className="info-heading">One powerful trading experience</h2>
          <p className="info-description">
            NocTra is your one-stop platform for managing investments, monitoring market trends, and executing trades with efficiency and precision.
          </p>
          
          <div className="info-cards">
            <div className="info-card" style={{ backgroundColor: "#1a2133", borderColor: "#3d7bff" }}>
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="card-title">One place for every trade</h3>
              <p className="card-description">
                NocTra keeps all your investments, watchlists, and trading history in one streamlined dashboard for easy access and management.
              </p>
            </div>
            
            <div className="info-card" style={{ backgroundColor: "#1e293b", borderColor: "#3d7bff" }}>
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="card-title">Peace of mind for all investors</h3>
              <p className="card-description">
                With advanced security features and transparent fee structures, NocTra ensures your investments are protected and managed responsibly.
              </p>
            </div>
            
            <div className="info-card" style={{ backgroundColor: "#21263f", borderColor: "#3d7bff" }}>
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="card-title">Your trading experience, enhanced</h3>
              <p className="card-description">
                Access real-time data, advanced charting tools, and market insights to make informed decisions and optimize your trading strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 