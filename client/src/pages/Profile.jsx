import { useEffect, useState } from "react";
import { useAuthContext, useProfileContext } from "../hooks"
import axios from "axios";

const Profile = () => {
    const { user } = useAuthContext();
    const { dispatch } = useProfileContext();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState();
    const [calories, setCalories] = useState()
    const [activity, setActivity] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/api/profiles`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = response.data;
            
            if(response.status === 200){
                dispatch({ type: "SET_PROFILES", payload: data })
                setHeight(data.height)
                setWeight(data.weight)
                setAge(data.age)
                setCalories(data.calories)
                setActivity(data.activity)
            }
        }

        fetchData();
    }, [dispatch, user])

    return (
        // TODO: if profile then show edit/update profile button, else show setProfile button

        // TODO: also have a button to use calories calculator somewhere and update profile upon data given to the calculator

        <div className="mt-[60px] flex items-center justify-center h-[500px]">
            <div className="h-max items-center justify-center flex flex-col">
                    <div className="border">
                        <div>
                            height: {height} cm
                        </div>
                        <div>
                            weight: {weight} cm
                        </div>
                        <div>
                            age: {age} years
                        </div>
                        <div>
                            calories: {calories} cal
                        </div>
                        <div>
                            activity-level: {activity}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Profile