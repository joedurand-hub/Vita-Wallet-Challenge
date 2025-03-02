/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { apiService } from "../services";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false,
        error: null
    });

    const login = async (credentials) => {
        try {
            const { data, headers } = await apiService.signIn(credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: data });

            if (headers) {
                const { "access-token": accessToken, client, expiry, uid } = headers;
                const now = Math.floor(Date.now() / 1000);
                const expiresInSeconds = expiry - now;
                const expiresInDays = expiresInSeconds / (60 * 60 * 24);

                Cookies.set("access-token", accessToken, { expires: expiresInDays, secure: true, sameSite: "Strict" });
                Cookies.set("client", client, { expires: expiresInDays, secure: true, sameSite: "Strict" });
                Cookies.set("expiry", expiry, { expires: expiresInDays, secure: true, sameSite: "Strict" });
                Cookies.set("uid", uid, { expires: expiresInDays, secure: true, sameSite: "Strict" });
            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAIL", payload: error });
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