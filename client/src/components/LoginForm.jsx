import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white sm:h-[550px] h-2/3 lg:w-[300px] w-4/5 flex flex-col items-center justify-evenly rounded-xl">
            <h1 className="flex font-[600] text-[32px] py-10">EasyFit</h1>
            <div className="flex flex-col w-3/4 gap-5">
                <div className="flex flex-col">
                    <label className="my-1">Username:</label>
                    <input 
                        className="border py-2 px-3 rounded-md focus:outline-none"
                        type="text"
                        placeholder="John23"
                        value={username}
                        onChange={e => setUsername(e.target.value)}    
                    />
                </div>
                <div className="flex flex-col pb-5">
                    <label className="my-1">Password:</label>
                    <input 
                        className="border py-2 px-3 rounded-md focus:outline-none"
                        type="text"
                        placeholder="John123"
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                    />
                    <p className="flex justify-end pt-2"><Link to="/register" className="text-[12px] underline tracking-tight">No account?</Link></p>
                </div>
                <button className="rounded-lg py-3 flex items-center justify-center uppercase font-[700] bg-green-600 text-white hover:scale-105 duration-100" type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm