import axios from "axios";
import { useEffect, useState } from "react";
import { useProfileContext } from "../../hooks";

const Calories = ({ token, logs }) => {

    const { dispatch } = useProfileContext();
    const [food, setFood] = useState();
    const [remain, setRemain] = useState();
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
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchCalories();

    }, [dispatch, token])


    // FIXME: get log's food calories
    useEffect(() => {
        const fetchFood = async () => {

            try {
                const foodId = logs.map(item => item.food)
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
                        console.log(food)
                    }
                } catch (err) {
                    console.error(err)
                }
            }
            fetchFood();
    }, []);


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
          <span className="lg:text-[30px] text-[24px] font-[700]">800</span>
          <span className="lg:text-[20px] text-[14px]">Food</span>
      </div>
      <div className="flex justify-center w-min">
          <span>=</span>
      </div>
      <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
          <span className="lg:text-[30px] text-[24px] font-[700]">1,200</span>
          <span className="lg:text-[20px] text-[14px]">Remaining</span>
      </div>
  </div>
  )
}

export default Calories