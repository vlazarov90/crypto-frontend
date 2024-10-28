import { createStore } from 'vuex';
import axios from 'axios';
import api from '../services/api'

// Create and export the store
export default createStore({
  state: {
    historicalData: null,
    token: localStorage.getItem('token') || null,
    user: null, // To store user information (optional)
    registrationError: null, // To store registration error messages
  },
  mutations: {
    SET_HISTORICAL_DATA(state, data) {
      state.historicalData = data; // Mutation to update historical data
    },
    SET_TOKEN(state, token) {
      state.token = token;
      if (token) {
        localStorage.setItem('token', token); // Save token to local storage
      } else {
        localStorage.removeItem('token'); // Remove token on logout
      }
    },
    SET_USER(state, user) {
      state.user = user; // Set user information
    },
    SET_REGISTRATION_ERROR(state, error) {
      state.registrationError = error; // Set registration error
    },
  },
  actions: {
    async fetchHistoricalData({ commit }) {
      try {
        const response = await api.get('/crypto/history');
        commit('SET_HISTORICAL_DATA', response.data); // Commit the data to the store
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await api.post('/auth/login', credentials);
        const token = response.data.token;
        commit('SET_TOKEN', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set default header for authorization
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await api.post('/auth/register', userData);
        const token = response.data.token; // Assuming the token is returned
        commit('SET_TOKEN', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set default header for authorization
        commit('SET_USER', response.data.user); // Store user info if needed
      } catch (error) {
        console.error('Registration error:', error);
        commit('SET_REGISTRATION_ERROR', error.response.data.message || 'Registration failed'); // Set registration error message
      }
    },
    logout({ commit }) {
      commit('SET_TOKEN', null);
      delete axios.defaults.headers.common['Authorization']; // Remove the token from headers
    },
  },
  getters: {
    historicalData: (state) => state.historicalData,
    isAuthenticated: (state) => !!state.token, // Check if the user is authenticated
    token: (state) => state.token,
    registrationError: (state) => state.registrationError, // Getter for registration error
  },
});