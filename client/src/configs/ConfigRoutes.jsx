import { Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, Register, Dashboard, CreateFood, Search, Profile } from "../pages"
import { useAuthContext } from "../hooks"

const ConfigRoutes = () => {
    const { user } = useAuthContext();

    return (
        <Routes>
            <Route path="/" element={!user ? <Home /> : <Dashboard />} />
            <Route path="/login" element={user ? <Dashboard /> : <Login />} />
            <Route path="/register" element={user ? <Dashboard /> : <Register />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/add-food" element={<CreateFood />} />
            <Route path="/search" element={user ? <Search /> : <Navigate to="/login" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            
        </Routes>
    )
}

export default ConfigRoutes