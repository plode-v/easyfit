import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="fixed z-10 bg-green-600 text-white h-[60px] w-screen flex justify-between items-center px-5">
            <h1 className="font-[600] text-[24px]">
                <Link to="/">EasyFit</Link>
            </h1>
            <ul className="flex gap-4 font-[500] text-[16px]">
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar