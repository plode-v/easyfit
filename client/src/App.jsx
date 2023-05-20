import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, Login, Register } from "./pages"
import { Navbar, Top } from './components'

function App() {
	return (
		<div className='w-screen'>
			<Router>
				<Navbar />
				<Top />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path='/signup' element={<Register />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
