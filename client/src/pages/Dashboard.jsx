import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { Calories } from "../components/dashboard"
import { useAuthContext, useFoodContext, useLogsContext } from "../hooks"
import Search from "./Search"
import axios from "axios"
import { apiKey } from "../constants"
import { FoodDetails } from "../components"

const Dashboard = () => {
    // const [result, setResult] = useState(null);
    const { user } = useAuthContext();
    const { dispatch: foodDispatch } = useFoodContext();
    const { dispatch: logDispatch, logs } = useLogsContext();

    const [result, setResult] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await fetch(//`${apiKey}/api/logs`
            "http://localhost:3000/api/logs", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.json();
            console.log(data.allLogs);
            

            if (response.ok){
                setResult(data.allLogs)
                console.log(result)
            }

        }
        fetchFoods();

    },[])

    return (
        <div className="flex h-full w-full items-center justify-center bg-white mt-[60px]">
            <div className="w-full lg:w-[1300px] flex-col flex">
                <div className="flex justify-center items-center">
                    <Calories />
                </div>
                <div className="w-full flex">
                    <div className="flex flex-col h-full w-full lg:w-2/3 border">
                        {/* <FoodDetails result={result} /> */}
                        {/* <FoodDetails result={result} /> */}
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