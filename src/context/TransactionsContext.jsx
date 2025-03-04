/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { apiService } from "../services";
import { useEffect } from "react";
import { transactionsReducer } from "../reducers/transactionsReducer";

const TransactionsContext = createContext()

const TransactionsProvider = ({ children }) => {
    const initialState = {
        transactionsData: [],
        transactionCreated: null
    }

    const [state, dispatch] = useReducer(transactionsReducer, initialState);

    const getTransactions = async () => {
        const { data } = await apiService.getTransactions()
        console.log("transactions", data)
        dispatch({ type: "GET_TRANSACTIONS", payload: data });
    }

    const createTransaction = async (transaction) => {
        const data = await apiService.postTransaction(transaction)
        dispatch({ type: "CREATE_TRANSACTION", payload: data })
    }

    useEffect(() => {
        if (Cookies.get("access-token") !== undefined) {
            getTransactions();
        }
    }, []);

    return (
        <TransactionsContext.Provider value={{ ...state, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContext, TransactionsProvider };