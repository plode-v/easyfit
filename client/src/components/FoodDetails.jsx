import { useEffect, useState } from "react";
import axios from "axios";
import { useLogsContext, useAuthContext } from "../hooks";
import { FoodInfo } from "./"

const FoodDetails = ({ foodId, logAmount }) => {
    const [food, setFood] = useState()
    const { dispatch, logs } = useLogsContext();
    const { user } = useAuthContext();

    const [show, setShow] = useState(false)

    
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

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


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
        <div className="h-max w-full py-[0.5rem] px-[0.75rem]" key={foodId}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <div>
                        <p>{food.name}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">{logAmount * food.amount} {food.unit}</p>
                    </div>
                </div>
                <div className="flex-col flex">
                    <div className="flex gap-[5px]">
                        <button onClick={handleShow}>Edit</button>
                        <button onClick={handleTrash}>Trash</button>
                    </div>
                    <div className="flex justify-end">
                        {Math.round(food.calories * logAmount)} cal
                    </div>
                </div>
                <FoodInfo
                    show={show}
                    onHide={handleClose}
                    foods={food}
                />
            </div>
        </div>
    )
}

export default FoodDetails;