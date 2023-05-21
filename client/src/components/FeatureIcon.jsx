import "./index.css";

const FeatureIcon = ({ children, header, text }) => {
    return (
        <div className="flex items-center justify-center md:w-[250px] w-[100px]">
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-full w-min md:p-5 p-3 circle-shadow">
                    <span className="md:text-[70px] text-[40px] flex justify-center items-center">{children}</span>
                </div>
                <h1 className="font-[600] md:text-[1.1rem] text-[0.8rem] md:mt-5 mt-2 text-center leading-4">{header}</h1>
                <p className="md:text-[1rem] text-[0.65rem] text-center leading-3 md:leading-none mt-2 md:mt-3">{text}</p>
            </div>
        </div>
    )
}

export default FeatureIcon