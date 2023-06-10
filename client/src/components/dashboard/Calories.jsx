import axios from "axios";
import { useEffect, useState } from "react";
import { useLogsContext, useProfileContext } from "../../hooks";

const Calories = ({ token }) => {

    const { dispatch } = useProfileContext();
    const { logs } = useLogsContext();
    const [foodCal, setFoodCal] = useState(0);
    const [calories, setCalories] = useState();

    // TODO: add , in calories num
    // FIXME: fix error first time register on dashboard page.
    useEffect(() => {
        const fetchCalories = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/profiles", {
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
            let allCalories = 0;

            logs.map(item => foods.push(item.food));

            for (let i = 0; i < foods.length; i++) {
                const response = await axios.get(`http://localhost:3000/api/foods/getFood/${foods[i]}`)
            }
        }
        fetchCalories();

    }, [dispatch, token])

    useEffect(() => {
        let foods = []
        let allCalories = 0;
        
        const fetchData = async () => {
            logs.map(item => foods.push(item.food))

            for (let i = 0; i < foods.length; i++) {
                const response = await axios.get(`http://localhost:3000/api/foods/getFood/${foods[i]}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = response.data;
                allCalories += data.calories;
                setFoodCal(allCalories);
            }
        }
        fetchData();

    }, [logs, token])

  return (
    <div className="flex w-full items-center justify-center lg:w-[600px]">
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
            <span className="lg:text-[30px] text-[24px] font-[700]">{calories - foodCal}</span>
            <span className="lg:text-[20px] text-[14px]">Remaining</span>
        </div>
    </div>
  )
}

export default Calories