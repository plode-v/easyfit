import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from "framer-motion"

import { ConfigRoutes } from "./configs"
import { Navbar, Top } from './components'

function App() {

	const container = {
		hidden: {
			opacity: 0,
			y: -100
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2
			}
		}
	}

	const item = {
		hidden: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 1
			}
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				staggerChildren: 0.5,
				delayChildren: 0.1
			}
		}
	}

	return (
		<motion.div variants={container} initial="hidden" animate="show" className='w-screen'>
			<Router>
				<motion.div variants={item}>
					<Navbar />
					<Top />
				</motion.div>
				<motion.div variants={item}>
					<ConfigRoutes />
				</motion.div>
			</Router>
		</motion.div>
	)
}

export default App
