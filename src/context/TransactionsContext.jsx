/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { apiService } from "../services";
import { useEffect } from "react";
import { transactionsReducer } from "../reducers/transactionsReducer";

const TransactionsContext = createContext()

const TransactionsProvider = ({ children }) => {
    const initialState = {
        transactionsData: []
    }

    const [state, dispatch] = useReducer(transactionsReducer, initialState);

    const getTransactions = async () => {
        const { data } = await apiService.getTransactions()
        dispatch({ type: "GET_TRANSACTIONS", payload: data });
    }

    useEffect(() => {
        if (Cookies.get("access-token")) {
            getTransactions();
        }
    }, []);

    return (
        <TransactionsContext.Provider value={{ ...state }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContext, TransactionsProvider };