import React, { useState, useEffect } from "react";
import "./Summary.css";
import { fetchHoldings, subscribeToHoldingsUpdates, startHoldingsAutoRefresh } from "../services/HoldingsService";

const Summary = () => {
    const [holdingsData, setHoldingsData] = useState({
        totalInvestment: 0,
        currentValue: 0,
        profitLoss: 0,
        profitLossPercentage: 0,
        isPositive: true,
        isLoading: true
    });

    const valueStyle = {
        fontSize: '38px',
        fontWeight: 700,
        lineHeight: 1.1,
        height: '55px'
    };

    useEffect(() => {
        // Load holdings data on component mount
        loadHoldingsData(false);

        // Subscribe to holdings updates
        const unsubscribe = subscribeToHoldingsUpdates((isAutoRefresh) => {
            loadHoldingsData(isAutoRefresh);
        });
        
        // Start auto-refresh of holdings data
        const stopAutoRefresh = startHoldingsAutoRefresh(5000);
        
        // Clean up subscription on unmount
        return () => {
            unsubscribe();
            stopAutoRefresh();
        };
    }, []);

    // Function to load holdings data
    const loadHoldingsData = async (isAutoRefresh = false) => {
        try {
            // Only show loading for manual refreshes
            if (!isAutoRefresh) {
                setHoldingsData(prev => ({ ...prev, isLoading: true }));
            }
            
            const holdings = await fetchHoldings();
            
            // Calculate total investment and current value
            let totalInvestment = 0;
            let currentValue = 0;
            
            if (holdings && holdings.length > 0) {
                holdings.forEach(holding => {
                    totalInvestment += holding.qty * holding.avg;
                    currentValue += holding.qty * holding.price;
                });
            }
            
            // Calculate profit/loss
            const profitLoss = currentValue - totalInvestment;
            const profitLossPercentage = totalInvestment > 0 
                ? (profitLoss / totalInvestment) * 100 
                : 0;
            
            setHoldingsData({
                totalInvestment,
                currentValue,
                profitLoss,
                profitLossPercentage,
                isPositive: profitLoss >= 0,
                isLoading: false
            });
        } catch (error) {
            console.error("Error loading holdings data:", error);
            if (!isAutoRefresh) {
                setHoldingsData(prev => ({ ...prev, isLoading: false }));
            }
        }
    };

    // Format number for display (show full number with commas)
    const formatCurrency = (value) => {
        return value.toLocaleString('en-IN', { 
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    };

    return (
        <div className="summary-container">
            <div className="welcome-section">
                <h2>Hi, User!</h2>
                <div className="divider"></div>
            </div>
            
            <div className="summary-section">
                <div className="summary-row">
                    <div className="summary-col">
                        <h3 className="section-heading">Portfolio</h3>
                        <div className="summary-value" style={valueStyle}>
                            {holdingsData.isLoading 
                                ? "Loading..." 
                                : "₹" + formatCurrency(holdingsData.totalInvestment)}
                        </div>
                        <div className="summary-label">Total Investment</div>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="summary-col">
                        <div className="margin-details">
                            <div className="margin-item">
                                <span className="margin-label">Current Value:</span>
                                <span className="margin-value">
                                    {holdingsData.isLoading 
                                        ? "Loading..." 
                                        : "₹" + formatCurrency(holdingsData.currentValue)}
                                </span>
                            </div>
                            <div className="margin-item">
                                <span className="margin-label">P&L %:</span>
                                <span className={`margin-value ${holdingsData.isPositive ? 'positive-value' : 'negative-value'}`}>
                                    {holdingsData.isLoading 
                                        ? "Loading..." 
                                        : (holdingsData.isPositive ? "+" : "-") + Math.abs(holdingsData.profitLossPercentage).toFixed(2) + "%"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
                
                <div className="summary-row">
                    <div className="summary-col">
                        <h3 className="section-heading">Holding P&L</h3>
                        <div className="summary-label">Net Profit/Loss</div>
                        <div className={`summary-value ${holdingsData.isPositive ? 'positive' : 'negative'}`} style={valueStyle}>
                            {holdingsData.isLoading 
                                ? "Loading..." 
                                : (holdingsData.isPositive ? "+" : "-") + "₹" + formatCurrency(Math.abs(holdingsData.profitLoss))}
                        </div>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="summary-col">
                        <div className="holding-details">
                            <div className="holding-item">
                                <span className="holding-label">Current value</span>
                                <span className="holding-value">
                                    {holdingsData.isLoading 
                                        ? "Loading..." 
                                        : "₹" + formatCurrency(holdingsData.currentValue)}
                                </span>
                            </div>
                            <div className="holding-item">
                                <span className="holding-label">Investment</span>
                                <span className="holding-value">
                                    {holdingsData.isLoading 
                                        ? "Loading..." 
                                        : "₹" + formatCurrency(holdingsData.totalInvestment)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
