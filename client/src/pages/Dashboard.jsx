import { useEffect, useState } from "react"
import { FoodDetails } from "../components";

const Dashboard = () => {

    const [foods, setFoods] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch("http://localhost:3000/api/foods")
            const json = await response.json();

            if (response.ok) {
                setFoods(json)
            }
        }
        fetchFoods();
    }, [])

    return (
        <div className="flex h-screen w-full items-center justify-center bg-white mt-[60px]">
            <div className="w-full xl:w-[1000px] flex h-full">
                <div className="w-2/3">
                    {foods && foods.map(food => (
                        <FoodDetails key={food._id} food={food} />
                    ))}
                </div>
                <div className="w-1/3">
                    hello
                </div>

            </div>
        </div>
    )
}

export default Dashboard