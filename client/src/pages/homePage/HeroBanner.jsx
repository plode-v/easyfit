import { iphone, appleStore, googleStore } from "../../assets"

const HeroBanner = () => {
    return (
        <div className="flex h-max xl:h-[650px] lg:h-[65vh] bg-green-500 pt-[60px] items-center justify-center z-10">
            <div className="flex w-full lg:w-[1300px] justify-center items-center flex-col md:flex-row">
                <div className="flex-1 flex flex-col w-full h-max text-white md:pl-10 pl-2 py-10">
                    <h1 className="text-[70px] leading-none md:text-[100px] uppercase font-[700] tracking-tight">Fit made easy</h1>
                    <h4 className="text-[26px] md:text-[32px] font-[300] w-[90%]">Start healthy habits now with EasyFit</h4>
                    <div className="flex items-start gap-1 md:gap-4 md:py-10 py-5 justify-center sm:justify-start lg:flex-row flex-col">
                        <img src={appleStore} alt="Apple Store" className=" hover:cursor-pointer h-[50px] lg:h-[60px]" />
                        <img src={googleStore} alt="Google Playstore" className="h-[50px] lg:h-[60px] aspect-[3.375/1] hover:cursor-pointer"  />
                    </div>
                </div>
                <div className="flex-1 relative hidden md:flex justify-end items-center xl:mt-[240px] xl:mr-10 mr-24">
                    <img src={iphone} alt="iphone" className="xl:h-[700px] lg:h-[550px] h-[500px] hover:-translate-y-[30px] duration-200" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner