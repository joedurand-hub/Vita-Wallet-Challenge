import axios from "axios"
import { BASE_URL, SIGN_IN, GET_PROFILE, GET_USER_PRICES, GET_TRANSACTIONS, POST_TRANSACTION } from "../constants";

export const apiService = {
    signIn: async (credentials) => {
      const response = await axios.post(`${BASE_URL}${SIGN_IN}`, credentials);
      return response.data;
    },
    
    getProfile: async (token) => {
      const response = await axios.get(`${BASE_URL}${GET_PROFILE}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  
    getUserPrices: async () => {
      const response = await axios.get(`${BASE_URL}${GET_USER_PRICES}`);
      return response.data;
    },
  
    getTransactions: async (token) => {
      const response = await axios.get(`${BASE_URL}${GET_TRANSACTIONS}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  
    postTransaction: async (data, token) => {
      const response = await axios.post(`${BASE_URL}${POST_TRANSACTION}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  };