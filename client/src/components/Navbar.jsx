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
        <nav className={`fixed z-20 top-0 bg-green-600 text-white h-[60px] w-screen flex justify-center items-center px-3 transition duration-300 ease-in-out ${hideNav ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="flex w-full lg:w-[1300px] justify-between items-center">
                <h1 className="font-[600] text-[24px]">
                    <Link className="text-white" to="/">EasyFit</Link>
                </h1>
                <ul className="flex gap-4 font-[500] text-[16px]">
                    <li><Link className="text-white" to="/login">Login</Link></li>
                    <li><Link className="text-white" to="/register">Register</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar