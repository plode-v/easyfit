import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, Login } from "./pages"
import { Navbar, LoginForm } from './components'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
			</Routes>
		</Router>
	)
}

export default App
