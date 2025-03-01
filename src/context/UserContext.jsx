/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { apiService } from "../services";
import { userReducer } from "../reducers/userReducer";
import { useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const initialState = {
        userData: null
    }
    const [state, dispatch] = useReducer(userReducer, initialState);

    const getProfile = async () => {
        const { data } = await apiService.getProfile()
        dispatch({ type: "USER_DATA", payload: data });
    }


    useEffect(() => {
        if (Cookies.get("access-token")) {
            getProfile();
        }
    }, []);

    return (
        <UserContext.Provider value={{ ...state }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };