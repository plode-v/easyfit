import "./index.css";

const FeatureIcon = ({ children }) => {
    return (
        <div className="flex items-center justify-center w-[250px]">
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-full w-min p-5 circle-shadow">
                    <span className="text-[100px] flex justify-center items-center">{children}</span>
                </div>
                <h1 className="font-[600] uppercase text-[1.2rem] mt-5 text-center">Tracking calories made easy</h1>
            </div>
        </div>
    )
}

export default FeatureIcon