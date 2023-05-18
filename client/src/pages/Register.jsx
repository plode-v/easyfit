import { useState } from "react"
import axios from "axios";

import { apiUrl } from ".., /constants"

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("");
    const [protectedData, setProtectedData] = useState("");

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${apiUrl}/register`, { username, password });
            console.log(response.data);
        } catch (err) {
            console.error("Error registering:", err.response.data)
        }
    }

    return (
        <div>Register</div>
    )
}

export default Register