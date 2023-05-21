import iphone from "../assets/Free_Iphone_14_Pro_Mockup_3.png"

const HeroBanner = () => {
    return (
        <div className="flex h-max lg:h-[60vh] bg-green-500 pt-[60px] items-center justify-center">
            <div className="flex w-full lg:w-[1300px] justify-center items-center flex-col md:flex-row">
                <div className="flex-1 flex flex-col w-full h-max text-white md:pl-10 pl-2 py-10">
                    <h1 className="text-[70px] leading-none md:text-[100px] uppercase font-[700] tracking-tight">Fit made easy</h1>
                    <h4 className="text-[26px] md:text-[32px] font-[300] w-[90%]">Start healthy habits now with EasyFit</h4>
                    <div className="flex items-start gap-1 md:gap-4 md:py-10 py-5 justify-center sm:justify-start lg:flex-row flex-col">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Apple Store" className="h-[50px] lg:h-[60px] aspect-[3.375/1] hover:cursor-pointer" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_logo.svg" alt="Google Playstore" className=" border border-black p-2 rounded-md h-[50px] lg:h-[60px] aspect-[3.375/1] bg-white hover:cursor-pointer"  />
                    </div>
                </div>
                <div className="flex-1 hidden lg:flex justify-end items-center mt-[350px] pr-10">
                    <img src={iphone} alt="iphone" className="h-[730px] hover:-translate-y-[30px] duration-200" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner