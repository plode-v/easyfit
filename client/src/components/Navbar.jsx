import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useLogout, useAuthContext, useProfileContext } from "../hooks";

const Navbar = () => {

    const navigate = useNavigate();
    const [hideNav, setHideNav] = useState(false);
    const [prevScrollData, setPrevScrollData] = useState(0);
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { profiles } = useProfileContext();

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

    }, [prevScrollData, profiles]);

    const handleLogout = () => {
        logout();
        navigate("/")
    }

    const handleProfile = () => {
        navigate("/profile")
    }


    return (
        <nav className={`fixed z-20 top-0 bg-green-600 text-white h-[60px] w-full flex justify-center items-center px-3 transition duration-300 ease-in-out ${hideNav ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="flex w-full lg:w-[1300px] justify-between items-center">
                <h1 className="font-[600] text-[24px]">
                    <Link className="text-white font-open font-[700]" to="/">EasyFit</Link>
                </h1>
                {user ? (
                    <div className="flex gap-[20px] items-center">
                        <div className="flex cursor-pointer h-[40px] w-[40px] rounded-full border bg-white" onClick={handleProfile}>
                            <p className="items-center flex justify-center w-full h-full font-sans font-[600] text-[22px] text-green-600 uppercase">{user.username.charAt(0)}</p>
                        </div>
                        <button onClick={handleLogout} className="rounded-md bg-white text-green-800 py-1 px-2">Logout</button>
                    </div>
                ) : (
                    <ul className="flex gap-4 font-[500] text-[16px]">
                        <li><Link className="text-white" to="/login">Login</Link></li>
                        <li><Link className="text-white" to="/register">Register</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar