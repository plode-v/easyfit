import Carousel from "react-bootstrap/Carousel"
import { screenShot } from "../assets"

const Proposals = () => {
    return (
        <div className="xl:h-[700px] h-max bg-white z-10 flex justify-center items-center">
            <Carousel className="xl:w-[1000px] w-3/4 py-20">
                <Carousel.Item>
                    <img
                        src={screenShot}
                        className="w-full"
                    />
                </Carousel.Item>
                <Carousel.Item>
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