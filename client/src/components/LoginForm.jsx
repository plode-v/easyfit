import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", { username, password });
            const { accessToken, refreshToken } = response.data;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            navigate("/");

        } 
        catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}    
            />
            <input 
                type="text"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}    
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm