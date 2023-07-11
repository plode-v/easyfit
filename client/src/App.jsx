import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ConfigRoutes } from "./configs"
import { Navbar} from './components'
import { useEffect, useState } from 'react';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
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
						</div>
						<ConfigRoutes />
					</Router>
				</div>
			)}
		</>
	)
}

export default App
