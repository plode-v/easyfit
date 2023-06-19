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

    // edit phase
    const [canEdit, setCanEdit] = useState(false);

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

    const handleEdit = () => {
        setCanEdit(true);
    }

    const handleSave = () => {
        setCanEdit(false);
    }

    return (
        // TODO: if profile then show edit/update profile button, else show setProfile button

        // TODO: also have a button to use calories calculator somewhere and update profile upon data given to the calculator

        <div className="mt-[60px] flex flex-col items-center h-[90vh] w-full">
            <div className="flex flex-col my-[80px] items-center justify-center lg:w-[600px] w-full">
                <div className="bg-green-600 rounded-full h-[120px] w-[120px] flex justify-center items-center">
                    <p className="uppercase font-[700] text-[60px] text-white">{user.username.charAt(0)}</p>
                </div>
                <div className="w-full flex mt-[40px]">
                    <div className="flex flex-col bg-green-700 w-1/3 capitalize font-[500] text-white gap-[10px] rounded-l-lg p-[10px]">
                        <span>username</span>
                        <span>email</span>
                    </div>
                    <div className="flex flex-col items-end w-full bg-gray-100 gap-[10px] p-[10px]">
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        <button className="bg-red-700 font-[600] text-white px-3 py-1 rounded-lg capitalize">change password</button>
                    </div>
                </div>
            </div>
            <div className="h-max items-center justify-center flex flex-col">
                {canEdit ? (
                    <div>
                        <p>can edit</p>
                        <button onClick={handleSave}>save</button>
                    </div>
                ) : (
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
                        <button className="border mt-10" onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile