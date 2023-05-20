import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const [scrollData, setScrollData] = useState({
        y:0,
        lastY: 0
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollData(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (scrollData.lastY <= scrollData.y) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }, [scrollData]);

    return (
        <nav className={`sticky bg-green-600 text-white h-[60px] w-screen flex justify-between items-center px-5 transition-transform ease top-0 ${showNav && "-translate-y-full"}`}>
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