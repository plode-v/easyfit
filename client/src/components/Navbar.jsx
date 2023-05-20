import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {

    const [hideNav, setHideNav] = useState(false);
    const [prevScrollData, setPrevScrollData] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollData = window.scrollY;
            const shouldHideNav = currentScrollData > prevScrollData && currentScrollData > 0;

            setPrevScrollData(currentScrollData);
            setHideNav(shouldHideNav);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollData]);

    return (
        <nav className={`fixed top-0 bg-green-600 text-white h-[60px] w-screen flex justify-between items-center px-5 transition duration-300 ease-in-out ${hideNav ? '-translate-y-full' : 'translate-y-0'}`}>
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