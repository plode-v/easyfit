import { useEffect, useState } from "react";
import axios from "axios";
import { useLogsContext } from "../hooks";
import { apiKey } from "../constants";

const FoodDetails = ({ foodId, token, log }) => {
    const [food, setFood] = useState()
    const { dispatch } = useLogsContext();
    
    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await axios.get(
                    `${apiKey}/api/foods/getFood/${foodId}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                    );
                    const data = await response.data;
                    if (data) {
                        setFood(data);
                    }
                } catch (err) {
                    console.error(err)
                }
            }
            fetchFood();
    }, [food, token, foodId]);

    if (!food) {
        return
    }


    const handleTrash = async () => {
        console.log(log)
        const response = await axios.delete(`${apiKey}/api/logs/${log._id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await response.data;

        if (response.status === 200) {
            dispatch({ type: "DELETE_LOGS", payload: data });
        }
    }


    return (
        <div className="border h-max w-full py-[0.5rem] px-[0.75rem]" key={foodId}>
            <div className="flex items-center justify-between">
                <div>{food.name}</div>
                <button onClick={handleTrash}>Trash</button>
            </div>
            <div>
                {food.calories}
            </div>
        </div>
    )
}

export default FoodDetails;