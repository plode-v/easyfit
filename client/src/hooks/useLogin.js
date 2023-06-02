import useAuthContext from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { port } from "../constants";

const useLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {

        const response = await fetch(`${port}/api/users/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const data = await response.json();

        if (!response.ok) {
            setError(data.error)
            setIsLoading(null);
        }
        if (response.ok) {
            setIsLoading(true);
            setError(null);
            localStorage.setItem("user", JSON.stringify(data))
            
            dispatch({ type: "LOGIN", payload: data})
            setIsLoading(null);
            setSuccess("Login Successful");
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }
    }

    return {
        error,
        success,
        isLoading,
        login
    }
}

export default useLogin;