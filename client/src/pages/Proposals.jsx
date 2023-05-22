import Carousel from "react-bootstrap/Carousel"
import { screenShot } from "../assets"

const Proposals = () => {
    return (
        <div className="h-[700px] bg-white z-10 flex justify-center items-center">
            <Carousel className="w-1/2">
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