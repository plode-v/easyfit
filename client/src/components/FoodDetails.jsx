import { useEffect, useState } from "react";
import axios from "axios";
import { useLogsContext, useAuthContext } from "../hooks";

const FoodDetails = ({ foodId }) => {
    const [food, setFood] = useState()
    const { dispatch, logs } = useLogsContext();
    const { user } = useAuthContext();
    
    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/foods/getFood/${foodId}`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                })
                    const data = await response.data;
                    if (data) {
                        setFood(data);
                    }
                } catch (err) {
                    console.error(err)
                }
            }
            fetchFood();
    }, [user, foodId]);

    if (!food) {
        return
    }


    const handleTrash = async () => {
        const logId = logs.find(log => log.food === food._id)._id;
        console.log(logId)
        const response = await axios.delete(`http://localhost:3000/api/logs/${logId}`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const data = response.data;

        if (response.status === 200) {
            dispatch({ type: "DELETE_LOGS", payload: data })
        }


    }

    return (
        <div className="border h-max w-full py-[0.5rem] px-[0.75rem]" key={foodId}>
            <div className="flex items-center justify-between">
                <div>{food.name}</div>
                <button onClick={handleTrash}>Trash</button>
            </div>
            <div>
                {food.calories} cal
            </div>
        </div>
    )
}

export default FoodDetails;