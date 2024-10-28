import axios from 'axios';
import router from '../router'; // Adjust if your router path is different

// Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:5122/api', // Replace with your actual API base URL
});

// Request interceptor to attach token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle 401
api.interceptors.response.use(
  response => response, // Pass through successful responses
  error => {
    if (error.response && error.response.status === 401) {
      // Remove any invalid token
      localStorage.removeItem('token');
      
      // Redirect to login page
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default api;