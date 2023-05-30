import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, Dashboard, CreateFood, Search } from "../pages"
import { useAuthContext } from "../hooks"

const ConfigRoutes = () => {
    const { user } = useAuthContext();

    return (
        <Routes>
            <Route path="/" element={!user ? <Home /> : <Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-food" element={<CreateFood />} />
            <Route path="/search" element={<Search />} />
            
        </Routes>
    )
}

export default ConfigRoutes