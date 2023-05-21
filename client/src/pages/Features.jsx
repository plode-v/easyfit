import { TbNotes } from "react-icons/tb"

import { FeatureIcon } from "../components"

const Features = () => {
    return (
        <div className="border py-5 flex w-full justify-evenly items-center">
            <FeatureIcon>
                <TbNotes />
            </FeatureIcon>
        </div>
    )
}

export default Features