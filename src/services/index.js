import axios from "axios"
import Cookies from "js-cookie"
import { BASE_URL, SIGN_IN, GET_PROFILE, GET_USER_PRICES, GET_TRANSACTIONS, POST_TRANSACTION, APP_NAME } from "../constants";

const headers = { 
  "app-name": APP_NAME,
  "access-token": Cookies.get("access-token"),
  "uid": Cookies.get("uid"),
  "expiry": Cookies.get("expiry"),
  "client": Cookies.get("client"),
 }

export const apiService = {
    signIn: async (credentials) => {
      const response = await axios.post(`${BASE_URL}${SIGN_IN}`, credentials, {
        headers: {
            "Content-Type": "application/json",
            "app-name": APP_NAME
        }});
        return { data: response.data, headers: response.headers };
    },
    
    getProfile: async () => {
      const response = await axios.get(`${BASE_URL}${GET_PROFILE}`, {
        headers: headers
      });
      return {data: response.data};
    },
  
    getUserPrices: async () => {
      const response = await axios.get(`${BASE_URL}${GET_USER_PRICES}`, {
        headers: headers
      });
      return response.data;
    },
  
    getTransactions: async () => {
      const response = await axios.get(`${BASE_URL}${GET_TRANSACTIONS}`, {
        headers: headers
      });
      return response.data;
    },
  
    postTransaction: async (data) => {
      const response = await axios.post(`${BASE_URL}${POST_TRANSACTION}`, data, {
        headers: headers
      });
      return response.data;
    },
  };