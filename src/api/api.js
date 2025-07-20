import axios from 'axios';

// ⚠️ Replace with your local IP or hosted backend
const API_BASE_URL = 'http://192.168.1.5:8080'; 

// ========== USERS ==========

// Get all users
export const getAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/users`);
  return response.data;
};

// Seed mock users (for dev/testing)
export const seedMockUsers = async () => {
  const response = await axios.post(`${API_BASE_URL}/api/users/seed`);
  return response.data;
};

// ========== NOTIFICATIONS ==========

// Send push notification using FCM token
export const sendPushToToken = async ({ token, title, message }) => {
  const response = await axios.post(`${API_BASE_URL}/api/notify`, {
    token,
    title,
    message
  });
  return response.data;
};

// Send notification by user ID (if FCM token is stored in DB)
export const sendPushToUser = async (userId, { title, message }) => {
  const response = await axios.post(`${API_BASE_URL}/api/notify/user/${userId}`, {
    title,
    message
  });
  return response.data;
};

// Get all notifications sent to a user
export const getUserNotifications = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/api/notify/user/${userId}/notifications`);
  return response.data;
};
