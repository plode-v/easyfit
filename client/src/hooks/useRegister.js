import { useState } from "react"
import { useAuthContext } from "."

const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const { dispatch } = useAuthContext();

    const register = async (email, password, username) => {
        setIsLoading(false);
        setSuccess(false);
        setError(false);

        const response = await fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({ username, email, password })
        })
        const data = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(data.error)
        } else {
            setIsLoading(true);
            localStorage.setItem("user", JSON.stringify(data))

            // update useContext
            dispatch({ type: "LOGIN", payload: data})
            setIsLoading(false);
            setSuccess(true);
        }
    }

    return {
        error,
        isLoading,
        success,
        register
    }

}

export default useRegister