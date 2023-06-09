import axios from "axios";
import { useEffect, useState } from "react";
import { useLogsContext, useProfileContext } from "../../hooks";

const Calories = ({ token, logs }) => {

    const { dispatch } = useProfileContext();
    const { dispatch: logDispatch} = useLogsContext();
    const [food, setFood] = useState([]);
    const [foodCal, setFoodCal] = useState();
    const [calories, setCalories] = useState();

    // TODO: add , in calories num
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
                    setFoodCal(190)
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchCalories();

    }, [dispatch, token])

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/logs", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = response.data;

                if (response.status === 200) {
                    logDispatch({ type: "SET_LOGS", payload: data });

                    data.map(item => {
                        setFood(prev => [...prev, item.food]);
                    })
                    console.log(food);
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchFoods();
    }, [token, logDispatch])


    // FIXME: get log's food calories

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