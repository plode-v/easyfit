import Carousel from "react-bootstrap/Carousel"
import { screenShot } from "../assets"

const Proposals = () => {
    return (
        <div className="xl:h-[700px] h-max bg-white z-10 flex justify-center items-center">
            <Carousel className="xl:w-[1000px] w-3/4 py-20">
                {/* Fix this and make it a carousel mapping */}
                {/* Move images into constants folder */}
                <Carousel.Item className="border-black border-[2px]">
                    <img
                        src={screenShot}
                        className="w-full"
                    />
                </Carousel.Item>
                <Carousel.Item className="border-black border-[2px]">
                    <img 
                        src={screenShot} 
                        className="w-full"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Proposals