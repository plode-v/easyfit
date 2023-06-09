import { useEffect, useState } from "react"
import { Calories } from "../components/dashboard"
import { useAuthContext, useLogsContext } from "../hooks"
import axios from "axios"
import { FoodDetails } from "../components"
import { Link } from "react-router-dom"
import { apiKey } from "../constants"

const Dashboard = () => {

    const { user } = useAuthContext();
    const { dispatch, logs } = useLogsContext();
    const [food, setFood] = useState();

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await axios.get(`${apiKey}/api/logs`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                })
                const data = await response.data;
    
                if (response.status === 200) {
                    dispatch({ type: "SET_LOGS", payload: data })
                    setFood(data)
                }
            } catch (err) {
                console.error(err);
            }
        }

        if (user) {
            fetchLogs();
        }

    }, [dispatch, user])
    

    return (
        <div className="flex h-full w-full items-center justify-center bg-white mt-[60px] font-open">
            <div className="w-full md:w-[600px] xl:w-[800px] flex-col flex">
                <div className="flex justify-center items-center">
                    <Calories token={user.token} logs={food} />
                </div>
                <div className="w-full flex flex-col px-[0.75rem] justify-center">
                    <div className="flex flex-col h-full w-full border-[2px] border-green-500 rounded-[5px]">
                        {logs && logs.map(item => (
                            <div key={item._id}>
                                <FoodDetails foodId={item.food} logAmount={item.amount} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col h-full w-[100px] mt-[20px]">
                        <Link to="/search" className="flex items-center">
                            <button className="flex bg-green-700 px-[0.75rem] py-[0.5rem] rounded-[5px]">
                                <p className="text-[16px] capitalize text-white font-[600]">add food</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard