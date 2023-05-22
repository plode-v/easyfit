import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-green-700 lg:h-[400px] h-[250px] fixed w-full bottom-0 flex justify-center items-center">
            <div className="flex h-full md:w-[700px] w-[90%] lg:py-10 py-3 justify-center">
                <div className="flex flex-col h-full w-full justify-center">
                    <div className="text-white flex justify-center lg:h-[50%] h-2/3">
                        <div className="flex flex-1 bg-white text-black rounded-l-xl justify-center">
                            <div className="py-2 flex justify-start h-max">
                                <h1 className="font-[600] text-[30px] text-left flex justify-start">EasyFit</h1>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center bg-white py-2">
                            <ul className="text-black font-[600] text-center">
                                <li><Link to="https://plode-vanichaka.com" target="_blank">About Us</Link></li>
                                <li><Link to="mailto:vanichaka.plode@gmail.com">Contact</Link></li>
                                <li><Link to="https://github.com/plode-v">Github</Link></li>
                                <li><Link to="mailto:vanichaka.plode@gmail.com">Email</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-1 bg-white rounded-r-xl justify-center py-2">
                                <ul className="text-black font-[600] text-right">
                                <li><Link to="/login">Login</Link></li>
                                <li><Link>Account</Link></li>
                                <li><Link to="/register">Sign up</Link></li>
                                <li><Link>Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                <div className="flex lg:h-[20%] h-1/3 justify-center items-center text-white flex-col">
                    <p className="font-[400]">By <a href="https://plode-vanichaka.com" target="_blank" rel="noreferrer" className="underline cursor-pointer">Plode Vanichaka</a> 2023</p>
                    <p className="text-center text-[14px]">*This is currently underdevelopment, There is no EasyFit application just yet.*</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer