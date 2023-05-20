const HeroBanner = () => {
    return (
        <div className="flex md:h-[60vh] flex-col md:flex-row w-full bg-green-500 items-center">
            <div className="flex-1 flex flex-col w-full h-max text-white pt-[80px] md:pl-10 pl-2">
                <h1 className="text-[70px] leading-none md:text-[100px] uppercase font-[700] tracking-tight">Fit made easy</h1>
                <h4 className="text-[26px] md:text-[32px] font-[300] w-[90%]">start healthy habits now with EasyFit</h4>
                <div className="flex items-start gap-1 md:gap-4 md:py-10 py-5 justify-center sm:justify-start lg:flex-row flex-col">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Apple Store" className="h-[50px] aspect-[3.375/1] hover:cursor-pointer" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_logo.svg" alt="Google Playstore" className=" border border-black p-2 rounded-md h-[50px] aspect-[3.375/1] bg-white hover:cursor-pointer"  />
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                insert phone app picture here or some sort of animation and HIDE on sm:md devices
            </div>
        </div>
    )
}

export default HeroBanner