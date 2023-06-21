import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Analytics } from "@vercel/analytics/react";

import { ConfigRoutes } from "./configs"
import { Navbar} from './components'
import { useEffect, useState } from 'react';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => {
			clearTimeout(loadingTimeout);
		}
	}, [])

	return (
		<>
			{isLoading ? (
				<div>
					loading...
				</div>
			) : (
				<div className='w-full'>
					<Router>
						<div>
							<Navbar />
							<Analytics />
						</div>
						<ConfigRoutes />
					</Router>
				</div>
			)}
		</>
	)
}

export default App
