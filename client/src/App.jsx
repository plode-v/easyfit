import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Analytics } from "@vercel/analytics/react";

import { ConfigRoutes } from "./configs"
import { Navbar} from './components'

function App() {


	const item = {
		hidden: {
			opacity: 0,
			y: -200,
			transition: {
				duration: 0.8
			}
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.5,
			}
		}
	}

	return (
		<div className='w-full font-epilogue'>
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
