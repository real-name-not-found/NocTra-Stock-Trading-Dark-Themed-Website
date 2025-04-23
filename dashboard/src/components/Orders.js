import React, { useState, useEffect } from "react";
import "./Orders.css";
import { fetchOrders, subscribeToOrdersUpdates } from "../services/OrdersService";
import { notifyHoldingsUpdate } from "../services/HoldingsService";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch orders on component mount and when orders are updated
    useEffect(() => {
        const loadOrders = async () => {
            setIsLoading(true);
            const ordersData = await fetchOrders();
            setOrders(ordersData);
            setIsLoading(false);
        };

        loadOrders();

        // Subscribe to orders updates
        const unsubscribe = subscribeToOrdersUpdates(loadOrders);
        
        // Clean up subscription on unmount
        return () => unsubscribe();
    }, []);

    // Format date to a readable format
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    // Calculate total value of an order
    const calculateTotal = (qty, price) => {
        return (qty * price).toFixed(2);
    };

    // Handle refresh button click
    const handleRefresh = async () => {
        setIsLoading(true);
        const ordersData = await fetchOrders();
        setOrders(ordersData);
        setIsLoading(false);
    };

    return (
        <div className="orders-container">
            <div className="orders-header">
                <div className="header-with-actions">
                    <h2>Order History</h2>
                    {isLoading ? (
                        <div className="loading-indicator">Loading...</div>
                    ) : (
                        <button className="refresh-button" onClick={handleRefresh}>
                            Refresh
                        </button>
                    )}
                </div>
            </div>

            {orders.length === 0 && !isLoading ? (
                <div className="no-orders">
                    <p>No orders have been placed yet.</p>
                </div>
            ) : (
                <div className="orders-table-container">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Date & Time</th>
                                <th>Symbol</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Price (₹)</th>
                                <th>Total (₹)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr 
                                    key={order._id || index} 
                                    className={order.mode === "BUY" ? "buy-order" : "sell-order"}
                                >
                                    <td>{formatDate(order.createdAt)}</td>
                                    <td>{order.name}</td>
                                    <td className={order.mode === "BUY" ? "buy-type" : "sell-type"}>
                                        {order.mode}
                                    </td>
                                    <td>{order.qty}</td>
                                    <td>₹{order.price.toFixed(2)}</td>
                                    <td>₹{calculateTotal(order.qty, order.price)}</td>
                                    <td>
                                        <span className="order-status-executed">EXECUTED</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Orders;
