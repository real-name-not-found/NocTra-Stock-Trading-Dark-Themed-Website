import React from "react";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const path = location.pathname.substring(1) || "dashboard";
    
    return (
        <>
            <Dashboard initialTab={path} />
        </>
    );
};

export default Home;