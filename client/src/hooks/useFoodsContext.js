import { FoodsContext } from "../context/FoodContext"
import { useContext } from "react"

const useFoodsContext = () => {
    const context = useContext(FoodsContext)

    if (!context) {
        throw Error("useFoodsContext must be used inside a FoodsContextProvider")
    }

    return context
}

export default useFoodsContext;