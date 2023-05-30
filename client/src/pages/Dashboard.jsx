import { useEffect, useState } from "react"
import { Calories, FoodDetails } from "../components/dashboard"
import { useAuthContext, useFoodContext } from "../hooks"

const Dashboard = () => {
    const [result, setFoods] = useState(null);
    const { user } = useAuthContext();
    const { foods, dispatch } = useFoodContext();

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch("http://localhost:3000/api/foods", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_FOODS", payload: data });
            }
        }

        if (user) {
            fetchFoods();
        }

    }, [dispatch, user])

    return (
        <div className="flex h-full w-full items-center justify-center bg-white mt-[60px]">
            <div className="w-full lg:w-[1000px] flex-col flex">
                <div className="flex justify-center items-center">
                    <Calories />
                </div>
                <div className="flex flex-col h-full w-full lg:w-2/3 justify-center border">
                    {foods && foods.map(food => (
                        <FoodDetails key={food._id} name={food.name} calories={food.calories} />
                    ))}
                    <div className="border w-max m-3 p-2 rounded-md bg-green-800 text-white font-[600] capitalize">
                        add food
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard