import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error, success } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();


        await login(email.toLowerCase(), password)
        console.log(error)
    }

    return (
        <div className="w-full lg:w-[1300px] justify-center flex items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white sm:h-[550px] h-2/3 lg:w-1/2 w-4/5 flex flex-col items-center justify-evenly rounded-xl">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="flex font-[600] text-[32px] pt-10">EasyFit</h1>
                    {error && <div className="text-red-500 bg-red-200 mt-1 px-3 py-2 rounded-md">{error}</div>}
                    {success && <div className="text-green-500 bg-green-200 mt-1 px-3 py-2 rounded-md">{success}</div>}
                </div>
                <div className="flex flex-col w-3/4 gap-5">
                    <div className="flex flex-col">
                        <label className="my-1">Email:</label>
                        <input
                            autoFocus 
                            className="border py-2 px-3 rounded-md focus:outline-none"
                            type="email"
                            placeholder="john@doe.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col pb-5">
                        <label className="my-1">Password:</label>
                        <input 
                            className="border py-2 px-3 rounded-md focus:outline-none"
                            type="password"
                            placeholder="John123!"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <p className="flex justify-end pt-2"><Link to="/register" className="text-[12px] underline tracking-tight">No account?</Link></p>
                    </div>
                    <button className="rounded-lg py-3 flex items-center justify-center uppercase font-[700] bg-green-600 text-white hover:scale-105 duration-100" type="submit" disabled={isLoading}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm