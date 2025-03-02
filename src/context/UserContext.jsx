/* eslint-disable react/prop-types */
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
    const [state, dispatch] = useReducer(userReducer, initialState);

    const getProfile = async () => {
        try {
            const { data } = await apiService.getProfile();
            dispatch({ type: "USER_DATA", payload: data });
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
        getProfile();
        getPrices()

        const interval = setInterval(() => {
            getPrices()
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <UserContext.Provider value={{ ...state }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };