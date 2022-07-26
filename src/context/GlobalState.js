import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Initail state
const initailState = {
    transactions: []
}

//Create context

export const GlobalContext = createContext(initailState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initailState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>{children}</GlobalContext.Provider>);
}