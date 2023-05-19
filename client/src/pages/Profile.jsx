import axios from "axios"

const Profile = () => {

    const handleuser = async () => {
        const response = await axios.get("http://localhost:3000/dashboard/", {authorization: response.data.accessToken})
    }

    return (
        <div>
            After login user will reach here.
            <button>logout</button>
        </div>
    )
}

export default Profile