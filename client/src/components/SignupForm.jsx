import { Link } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../hooks"

const SignupForm = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const { register, isLoading } = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(username, email, password)
    }
    return (
        <div className="flex justify-center items-center w-full lg:w-[1300px] h-screen">
            <form onSubmit={handleSubmit} className="bg-white sm:h-[600px] h-3/4 lg:w-1/2 w-3/4 flex flex-col items-center justify-evenly rounded-xl">
                <h1 className="flex font-[600] text-[32px] py-10">EasyFit</h1>
                <div className="flex flex-col gap-5 w-3/4">
                    <div className="flex flex-col">
                        <label className="my-1">Username:</label>
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border py-2 px-3 rounded-md focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label className="my-1">Email:</label>
                        <input type="text" placeholder="John@doe.com" value={email} onChange={e => setEmail(e.target.value)} className="border py-2 px-3 rounded-md focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label className="my-1">Password</label>
                        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}className="border py-2 px-3 rounded-md focus:outline-none" />
                        <p className="flex justify-end pt-2"><Link to="/login" className="text-[12px] underline tracking-tight">Already have an account?</Link></p>
                    </div>
                    <button className="rounded-lg py-3 flex items-center justify-center uppercase font-[700] bg-green-600 text-white hover:scale-105 duration-100" type="submit" disabled={isLoading}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm