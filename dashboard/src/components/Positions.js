import React, { useState, useEffect } from "react";
import "./Positions.css";
import axios from "axios";

const Positions = () => {
    // State for storing positions data from API
    const [allPositions, setAllPositions] = useState([]);
    
    // Fetch positions data from API
    useEffect(() => {
        axios.get("http://localhost:3002/allPositions").then((res) => {
            console.log(res.data);
            setAllPositions(res.data);
        })
    }, []);
    
    // Process positions data for display
    const processedPositions = allPositions.map((position, index) => {
        const investment = position.qty * position.avg;
        const currentValue = position.qty * position.price;
        const pnl = position.product === "CNC" ? 
            (currentValue - investment) : 
            (position.isLoss ? -Math.abs(currentValue - investment) : Math.abs(currentValue - investment));
        
        return {
            id: index + 1,
            product: position.name,
            type: position.product === "CNC" ? "LONG" : "SHORT",
            investment: investment,
            qty: position.qty,
            avgPrice: position.avg,
            ltp: position.price,
            pnl: pnl,
            change: position.net,
            isPositive: !position.isLoss
        };
    });

    // Calculate total P&L
    const totalPnL = processedPositions.reduce((sum, position) => sum + position.pnl, 0).toFixed(2);
    const isPnLPositive = parseFloat(totalPnL) >= 0;

    return (
        <div className="positions-container">
            <div className="positions-header">
                <h2>Positions ({processedPositions.length})</h2>
            </div>
            
            <div className="positions-table-container">
                <table className="positions-table">
                    <thead>
                        <tr>
                            <th className="product-col">Product</th>
                            <th>Type</th>
                            <th>Investment</th>
                            <th>QTY</th>
                            <th>Avg</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {processedPositions.map(position => (
                            <tr key={position.id}>
                                <td className="product-col">{position.product}</td>
                                <td className={position.type === "LONG" ? "long-type" : "short-type"}>
                                    {position.type}
                                </td>
                                <td>₹{position.investment.toFixed(2)}</td>
                                <td>{position.qty}</td>
                                <td>₹{position.avgPrice.toFixed(2)}</td>
                                <td>₹{position.ltp.toFixed(2)}</td>
                                <td className={position.isPositive ? "positive" : "negative"}>
                                    ₹{Math.abs(position.pnl).toFixed(2)}
                                </td>
                                <td className={position.isPositive ? "positive" : "negative"}>
                                    {position.change}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6" className="total-label">Total P&L</td>
                            <td colSpan="2" className={isPnLPositive ? "positive" : "negative"}>
                                ₹{Math.abs(parseFloat(totalPnL)).toLocaleString('en-IN')}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
            <div className="positions-info">
                <div className="info-section">
                    <h3>About Positions</h3>
                    <p>A position represents your current ownership or obligation in a particular stock:</p>
                    <ul>
                        <li><span className="long-type">LONG</span> - You own the stock and profit when price rises</li>
                        <li><span className="short-type">SHORT</span> - You've sold stock you don't own and profit when price falls</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Positions;
