import { useState } from "react";
import useAuthContext from "./useAuthContext"
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const { dispatch } = useAuthContext();

    const register = async (username, email, password) => {
        setIsLoading(false);
        setError(null);

        const response = await fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
            console.log(error)
            setSuccess(false)
        }
        if (response.ok) {
            setIsLoading(true)
            localStorage.setItem("user", JSON.stringify(data))

            dispatch({ type: "LOGIN", payload: data })
            setIsLoading(false);
            setError(null)
            setSuccess("Register Successful")
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }
    }

    return {
        register,
        error,
        isLoading,
        success
    }
}

export default useRegister;