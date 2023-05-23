import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    const login = (username) => {
        // login logic using axios and whatnot (api call to verify credentials).
        // If login successful, update the authenticated state
        setIsAuthenticated(true);
        setUsername(username);
    };

    const logout = () => {
        // Perform logout logic (clearing local storage, API call to invalidate token)
        setIsAuthenticated(false);
        setUsername("");
    };

    const authContextValue = {
        isAuthenticated,
        username,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };