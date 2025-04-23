import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Watchlist from "./Watchlist";
import Topbar from "./Topbar";
import Orders from "./Orders";
import Holding from "./Holding";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import Summary from "./Summary";

const Dashboard = ({ initialTab = "dashboard" }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const navigate = useNavigate();

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/${tab === "dashboard" ? "" : tab}`);
    };

    // Render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <Summary />;
            case "orders":
                return <Orders />;
            case "holdings":
                return <Holding />;
            case "positions":
                return <Positions />;
            case "funds":
                return <Funds />;
            case "apps":
                return <Apps />;
            default:
                return <Summary />;
        }
    };

    return (
        <>
            <Topbar setActiveTab={handleTabChange} activeTab={activeTab} />
            <div className="dashboard-container">
                <div className="sidebar">
                    <Watchlist />
                </div>
                <div className="content-area">
                    <div className="section-content">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

