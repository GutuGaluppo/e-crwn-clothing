import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopComponent'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/singin-and-singup/SignInAndSignUp'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUp} />
			</Switch>
		</>
	);
}

export default App;
