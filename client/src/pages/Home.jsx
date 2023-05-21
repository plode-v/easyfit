import { HeroBanner, Features, Proposals, Footer } from "./"
import { Top } from "../components"

const Home = () => {
    return (
        <div className="flex flex-col">
            <HeroBanner />
            <Features />
            <Proposals />
            <Footer />
            <Top />
        </div>
    )
}

export default Home