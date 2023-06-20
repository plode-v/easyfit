import axios from "axios"
import { useEffect, useState } from "react";
import { useLogsContext, useProfileContext } from "../../hooks";
import { apiKey } from "../../constants"

const Calories = ({ token }) => {

    const { dispatch } = useProfileContext();
    const { logs } = useLogsContext();
    const [foodCal, setFoodCal] = useState(0);
    const [calories, setCalories] = useState(0);
    let data = [];
    
    // TODO: add , in calories num
    useEffect(() => {
        const fetchCalories = async () => {
            try {
                const response = await axios.get(`${apiKey}/api/profiles`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })

                const data = response.data;

                if (data) {
                    dispatch({ type: "SET_PROFILES", payload: data })
                    setCalories(data.calories)
                }
            } catch (err) {
                console.error(err);
            }

        }

        const fetchData = async () => {
            let foods = []
            let amount = [];
            let allCalories = 0;
            

            logs.map(item => {
                foods.push(item.food);
                amount.push(item.amount);
            });
            let cal = [];

            for (let i = 0; i < foods.length; i++) {
                const response = await axios.get(`${apiKey}/api/foods/getFood/${foods[i]}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                data.push(response.data)
            }
            data.map(item => {
                cal.push(item.calories)
            });

            cal.map((item, index) => {
                allCalories += Math.round(item * amount[index])
            })
            setFoodCal(allCalories);
        }
        fetchCalories();
        fetchData();
        if (logs.length === 0) {
            setFoodCal(0)
        }
        

    }, [dispatch, token, logs])

  return (
    <div className="flex w-full items-center justify-center md:w-[600px] font-sans">
        <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
            <span className="lg:text-[30px] text-[24px] font-[700]">{calories}</span>
            <span className="lg:text-[20px] text-[14px]">Goal</span>
        </div>
        <div className="flex justify-center w-min">
            <span>-</span>
        </div>
        <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
            <span className="lg:text-[30px] text-[24px] font-[700]">{foodCal}</span>
            <span className="lg:text-[20px] text-[14px]">Food</span>
        </div>
        <div className="flex justify-center w-min">
            <span>=</span>
        </div>
        <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
            <span className={`lg:text-[30px] text-[24px] font-[700] ${calories - foodCal < 0 && "text-red-500"}`}>{Math.round(calories - foodCal)}</span>
            <span className="lg:text-[20px] text-[14px]">Remaining</span>
        </div>
    </div>
  )
}

export default Calories