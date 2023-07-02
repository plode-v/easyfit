import useAuthContext from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { apiKey } from "../constants";

const useLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        try {
            const response = await axios.post(
                `${apiKey}/api/users/login`,
                {
                    email,
                    password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const data = response.data;
            if (response.status === 200) {
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
        } catch (err) {
            setError(err.response.data.error)
            setIsLoading(null)
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