import { HeroBanner, Features, Proposals, Contact, Footer } from "./"

const Home = () => {
    return (
        <div className="flex flex-col bg-white">
            <HeroBanner />
            <Features />
            <Proposals />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home