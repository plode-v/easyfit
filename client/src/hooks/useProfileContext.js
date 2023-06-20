import { ProfileContext } from "../context/ProfileContext"
import { useContext } from "react"

const useProfileContext = () => {
    const context = useContext(ProfileContext);

    if (!context) {
        throw Error("useFoodsContext must be used inside a FoodsContextProvider")
    }

    return context
}

export default useProfileContext;