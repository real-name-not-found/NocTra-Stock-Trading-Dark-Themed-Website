import axios from 'axios';

// Subscribers that want to be notified when holdings are updated
const subscribers = [];

// Keep track of when the last manual refresh was requested
let lastManualRefresh = 0;
let autoRefreshInterval = null;

// Function to subscribe to holdings updates
export const subscribeToHoldingsUpdates = (callback) => {
  subscribers.push(callback);
  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };
};

// Function to notify all subscribers about changes
export const notifyHoldingsUpdate = (isAutoRefresh = false) => {
  // Notify all subscribers that holdings have been updated
  subscribers.forEach(callback => callback(isAutoRefresh));
};

// Function to fetch all holdings
export const fetchHoldings = async () => {
  try {
    const response = await axios.get('http://localhost:3002/allHoldings');
    return response.data;
  } catch (error) {
    console.error('Error fetching holdings:', error);
    return [];
  }
};

// Update holdings after a transaction
export const updateHolding = async (orderData) => {
    try {
        // Send the order to the backend
        const response = await axios.post('http://localhost:3002/newOrder', orderData);
        
        // Wait a short time to ensure the backend has processed the order
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Notify all subscribers to update their holdings data (not an auto-refresh)
        notifyHoldingsUpdate(false);
        
        // Update last manual refresh time
        lastManualRefresh = Date.now();
        
        return response.data;
    } catch (error) {
        console.error("Error updating holdings:", error);
        throw error;
    }
};

// Start automatic refresh of holdings at regular intervals (less frequently than stock prices)
export const startHoldingsAutoRefresh = (intervalMs = 5000) => {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
  }
  
  autoRefreshInterval = setInterval(async () => {
    try {
      // Only auto-refresh if it's been more than 3 seconds since last manual refresh
      if (Date.now() - lastManualRefresh > 3000) {
        notifyHoldingsUpdate(true); // Flag this as an auto-refresh
      }
    } catch (error) {
      console.error('Error in holdings auto-refresh:', error);
    }
  }, intervalMs);
  
  return () => {
    if (autoRefreshInterval) {
      clearInterval(autoRefreshInterval);
      autoRefreshInterval = null;
    }
  };
};

// Manually refresh holdings
export const refreshHoldings = () => {
  lastManualRefresh = Date.now();
  notifyHoldingsUpdate(false); // Not an auto-refresh
}; 