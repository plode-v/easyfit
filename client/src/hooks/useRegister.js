import { useState } from "react";
import useAuthContext from "./useAuthContext"
import { useNavigate } from "react-router-dom";
// import { apiKey } from "../constants";
import axios from "axios";

const useRegister = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const { dispatch } = useAuthContext();

    const register = async (username, email, password) => {
        setIsLoading(false);
        setError(null);

        const response = await axios.post(//`${apiKey}/api/users/register`
            "http://localhost:3000/api/users/register", {
                username,
                email,
                password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = response.data;

        if (response.status !== 200) {
            setIsLoading(false);
            setError(data.error);
            console.log(error)
            setSuccess(false)
        }
        if (response.status === 200) {
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