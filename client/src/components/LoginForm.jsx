import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(true);

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });

            const userData = response.data;
            login(userData.username);
            setSuccess(true);
            navigate("/")
        } catch (err) {
            setSuccess(false);
            setUsername("")
            setPassword("")
            console.error(err)
        }
    }

    return (
        <div className="w-full lg:w-[1300px] justify-center flex items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white sm:h-[550px] h-2/3 lg:w-1/2 w-4/5 flex flex-col items-center justify-evenly rounded-xl">
                <h1 className="flex font-[600] text-[32px] pt-10">EasyFit</h1>
                {!success && <span className="text-red-500">Invalid username or password</span>}
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
        </div>
    )
}

export default LoginForm