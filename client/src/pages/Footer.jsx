const Footer = () => {
    return (
        <div className="bg-green-700 h-[350px] fixed w-full bottom-0 flex justify-center items-center">
            <div className="flex h-full lg:w-[1300px] w-full">
                <div className="flex flex-col h-full w-full">
                    <div className="text-white flex justify-center h-[80%]">
                        <div className="flex flex-1 border">
                            <h1 className="font-[600] text-[30px] flex p-5">EasyFit</h1>
                        </div>
                        <div className="flex flex-1 border">
                            center
                        </div>
                        <div className="flex flex-1 border">Right</div>
                    </div>
                    <div className="flex h-[20%] justify-center items-center text-white">
                        <p className="font-[400]">By <a href="https://plode-vanichaka.com" target="_blank" rel="noreferrer" className="underline cursor-pointer">Plode Vanichaka</a> 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer