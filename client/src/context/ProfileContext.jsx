import { useReducer, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case "SET_PROFILES":
            return {
                profiles: action.payload
            }
        case "CREATE_PROFILE":
            return {
                // profiles: [action.payload, ...state.profiles]
                profiles: action.payload
            }
        //TODO: UPDATE_PROFILE switch case

        default:
            return state
    }
}

export const ProfilesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProfileReducer, {
        profiles: null
    })

    return (
        <ProfileContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProfileContext.Provider>
    )
}