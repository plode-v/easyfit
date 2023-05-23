import axios from "axios"
import { useEffect, useState } from "react"

const Dashboard = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/dashboard");

                setUserData(response);
                console.log(response)
            } catch (err) {
                console.log("error fetching user data:", err);
            }
        }
        fetchUserData();
    }, [])

    return (
        <div className="h-screen flex justify-center items-center">
            <h1 className="flex">dashboard</h1>
            {userData ? (
                <p className="flex">{userData}</p>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    )
}

export default Dashboard