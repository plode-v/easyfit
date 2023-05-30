import { useEffect, useState } from "react"
import { Calories, FoodDetails } from "../components/dashboard"
import { useAuthContext, useFoodContext } from "../hooks"

const Dashboard = () => {
    const [result, setResult] = useState(null);
    const { user } = useAuthContext();
    const { foods, dispatch } = useFoodContext();

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch("http://localhost:3000/api/logs", {
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
            <div className="w-full lg:w-[1300px] flex-col flex">
                <div className="flex justify-center items-center">
                    <Calories />
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col h-full w-full lg:w-2/3 border">

                        <button className="border w-max m-3 p-2 rounded-md bg-green-800 text-white font-[600] capitalize">
                            Add Food
                        </button>
                    </div>
                    <div className="flex flex-col border w-1/3">
                        {/* create food */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard