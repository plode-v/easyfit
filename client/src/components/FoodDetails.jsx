import { useEffect, useState } from "react";
import { useCalories } from "../hooks";
import axios from "axios";

const FoodDetails = ({ foodId, token }) => {
    const [food, setFood] = useState()
    const [calories, setCalories] = useState();
    let total = []
    
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
    }, []);

    if (!food) {
        return
    }

    return (
        <div className="border h-max w-full py-[0.5rem] px-[0.75rem]" key={foodId}>
            {total[1]}
            <div className="flex items-center justify-between">
                <div>{food.name}</div>
                <div>Trash</div>
            </div>
            <div>
                {food.calories}
            </div>
        </div>
    )
}

export default FoodDetails;