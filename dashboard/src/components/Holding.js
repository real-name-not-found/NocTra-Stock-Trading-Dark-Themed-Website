import React, {useState, useEffect } from "react";

//imported axios for conencting api 
import axios from  'axios';

// Import the holdings service
import { fetchHoldings, subscribeToHoldingsUpdates, startHoldingsAutoRefresh } from '../services/HoldingsService';

import "./Holding.css";

const Holding = () => {

    //adding new things for fetching from database using API endpoint now from line 10 to 
    const [allHoldings, setAllHoldings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshCounter, setRefreshCounter] = useState(0);
    const [prevHoldings, setPrevHoldings] = useState({}); // Store previous holdings for smooth transitions

    // Function to fetch holdings data
    const loadHoldings = async (isAutoRefresh = false) => {
        try {
            // Only show loading indicator for manual refreshes
            if (!isAutoRefresh) {
                setIsLoading(true);
            }
            
            // Use the service to fetch holdings
            const holdings = await fetchHoldings();
            console.log("Holdings loaded:", holdings);
            
            // Create a map of previous holdings for reference
            const prevHoldingsMap = {};
            allHoldings.forEach(holding => {
                prevHoldingsMap[holding.name] = holding;
            });
            setPrevHoldings(prevHoldingsMap);
            
            setAllHoldings(holdings);
            
            // Only update loading status for manual refreshes
            if (!isAutoRefresh) {
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error loading holdings:", error);
            if (!isAutoRefresh) {
                setIsLoading(false);
            }
        }
    };

    // Refresh function for manual refresh
    const handleRefresh = () => {
        setRefreshCounter(prev => prev + 1);
    };

    useEffect(() => {
        // Initial load of holdings data
        loadHoldings(false);
        
        // Subscribe to holdings updates
        const unsubscribe = subscribeToHoldingsUpdates((isAutoRefresh) => {
            console.log("Holding component received update notification, isAutoRefresh:", isAutoRefresh);
            loadHoldings(isAutoRefresh);
        });
        
        // Start auto-refresh of holdings (every 5 seconds)
        const stopAutoRefresh = startHoldingsAutoRefresh(5000);
        
        // Clean up subscription and auto-refresh when component unmounts
        return () => {
            unsubscribe();
            stopAutoRefresh();
        };
    }, [refreshCounter]);

    // Process holdings data for display
    const processedHoldings = allHoldings.map((holding, index) => {
        const currentValue = holding.qty * holding.price;
        const investment = holding.qty * holding.avg;
        const pnl = currentValue - investment;
        const isPositive = pnl >= 0;
        
        return {
            id: index + 1,
            name: holding.name,
            qty: holding.qty,
            avgCost: holding.avg,
            ltp: holding.price,
            currentValue: currentValue,
            pnl: pnl,
            netChange: holding.net,
            dailyChange: holding.day,
            isPositive: isPositive,
            isDailyPositive: !holding.day.includes('-')
        };
    });

    // Calculate totals
    const totalInvestment = processedHoldings.reduce((sum, holding) => sum + (holding.avgCost * holding.qty), 0).toFixed(2);
    const totalCurrentValue = processedHoldings.reduce((sum, holding) => sum + holding.currentValue, 0).toFixed(2);
    const totalPnL = (totalCurrentValue - totalInvestment).toFixed(2);
    const totalPnLPercentage = ((totalPnL / totalInvestment) * 100).toFixed(2) || 0;
    const isPnLPositive = parseFloat(totalPnL) >= 0;

    return (
        <div className="holding-container">
            <div className="holding-header">
                <div className="header-with-actions">
                    <h2>Holdings ({processedHoldings.length})</h2>
                    {isLoading ? (
                        <div className="loading-indicator">Updating...</div>
                    ) : (
                        <button className="refresh-button" onClick={handleRefresh}>
                            Refresh
                        </button>
                    )}
                </div>
            </div>
            
            <div className="holding-table-container">
                <table className="holding-table">
                    <thead>
                        <tr>
                            <th className="name-col">Investment</th>
                            <th>QTY</th>
                            <th>Avg Cost</th>
                            <th>LTP</th>
                            <th>Current Value</th>
                            <th>P&L</th>
                            <th>Net Change</th>
                            <th>Daily Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {processedHoldings.length > 0 ? (
                            processedHoldings.map(holding => (
                                <tr key={holding.id}>
                                    <td className="name-col">{holding.name}</td>
                                    <td>{holding.qty}</td>
                                    <td>₹{holding.avgCost.toFixed(2)}</td>
                                    <td>₹{holding.ltp.toFixed(2)}</td>
                                    <td>₹{holding.currentValue.toFixed(2)}</td>
                                    <td className={holding.isPositive ? "positive" : "negative"}>
                                        {holding.isPositive ? '+' : '-'}₹{Math.abs(holding.pnl).toFixed(2)}
                                    </td>
                                    <td className={holding.isPositive ? "positive" : "negative"}>
                                        {holding.netChange}
                                    </td>
                                    <td className={holding.isDailyPositive ? "positive" : "negative"}>
                                        {holding.dailyChange}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-holdings">
                                    {isLoading ? "Loading holdings..." : "No holdings found"}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className="holdings-summary">
                <div className="summary-item">
                    <span className="summary-label">Total Investment</span>
                    <span className="summary-value">₹{parseFloat(totalInvestment).toLocaleString('en-IN')}</span>
                </div>
                
                <div className="summary-item">
                    <span className="summary-label">Current Value</span>
                    <span className="summary-value">₹{parseFloat(totalCurrentValue).toLocaleString('en-IN')}</span>
                </div>
                
                <div className="summary-item">
                    <span className="summary-label">Total P&L</span>
                    <span className={`summary-value ${isPnLPositive ? "positive" : "negative"}`}>
                        {isPnLPositive ? '+' : '-'}₹{Math.abs(parseFloat(totalPnL)).toLocaleString('en-IN')} ({isPnLPositive ? "+" : "-"}{Math.abs(totalPnLPercentage)}%)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Holding;
