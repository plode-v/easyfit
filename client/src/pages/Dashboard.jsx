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
        <div className="flex h-screen w-full items-center justify-center">
            <div className="foods">
                {foods && foods.map(food => (
                    <FoodDetails key={food._id} food={food} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard