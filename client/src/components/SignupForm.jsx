import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [samePW, setSamePW] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (confirmPassword !== password) {
                console.log("repeat password");
                setSamePW(false);
            } else {
                const response = await axios.post("http://localhost:3000/register", ({ username, email, password }));
                const { accessToken, refreshToken } = response.data;
                
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
    
                navigate("/");
                setSamePW(true);
            }

        } catch (err) {
            console.error(err);
        }

    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                {!samePW && (
                    <h1>passwords are matching</h1>
                )}
                <input type="text" placeholder="repeat password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default SignupForm