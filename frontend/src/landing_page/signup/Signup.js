import React from "react";
import "./Signup.css"; // You'll need to create this CSS file or use inline styles

function Signup() {
  return (
    <div className="signup-container">
      {/* Left section */}
      <div className="left-section" style={{ backgroundColor: "#101010" }}>
        <div className="content">
          <h1 className="title" style={{ fontWeight: "200" }}>
            Get started <br /> with NocTra
          </h1>
          
          {/* No award badge */}
          
          {/* No star rating */}
          
          
          
          
        </div>
      </div>
      
      {/* Right section */}
      <div className="right-section" style={{ backgroundColor: "#2c66e4" }}>
        <div className="form-card">
          <h2 className="form-title" style={{ fontWeight: "300", marginBottom: "0" }}>Get started</h2>
          
          <form className="signup-form">
            <p style={{ marginTop: "0", marginBottom: "30px", fontWeight: "400", fontSize: "3rem", textAlign: "center", color: "#101010" }}>Get started</p>
            
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="firstName" placeholder="First Name*" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" id="lastName" placeholder="Last Name*" className="form-control" />
              </div>
            </div>
            
            <div className="form-group">
              <input type="email" id="email" placeholder="Email*" className="form-control" />
            </div>
            
            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ 
                  padding: '0.75rem 0.5rem',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '50px 0 0 50px',
                  border: '1px solid #ddd',
                  borderRight: 'none',
                  color: '#101010',
                  fontWeight: '500'
                }}>+91</span>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Enter number*" 
                  className="form-control" 
                  style={{ borderRadius: '0 50px 50px 0' }}
                />
              </div>
            </div>
            
            <div className="form-group">
              <input type="text" id="username" placeholder="Username of your choice*" className="form-control" />
            </div>
            
            <div className="form-footer">
              <p className="terms-text">
                By submitting this form, you are agreeing to Noctra's <a href="#" className="policy-link">Privacy Policy</a> and <a href="#" className="policy-link">Terms of Service</a>.
              </p>
              
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;