import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FoodsContextProvider } from './context/FoodContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { LogsContextProvider } from './context/LogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthContextProvider>
		<FoodsContextProvider>
			<LogsContextProvider>
				<App />
				{console.log(import.meta.env.VITE_API_KEY)}
			</LogsContextProvider>
		</FoodsContextProvider>
	</AuthContextProvider>
)
