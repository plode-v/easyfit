import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, Dashboard, CreateFood, Search, Profile, ProfileSetup } from "../pages"
import { useAuthContext, useProfileContext } from "../hooks"

const ConfigRoutes = () => {
    const { user } = useAuthContext();
    const { profiles } = useProfileContext();


    return (
        <Routes>
            <Route path="/" element={!user ? <Home /> : <Dashboard />} />
            <Route path="/login" element={user ? <Dashboard /> : <Login />} />
            <Route path="/register" element={user ? <Dashboard /> : <Register />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
            <Route path="/add-food" element={<CreateFood />} />
            <Route path="/search" element={user ? <Search /> : <Login />} />
            <Route path="/profile" element={user ? <Profile /> : <Login />} />
            <Route path="/profile/setup" element={profiles ? <Profile /> : <ProfileSetup />} />
            
        </Routes>
    )
}

export default ConfigRoutes