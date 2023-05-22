import Carousel from "react-bootstrap/Carousel"
import { carousel } from "../constants"

const Proposals = () => {
    return (
        <div className="xl:h-[700px] h-max bg-white z-10 flex justify-center items-center">
            <Carousel className="xl:w-[1000px] w-3/4 py-20">
                {carousel.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img src={item} alt="image" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Proposals