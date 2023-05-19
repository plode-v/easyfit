import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (username) => {
        setUsername(username);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUsername("");
        setIsLoggedIn(false);
    };
    return (
        <nav className="bg-green-500 text-white h-[60px] w-screen flex justify-between items-center px-5">
            <h1 className="font-[600] text-[24px]">
                <Link to="/">EasyFit</Link>
            </h1>
            <ul className="flex gap-4 font-[500] text-[16px]">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar