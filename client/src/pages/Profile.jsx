import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks"
import axios from "axios";

const Profile = () => {
    const { user } = useAuthContext();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/users`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = response.data;
            
            if(response.status === 200){
                setProfile(data)
                console.log(profile)
            }
        }
        fetchData();
    }, [user, profile])

    return (
        <div className="mt-[60px]">
            hello
        </div>
    )
}

export default Profile