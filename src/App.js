import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopComponent'
import Header from './components/header/Header'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</>
	);
}

export default App;
