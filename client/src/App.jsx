import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css'

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
		<motion.div variants={item} initial="hidden" animate="show" className='w-full'>
			<Router>
				<motion.div variants={item}>
					<Navbar />
				</motion.div>
				<ConfigRoutes />
			</Router>
		</motion.div>
	)
}

export default App
