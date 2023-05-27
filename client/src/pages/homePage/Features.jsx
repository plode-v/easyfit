import { TbNotes } from "react-icons/tb";
import { GiMeal, GiBodyBalance } from "react-icons/gi";

import { FeatureIcon } from "../../components"

const Features = () => {
    return (
        <div className="lg:py-8 py-5 flex w-full justify-center items-center bg-white z-10">
            <div className="flex w-full lg:w-1/2 justify-evenly">
                <FeatureIcon
                    header="Start small."
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <TbNotes className="text-green-700" />
                </FeatureIcon>
                <FeatureIcon
                    header="Log made easy."
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <GiMeal className="text-green-700" />
                </FeatureIcon>
                <FeatureIcon
                    header="Stay fit."
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                    <GiBodyBalance className="text-green-700" />
                </FeatureIcon>
            </div>
        </div>
    )
}

export default Features