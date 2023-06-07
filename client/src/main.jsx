import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FoodsContextProvider } from './context/FoodContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { LogsContextProvider } from './context/LogContext.jsx'
import { ProfilesContextProvider } from './context/ProfileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthContextProvider>
		<ProfilesContextProvider>
			<LogsContextProvider>
				<FoodsContextProvider>
					<App />
				</FoodsContextProvider>
			</LogsContextProvider>
		</ProfilesContextProvider>
	</AuthContextProvider>
)
