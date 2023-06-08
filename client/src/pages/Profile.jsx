import { useEffect, useState } from "react";
import { useAuthContext, useProfileContext } from "../hooks"
import axios from "axios";
import { ProfileSetup } from "./"

const Profile = () => {
    const [show, setShow] = useState(false);
    const { user } = useAuthContext();
    const { profiles, dispatch } = useProfileContext();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState();

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
            }

            if (profiles) {
                setHeight(profiles.height)
                setWeight(profiles.weight)
                setAge(profiles.age)
            }
        }

        fetchData();
    }, [user, dispatch, profiles])
    
    const handleClose = () => setShow(false);

    return (
        // TODO: if profile then show edit/update profile button, else show setProfile button
        // TODO: also have a button to use calories calculator somewhere and update profile upon data given to the calculator

        <div className="mt-[60px] flex items-center justify-center h-[500px]">
            <div className="h-max items-center justify-center flex flex-col">
                {profiles ? (
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
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-[20px]">
                        <h1 className="font-[700] text-[24px] bg-green-500 text-white py-2 px-3 rounded-lg uppercase">No Profile, setup below</h1>
                        <button onClick={() => setShow(true)}>Here</button>

                        <ProfileSetup show={show} onHide={() => setShow(false)} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile