import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { Calories } from "../components/dashboard"
import { useAuthContext, useLogsContext } from "../hooks"
import Search from "./Search"
import axios from "axios"
import { apiKey } from "../constants"
import { FoodDetails } from "../components"

const Dashboard = () => {
    // const [result, setResult] = useState(null);
    const { user } = useAuthContext();
    const { dispatch, logs } = useLogsContext();

    useEffect(() => {
        const fetchLogs = async () => {
            const response = await fetch("/api/logs", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_LOGS", payload: data })
                console.log(data);
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
                    <Calories />
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col h-full w-full lg:w-2/3 border">
                        {logs && logs.map(item => (
                            <div key={item._id}>{item.name}</div>
                        ))}
                    </div>
                    <div className="flex flex-col w-1/3 h-full">
                        {/* search for food here */}
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard