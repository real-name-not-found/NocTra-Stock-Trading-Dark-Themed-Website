import React from "react";
import "./Brokerage.css";

function Brokerage() {
  return (
    <div className="brokerage-container">
      <h2 className="brokerage-title">Brokerage & Other Charges</h2>
      
      <div className="table-container">
        <table className="brokerage-table">
          <thead>
            <tr>
              <th className="category-header">Category</th>
              <th>Equity Delivery</th>
              <th>Equity Intraday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="category-cell">Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
            </tr>
            <tr>
              <td className="category-cell">STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
            </tr>
            <tr>
              <td className="category-cell">Transaction charges</td>
              <td>
                NSE: 0.00297%<br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297%<br />
                BSE: 0.00375%
              </td>
            </tr>
            <tr>
              <td className="category-cell">GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td className="category-cell">SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td className="category-cell">Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="brokerage-note">
        Note: All statutory charges are levied as per the applicable rates and may change from time to time.
      </p>
    </div>
  );
}

export default Brokerage;
