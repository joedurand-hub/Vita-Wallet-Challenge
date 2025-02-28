/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { apiService } from "../services";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false,
    });

    const login = async (credentials) => {
        try {
            const userData = await apiService.signIn(credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        } catch (error) {
            console.error("Error en login:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };