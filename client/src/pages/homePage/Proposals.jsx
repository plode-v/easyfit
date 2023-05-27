import Carousel from "react-bootstrap/Carousel"
import { carousel } from "../../constants"

const Proposals = () => {
    return (
        <div className="xl:h-[700px] h-max bg-white z-10 flex justify-center items-center">
            <Carousel className="xl:w-[1000px] w-full lg:py-20 py-10 px-3">
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