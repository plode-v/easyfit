import { createContext, useReducer } from "react";

export const FoodsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const foodsReducer = (state, action) => {
    switch (action.type) {
        case "SET_FOODS":
            return {
                foods: action.payload
            }
        case "CREATE_FOODS":
            return {
                foods: [action.payload, ...state.foods]
            }
        default:
            return state
    }
}

export const FoodsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(foodsReducer, {
        foods: null
    })

    return (
        <FoodsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FoodsContext.Provider>
    )
}