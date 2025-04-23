import React from "react";
import "./Funds.css";

const Funds = () => {
    // Dummy funds data
    const fundsData = {
        availableMargin: -88.50,
        usedMargin: 0.00,
        details: {
            openingBalance: -88.50,
            payin: 0.00,
            payout: 0.00,
            span: 0.00,
            deliveryMargin: 0.00,
            exposure: 0.00,
            optionPremium: 0.00
        },
        collateral: {
            liquidFunds: 0.00,
            equity: 0.00,
            total: 0.00
        }
    };

    return (
        <div className="funds-container">
            <div className="funds-header">
                <h2>Funds</h2>
            </div>
            
            <div className="funds-summary">
                <div className="summary-balance">
                    <h3>Available Margin</h3>
                    <div className={`balance-amount ${fundsData.availableMargin < 0 ? 'negative' : 'positive'}`}>
                        ₹ {fundsData.availableMargin.toFixed(2)}
                    </div>
                    <div className="balance-note">Cash + Collateral</div>
                </div>
                
                <div className="action-buttons">
                    <button className="add-funds-btn">+ Add funds</button>
                    <button className="withdraw-btn">Withdraw</button>
                </div>
            </div>
            
            <div className="funds-details">
                <div className="funds-item highlight">
                    <div className="item-label">Available cash</div>
                    <div className={`item-value ${fundsData.availableMargin < 0 ? 'negative' : 'positive'}`}>
                        ₹ {fundsData.availableMargin.toFixed(2)}
                    </div>
                </div>
                
                <div className="funds-item highlight">
                    <div className="item-label">Used margin</div>
                    <div className="item-value">₹ {fundsData.usedMargin.toFixed(2)}</div>
                </div>
                
                <div className="section-divider"></div>
                
                <div className="section-title">Funds breakdown</div>
                
                <div className="funds-item">
                    <div className="item-label">Opening balance</div>
                    <div className={`item-value ${fundsData.details.openingBalance < 0 ? 'negative' : ''}`}>
                        ₹ {fundsData.details.openingBalance.toFixed(2)}
                    </div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">Payin</div>
                    <div className="item-value">₹ {fundsData.details.payin.toFixed(2)}</div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">Payout</div>
                    <div className="item-value">₹ {fundsData.details.payout.toFixed(2)}</div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">SPAN</div>
                    <div className="item-value">₹ {fundsData.details.span.toFixed(2)}</div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">Delivery margin</div>
                    <div className="item-value">₹ {fundsData.details.deliveryMargin.toFixed(2)}</div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">Exposure</div>
                    <div className="item-value">₹ {fundsData.details.exposure.toFixed(2)}</div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">Option premium</div>
                    <div className="item-value">₹ {fundsData.details.optionPremium.toFixed(2)}</div>
                </div>
                
                <div className="section-divider"></div>
                
                <div className="section-title">Collateral</div>
                
                <div className="funds-item">
                    <div className="item-label">Collateral (Liquid funds)</div>
                    <div className="item-value">₹ {fundsData.collateral.liquidFunds.toFixed(2)}</div>
                </div>
                
                <div className="funds-item">
                    <div className="item-label">Collateral (Equity)</div>
                    <div className="item-value">₹ {fundsData.collateral.equity.toFixed(2)}</div>
                </div>
                
                <div className="funds-item highlight">
                    <div className="item-label">Total collateral</div>
                    <div className="item-value">₹ {fundsData.collateral.total.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
};

export default Funds;
