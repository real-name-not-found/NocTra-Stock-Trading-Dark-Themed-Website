import axios from 'axios';

// Subscribers that want to be notified when stock prices are updated
const subscribers = [];

// Function to subscribe to stock price updates
export const subscribeToStockPriceUpdates = (callback) => {
  subscribers.push(callback);
  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };
};

// Function to notify all subscribers about changes
export const notifyStockPriceUpdate = (data) => {
  // Notify all subscribers that stock prices have been updated
  subscribers.forEach(callback => callback(data));
};

// Function to fetch latest stock prices
export const fetchStockPrices = async () => {
  try {
    const response = await axios.get('http://localhost:3002/stockPrices');
    return response.data;
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    return [];
  }
};

// Start real-time updates with interval
let updateInterval = null;

export const startRealtimeUpdates = (intervalMs = 3000) => {
  // Clear any existing interval
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  
  // Set up new interval
  updateInterval = setInterval(async () => {
    try {
      const stockData = await fetchStockPrices();
      notifyStockPriceUpdate(stockData);
    } catch (error) {
      console.error('Error in real-time stock update:', error);
    }
  }, intervalMs);
  
  return () => {
    if (updateInterval) {
      clearInterval(updateInterval);
      updateInterval = null;
    }
  };
};

export const stopRealtimeUpdates = () => {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
}; 