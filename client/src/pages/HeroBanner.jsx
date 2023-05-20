const HeroBanner = () => {
    return (
        <div className="flex lg:h-[60vh] flex-wrap bg-gradient-to-r from-white to-green-50">
            <div className="lg:flex-1 flex flex-col w-full h-max">
                <h1 className="text-[100px] uppercase font-[600] tracking-tight">Fit made easy</h1>
                <h4 className="text-[32px]">start healthy habits now with EasyFit</h4>
                <div className="flex items-center gap-4 md:py-10 md:px-5 flex-col justify-center md:flex-row">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Apple Store" className="h-[80px] aspect-[3.375/1]" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_logo.svg" alt="Google Playstore" className=" border border-black p-3 rounded-md h-[80px] aspect-[3.375/1] bg-white"  />
                </div>
            </div>
            <div className="flex lg:flex-1">

            </div>
        </div>
    )
}

export default HeroBanner