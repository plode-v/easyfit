import { useEffect, useState } from "react";
import { useLogsContext, useAuthContext } from "../hooks"

const FoodDetails = async ({ result }) => {

    const [food, setFood] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(result.map(item => {
                `http://localhost:3000/api/foods?search=${item}`
            }), {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            console.log(response)

        }
        fetchData();
    })
    

    return (
        <div className="border h-max w-full py-2">
            <div className="flex items-center justify-between">
                {result.map(item => (
                    <div key={item._id}>{item.food}</div>
                ))}
            </div>
        </div>
    )
}

export default FoodDetails;