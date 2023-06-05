import { Link } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../hooks"

const SignupForm = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const { register, isLoading, success, error } = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(username.toLowerCase(), email.toLowerCase(), password)

    }
    return (
        <div className="flex justify-center items-center w-full lg:w-[1300px] h-screen">
            <form onSubmit={handleSubmit} className="bg-white sm:h-[600px] h-3/4 lg:w-1/2 w-3/4 flex flex-col items-center justify-evenly rounded-xl">
                <div className="flex-col flex items-center justify-center">
                    <h1 className="flex font-[600] text-[32px] pt-6">EasyFit</h1>
                    {error && <div className="text-red-500 px-3 py-2 mt-1 bg-red-200 rounded-md">{error}</div>}
                    {success && <div className="text-green-500 bg-green-200 px-3 py-2 mt-1 rounded-md">{success}</div>}
                </div>
                <div className="flex flex-col gap-5 w-3/4">
                    <div className="flex flex-col">
                        <label className="my-1">Username:</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={e => setUsername(e.target.value)} 
                            className="border py-2 px-3 rounded-md focus:outline-none" 
                            autoFocus    
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="my-1">Email:</label>
                        <input type="email" placeholder="John@doe.com" value={email} onChange={e => setEmail(e.target.value)} className="border py-2 px-3 rounded-md focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label className="my-1">Password</label>
                        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}className="border py-2 px-3 rounded-md focus:outline-none" />
                        <p className="flex justify-end pt-2"><Link to="/login" className="text-[12px] underline tracking-tight">Already have an account?</Link></p>
                    </div>
                    <button className="rounded-lg py-3 flex items-center justify-center uppercase font-[700] bg-green-600 text-white hover:scale-105 duration-100" type="submit" disabled={isLoading}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm