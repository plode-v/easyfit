import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from "framer-motion"

import { ConfigRoutes } from "./configs"
import { Navbar} from './components'
import { useEffect, useState } from 'react'

function App() {

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1500);
	}, []);
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
		<>
		{!isLoading ? (
			<motion.div variants={item} initial="hidden" animate="show" className='w-full'>
				<Router>
					<motion.div variants={item}>
						<Navbar />
					</motion.div>
					<ConfigRoutes />
				</Router>
			</motion.div>
		) : (
			<h1>Loading</h1>
		)}
		</>
	)
}

export default App
