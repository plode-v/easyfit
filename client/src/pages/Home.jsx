import { HeroBanner, Features, Proposals, Contact, Footer } from "./"

const Home = () => {
    return (
        <div className="flex flex-col w-screen">
            <HeroBanner />
            <Features />
            <Proposals />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home