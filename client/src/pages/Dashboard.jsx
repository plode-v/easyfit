import { useEffect, useState } from "react"
import { Calories, FoodLogs } from "../components/dashboard"

const Dashboard = () => {

    const [foods, setFoods] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch("http://localhost:3000/api/logs")
            const json = await response.json();

            if (response.ok) {
                setFoods(json)
            }
        }
        fetchFoods();
    }, [])

    return (
        <div className="flex h-full w-full items-center justify-center bg-white mt-[60px]">
            <div className="w-full lg:w-[1000px] flex-col flex">
                <div className="flex justify-center items-center">
                    <Calories />
                </div>
                <div className="flex h-full w-full justify-center">
                    <FoodLogs />

                </div>
            </div>
        </div>
    )
}

export default Dashboard