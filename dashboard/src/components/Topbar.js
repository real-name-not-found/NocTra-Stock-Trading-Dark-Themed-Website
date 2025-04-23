import React from "react";
import Menu from "./Menu";
import "./Topbar.css";

const Topbar = ({ setActiveTab, activeTab }) => {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <div className="market-data">
                    <div className="market-item">
                        <span className="market-label">NIFTY50</span>
                        <span className="market-value">19,425.32</span>
                        <span className="market-change positive">+0.54%</span>
                    </div>
                    <div className="market-item">
                        <span className="market-label">SENSEX</span>
                        <span className="market-value">64,718.56</span>
                        <span className="market-change negative">-0.12%</span>
                    </div>
                </div>
                <div className="vertical-divider"></div>
            </div>
            <div className="topbar-right">
                <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Topbar;

