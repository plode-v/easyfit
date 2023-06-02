import { useState } from "react";
import { useAuthContext } from "../hooks"
import { port } from "../constants";

const Profile = () => {
    const { user } = useAuthContext();
    const [profile, setProfile] = useState(null);

    const handleUser = async () => {
        const response = await fetch(`${port}/api/users`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        const data = await response.json();
        
        if(response.ok){
            setProfile(data)
            console.log(profile)
        }
    }

    return (
        <div>
            After login user will reach here.
            <button onClick={handleUser}>here</button>
        </div>
    )
}

export default Profile