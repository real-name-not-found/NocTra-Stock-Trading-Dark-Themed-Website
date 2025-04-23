import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ setActiveTab, activeTab }) => {
    const handleTabClick = (tab) => {
        if (setActiveTab) {
            setActiveTab(tab);
        }
    };

    return (
        <div className="menu">
            <div className="menu-left">
                <div className="logo">
                    <img src="/media_images/noctra_small_white_final_last.svg" alt="NocTRA Logo" />
                </div>
            </div>
            <div className="menu-right">
                <nav className="navigation">
                    <Link 
                        to="/" 
                        className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
                        onClick={() => handleTabClick("dashboard")}
                    >
                        Dashboard
                    </Link>
                    
                    <Link 
                        to="/orders" 
                        className={`nav-item ${activeTab === "orders" ? "active" : ""}`}
                        onClick={() => handleTabClick("orders")}
                    >
                        Orders
                    </Link>
                    
                    <Link 
                        to="/holdings" 
                        className={`nav-item ${activeTab === "holdings" ? "active" : ""}`}
                        onClick={() => handleTabClick("holdings")}
                    >
                        Holdings
                    </Link>
                    <Link 
                        to="/positions" 
                        className={`nav-item ${activeTab === "positions" ? "active" : ""}`}
                        onClick={() => handleTabClick("positions")}
                    >
                        Positions
                    </Link>
                    <Link 
                        to="/funds" 
                        className={`nav-item ${activeTab === "funds" ? "active" : ""}`}
                        onClick={() => handleTabClick("funds")}
                    >
                        Funds
                    </Link>
                </nav>
                <div className="vertical-divider"></div>
                <div className="user-section">
                    <div className="user-icon">
                        <span>U</span>
                    </div>
                    <span className="user-id">NOCTR1234</span>
                </div>
            </div>
        </div>
    );
};

export default Menu;
