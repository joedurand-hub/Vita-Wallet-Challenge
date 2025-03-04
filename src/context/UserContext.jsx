/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { apiService } from "../services";
import { userReducer } from "../reducers/userReducer";
import { useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const initialState = {
        userData: null,
        userPrices: {}
    }
    const cookie = Cookies.get("access-token")
    const [state, dispatch] = useReducer(userReducer, initialState);

    const getProfile = async () => {
        try {
            const { data: profile } = await apiService.getProfile();
            dispatch({ type: "USER_DATA", payload: profile });
        } catch (error) {
            console.error("Error obteniendo el perfil:", error);
        }
    }

    const getPrices = async () => {
        try {
            const data = await apiService.getUserPrices();
            dispatch({ type: "USER_PRICES", payload: data });
        } catch (error) {
            console.error("Error obteniendo los precios:", error);
        }
    }

    useEffect(() => {
        if (cookie) {
            getProfile();
            getPrices()


            const interval = setInterval(() => {
                getPrices()
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [cookie]);

    return (
        <UserContext.Provider value={{ ...state, getPrices }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };