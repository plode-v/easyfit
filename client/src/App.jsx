import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Analytics } from "@vercel/analytics/react";

import { ConfigRoutes } from "./configs"
import { Navbar} from './components'

function App() {

	return (
		<div className='w-full'>
			<Router>
				<div>
					<Navbar />
					<Analytics />
				</div>
				<ConfigRoutes />
			</Router>
		</div>
	)
}

export default App
