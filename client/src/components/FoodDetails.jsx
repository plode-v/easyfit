import { useEffect, useState } from "react";
import axios from "axios";

const FoodDetails = ({ foodId, token }) => {
    const [food, setFood] = useState(null);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/foods/getFood/${foodId}`,
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
    }, [foodId, token]);

    if (!food) {
        return
    }

    return (
        <div className="border h-max w-full py-2" key={foodId}>
            <div className="flex items-center justify-between">
                <div>{food.name}</div>
            </div>
        </div>
    )
}

export default FoodDetails;