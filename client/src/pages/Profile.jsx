import { useEffect, useState } from "react";
import { useAuthContext, useProfileContext } from "../hooks"
import axios from "axios";

const Profile = () => {
    const { user } = useAuthContext();
    const { profiles, dispatch } = useProfileContext();

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
        }

        fetchData();
    }, [user, dispatch])

    return (
        // TODO: if profile then show edit/update profile button, else show setProfile button
        // TODO: also have a button to use calories calculator somewhere and update profile upon data given to the calculator
        
        <div className="mt-[60px] flex items-center justify-center h-[500px]">
            <div className="border h-max items-center justify-center flex flex-col">
                <div>
                    height: {profiles.height} cm
                </div>
                <div>
                    weight: {profiles.weight} cm
                </div>
                <div>
                    age: {profiles.age} years
                </div>
            </div>
        </div>
    )
}

export default Profile