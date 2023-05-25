import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, Dashboard, CreateFood } from "../pages"

const ConfigRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-food" element={<CreateFood />} />
            
        </Routes>
    )
}

export default ConfigRoutes