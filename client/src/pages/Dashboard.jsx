import { useEffect, useState } from "react"
import { Calories } from "../components/dashboard"
import { useAuthContext, useLogsContext } from "../hooks"
import axios from "axios"
import { FoodDetails } from "../components"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    // FIXME: food calories is not corrolated with the rest

    const { user } = useAuthContext();
    const { dispatch, logs } = useLogsContext();
    const [food, setFood] = useState();
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLogs = async () => {
            setIsloading(true)
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
            setIsloading(false)

        }
        if (user) {
            fetchLogs();
        }
    }, [dispatch, user])


    return (
        <>
        {isLoading ? (
            <p>loading</p>
        ) : (
            <div className="flex h-full w-full items-center justify-center bg-white mt-[60px]">
                <div className="w-full lg:w-[800px] flex-col flex">
                    <div className="flex justify-center items-center">
                        <Calories token={user.token} logs={food} />
                    </div>
                    <div className="w-full flex flex-col px-[0.75rem]">
                        <div className="flex flex-col h-full w-full border rounded-[5px]">
                            {logs && logs.map(item => (
                                <div key={item._id}>
                                    <FoodDetails foodId={item.food} logAmount={item.amount} />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col h-full w-[100px] mt-[20px]">
                            <button className="bg-green-500 text-white font-[600] px-[0.75rem] py-[0.5rem] text-[16px] rounded-[5px] capitalize" onClick={() => navigate('/search')}>add food</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Dashboard