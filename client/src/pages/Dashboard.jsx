import { useEffect, useState } from "react"
import { Calories } from "../components/dashboard"
import { useAuthContext, useLogsContext } from "../hooks"
import Search from "./Search"
import axios from "axios"
import { FoodDetails } from "../components"

const Dashboard = () => {
    const { user } = useAuthContext();
    const { dispatch, logs } = useLogsContext();
    const [food, setFood] = useState();

    // FIXME: Not automatically updates when add food
    useEffect(() => {
        const fetchLogs = async () => {
            const response = await axios.get("http://localhost:3000/api/logs", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.data;

            if (response.status === 200) {
                dispatch({ type: "SET_LOGS", payload: data })
                setFood(data)
            }

        }
        if (user) {
            fetchLogs();
        }
    }, [user, dispatch])


    return (
        <div className="flex h-full w-full items-center justify-center bg-white mt-[60px]">
            <div className="w-full lg:w-[1300px] flex-col flex">
                <div className="flex justify-center items-center">
                        <Calories token={user.token} logs={food} />
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col h-full w-full lg:w-2/3 border">
                        {logs && logs.map(item => (
                            <div key={item._id}>
                                <FoodDetails foodId={item.food} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-1/3 h-full">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard