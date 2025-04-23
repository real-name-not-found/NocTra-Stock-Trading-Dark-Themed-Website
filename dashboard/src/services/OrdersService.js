import axios from 'axios';

// Subscribers that want to be notified when orders are updated
const subscribers = [];

// Function to subscribe to orders updates
export const subscribeToOrdersUpdates = (callback) => {
  subscribers.push(callback);
  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };
};

// Function to notify all subscribers about changes
export const notifyOrdersUpdate = () => {
  // Notify all subscribers that orders have been updated
  subscribers.forEach(callback => callback());
};

// Function to fetch all orders
export const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:3002/allOrders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}; 