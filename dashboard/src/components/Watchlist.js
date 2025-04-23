import React, { useState, useEffect, useRef } from "react";
import "./Watchlist.css";
import { Tooltip, Grow } from '@mui/material';
import { watchlist as initialWatchlist } from "../data_folder/data";
import axios from "axios";
import { fetchHoldings, notifyHoldingsUpdate } from '../services/HoldingsService';
import { notifyOrdersUpdate } from '../services/OrdersService';
import { subscribeToStockPriceUpdates, startRealtimeUpdates, stopRealtimeUpdates } from '../services/StockPriceService';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShowChartIcon from '@mui/icons-material/ShowChart';

// WatchlistItem component for individual items
const WatchlistItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showBuyMenu, setShowBuyMenu] = useState(false);
    const [showSellMenu, setShowSellMenu] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(item.price);
    const [orderStatus, setOrderStatus] = useState(null);
    const [userHoldings, setUserHoldings] = useState([]);
    const [availableQuantity, setAvailableQuantity] = useState(0);
    const [loadingHoldings, setLoadingHoldings] = useState(false);
    const menuRef = useRef(null);
    const [priceAnimation, setPriceAnimation] = useState(null);
    const previousPrice = useRef(item.price);
    
    // Update price when item price changes from real-time updates
    useEffect(() => {
        if (!showBuyMenu && !showSellMenu) {
            setPrice(item.price);
            
            // Add animation class based on price change
            if (item.price > previousPrice.current) {
                setPriceAnimation('price-up-animation');
            } else if (item.price < previousPrice.current) {
                setPriceAnimation('price-down-animation');
            }
            
            // Set timeout to remove animation class
            const timeout = setTimeout(() => {
                setPriceAnimation(null);
            }, 2000);
            
            // Update previous price ref
            previousPrice.current = item.price;
            
            return () => clearTimeout(timeout);
        }
    }, [item.price, showBuyMenu, showSellMenu]);
    
    // Calculate total based on quantity and price
    const calculateTotal = () => {
        return (quantity * price).toFixed(2);
    };
    
    // Fetch user holdings when sell menu is opened
    useEffect(() => {
        if (showSellMenu) {
            fetchUserHoldings();
        }
    }, [showSellMenu]);
    
    // Fetch user's holdings to check available quantity
    const fetchUserHoldings = async () => {
        try {
            setLoadingHoldings(true);
            const response = await axios.get("http://localhost:3002/allHoldings");
            const holdings = response.data;
            
            if (holdings) {
                setUserHoldings(holdings);
                // Find current stock in holdings
                const currentStockHolding = holdings.find(
                    holding => holding.name.toLowerCase() === item.name.toLowerCase()
                );
                
                if (currentStockHolding) {
                    setAvailableQuantity(currentStockHolding.qty);
                } else {
                    setAvailableQuantity(0);
                }
            }
            setLoadingHoldings(false);
        } catch (error) {
            console.error("Error fetching holdings:", error);
            setAvailableQuantity(0);
            setLoadingHoldings(false);
        }
    };
    
    // Add click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowBuyMenu(false);
                setShowSellMenu(false);
                setIsHovered(false); // Reset hover state when clicking outside
                resetForm();
            }
        };

        // Add event listener when menu is shown
        if (showBuyMenu || showSellMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showBuyMenu, showSellMenu]);
    
    const handleBuyClick = (e) => {
        e.stopPropagation();
        setShowBuyMenu(true);
        setShowSellMenu(false);
        setPrice(item.price);
        setOrderStatus(null);
    };

    const handleSellClick = (e) => {
        e.stopPropagation();
        setShowSellMenu(true);
        setShowBuyMenu(false);
        setPrice(item.price);
        setOrderStatus(null);
        setQuantity(1); // Reset quantity when opening sell menu
    };

    const handleCloseMenu = (e) => {
        if (e) e.preventDefault();
        setShowBuyMenu(false);
        setShowSellMenu(false);
        setIsHovered(false); // Reset hover state when closing menu
        resetForm();
    };
    
    const resetForm = () => {
        setQuantity(1);
        setPrice(item.price);
        setOrderStatus(null);
    };
    
    const handleQuantityChange = (e) => {
        let newQty = parseInt(e.target.value) || 1;
        
        // If in sell menu, limit quantity to available shares
        if (showSellMenu && newQty > availableQuantity) {
            newQty = availableQuantity;
        }
        
        setQuantity(newQty);
    };
    
    const handlePriceChange = (e) => {
        setPrice(parseFloat(e.target.value) || item.price);
    };
    
    const handleBuySubmit = async () => {
        try {
            setOrderStatus("Processing...");
            
            // Simplified data structure with just the required fields
            const orderData = {
                name: item.name,        // stock name
                qty: quantity,          // quantity
                price: price,           // price per share
                mode: "BUY"             // order type (buy/sell)
            };
            
            console.log("Sending order data:", orderData);
            
            // Send the order directly to the backend
            const response = await axios.post('http://localhost:3002/newOrder', orderData);
            
            if (response.data) {
                setOrderStatus("Order placed successfully!");
                // Notify all subscribers to refresh holdings and orders
                notifyHoldingsUpdate();
                notifyOrdersUpdate();
                setTimeout(() => {
                    handleCloseMenu();
                }, 2000);
            }
        } catch (error) {
            console.error("Error placing order:", error);
            setOrderStatus("Failed to place order. Please try again.");
        }
    };
    
    const handleSellSubmit = async () => {
        try {
            // First check if user has enough quantity to sell
            if (quantity > availableQuantity) {
                setOrderStatus("Not enough shares available to sell!");
                return;
            }
            
            setOrderStatus("Processing...");
            
            const orderData = {
                name: item.name,        // stock name
                qty: quantity,          // quantity 
                price: price,           // price per share
                mode: "SELL"            // order type (sell)
            };
            
            console.log("Sending sell order data:", orderData);
            
            // Send the order directly to the backend
            const response = await axios.post('http://localhost:3002/newOrder', orderData);
            
            if (response.data) {
                setOrderStatus("Sell order placed successfully!");
                // Notify all subscribers to refresh holdings and orders
                notifyHoldingsUpdate();
                notifyOrdersUpdate();
                setTimeout(() => {
                    handleCloseMenu();
                }, 2000);
            }
        } catch (error) {
            console.error("Error placing sell order:", error);
            setOrderStatus("Failed to place sell order. Please try again.");
        }
    };
    
    return (
        <div 
            className={`watchlist-item ${priceAnimation || ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="col symbol-col">
                {item.name}
            </div>
            <div className="col price-col">₹{item.price}</div>
            <div className={`col change-col ${item.isDown ? 'negative' : 'positive'}`}>
                {item.isDown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                {item.percent}
            </div>
            
            {isHovered && !showBuyMenu && !showSellMenu && (
                <Grow in={isHovered}>
                    <div className="watchlist-item-options">
                        <div className="option-action buy-action" onClick={handleBuyClick}>
                            BUY
                        </div>
                        <div className="option-action sell-action" onClick={handleSellClick}>
                            SELL
                        </div>
                        <Tooltip title="Chart" arrow placement="top">
                            <div className="option-icon chart-icon">
                                <ShowChartIcon fontSize="small" />
                            </div>
                        </Tooltip>
                    </div>
                </Grow>
            )}

            {showBuyMenu && (
                <div className="buy-menu" ref={menuRef} onClick={(e) => e.stopPropagation()}>
                    <h3>Buy {item.name}</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="buy-menu-row">
                            <div className="buy-menu-field">
                                <label>Quantity</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                            </div>
                            <div className="buy-menu-field">
                                <label>Price (₹)</label>
                                <input 
                                    type="number" 
                                    step="0.01" 
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </div>
                        </div>
                        <div className="buy-menu-total">
                            Total: ₹{calculateTotal()}
                        </div>
                        {orderStatus && (
                            <div className={`order-status ${orderStatus.includes("Failed") || orderStatus.includes("Not enough") ? "error" : ""}`}>
                                {orderStatus}
                            </div>
                        )}
                        <div className="buy-menu-actions">
                            <button type="button" onClick={handleCloseMenu}>Cancel</button>
                            <button 
                                type="button" 
                                className="confirm-buy"
                                onClick={handleBuySubmit}
                                disabled={orderStatus === "Processing..."}
                            >
                                {orderStatus === "Processing..." ? "Processing..." : "Confirm"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {showSellMenu && (
                <div className="sell-menu" ref={menuRef} onClick={(e) => e.stopPropagation()}>
                    <h3>Sell {item.name}</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {loadingHoldings ? (
                            <div className="loading-holdings">Loading your holdings...</div>
                        ) : (
                            <>
                                <div className="available-shares">
                                    Available: {availableQuantity} shares
                                </div>
                                <div className="buy-menu-row">
                                    <div className="buy-menu-field">
                                        <label>Quantity</label>
                                        <input 
                                            type="number" 
                                            min="1"
                                            max={availableQuantity} 
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            disabled={availableQuantity === 0}
                                        />
                                    </div>
                                    <div className="buy-menu-field">
                                        <label>Price (₹)</label>
                                        <input 
                                            type="number" 
                                            step="0.01" 
                                            value={price}
                                            onChange={handlePriceChange}
                                            disabled={availableQuantity === 0}
                                        />
                                    </div>
                                </div>
                                <div className="buy-menu-total">
                                    Total: ₹{calculateTotal()}
                                </div>
                            </>
                        )}
                        
                        {orderStatus && (
                            <div className={`order-status ${orderStatus.includes("Failed") || orderStatus.includes("Not enough") ? "error" : ""}`}>
                                {orderStatus}
                            </div>
                        )}
                        
                        {availableQuantity === 0 && !loadingHoldings && !orderStatus && (
                            <div className="order-status error">
                                You don't own any shares of {item.name}
                            </div>
                        )}
                        
                        <div className="buy-menu-actions">
                            <button type="button" onClick={handleCloseMenu}>Cancel</button>
                            <button 
                                type="button" 
                                className="confirm-sell"
                                onClick={handleSellSubmit}
                                disabled={loadingHoldings || availableQuantity === 0 || orderStatus === "Processing..."}
                            >
                                {orderStatus === "Processing..." ? "Processing..." : "Confirm"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

const Watchlist = () => {
    const [searchText, setSearchText] = useState("");
    const [watchlistItems, setWatchlistItems] = useState(initialWatchlist);
    const maxWatchlistItems = 50;
    
    // Set up real-time updates on component mount
    useEffect(() => {
        // Start real-time updates
        const stopUpdates = startRealtimeUpdates(3000); // Update every 3 seconds
        
        // Subscribe to updates
        const unsubscribe = subscribeToStockPriceUpdates((updatedStocks) => {
            setWatchlistItems(currentItems => {
                // Create a map of current items for quick lookup
                const itemMap = {};
                currentItems.forEach(item => {
                    itemMap[item.name] = item;
                });
                
                // Update prices for existing items
                return updatedStocks.map(stock => {
                    // If the stock exists in our current watchlist, update it
                    if (itemMap[stock.name]) {
                        return {
                            ...stock,
                            // Keep any additional properties that might exist in the current item
                            ...Object.keys(itemMap[stock.name])
                                .filter(key => !['name', 'price', 'percent', 'isDown'].includes(key))
                                .reduce((obj, key) => {
                                    obj[key] = itemMap[stock.name][key];
                                    return obj;
                                }, {})
                        };
                    }
                    return stock;
                });
            });
        });
        
        // Clean up on unmount
        return () => {
            unsubscribe();
            stopUpdates();
        };
    }, []);
    
    // Filter watchlist items based on search
    const filteredItems = watchlistItems.filter(item => 
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="watchlist-container">
            <div className="watchlist-header">
                <h2>Watchlist</h2>
                <div className="watchlist-count">
                    {watchlistItems.length}/{maxWatchlistItems}
                </div>
            </div>
            
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search ex: infy, bse, nifty weekly, gold mcx"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            
            <div className="watchlist-table">
                <div className="watchlist-table-header">
                    <div className="col symbol-col">Symbol</div>
                    <div className="col price-col">LTP</div>
                    <div className="col change-col">Change</div>
                </div>
                
                <div className="watchlist-items">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <WatchlistItem key={`${item.name}-${index}`} item={item} />
                        ))
                    ) : (
                        <div className="empty-watchlist">
                            <p>No items in watchlist</p>
                            <p className="empty-instruction">Search and add symbols to your watchlist</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Watchlist;
