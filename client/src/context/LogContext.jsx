import { createContext, useReducer } from "react";

export const LogsContext = createContext();

export const logReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGS" :
            return {
                logs: action.payload
            }
        case "ADD_LOGS" :
            return {
                logs: [action.payload, ...state.logs]
            }
        case "UPDATE_LOGS" :
            return {
                logs: state.logs.map(log => {
                    if (log._id === action.payload._id) {
                        return {
                            ...log,
                            amount: action.payload.amount
                        }
                    }
                    return log;
                })
            }
        case "DELETE_LOGS" :
            return {
                logs: state.logs.filter(log => log._id !== action.payload._id)
            }
        default :
            return state
    }
}

export const LogsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(logReducer, {
        logs: []
    })

    return <LogsContext.Provider value={{ ...state, dispatch }}>
        {children}
    </LogsContext.Provider>
}