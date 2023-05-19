import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, Login, Register } from "./pages"
import { Navbar } from './components'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path='/signup' element={<Register />} />
			</Routes>
		</Router>
	)
}

export default App
