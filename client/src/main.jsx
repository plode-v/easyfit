import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FoodsContextProvider } from './context/FoodContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<FoodsContextProvider>
		<App />
	</FoodsContextProvider>
)
