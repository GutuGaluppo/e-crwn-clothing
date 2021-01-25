import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<>
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/shop/hats" component={HomePage}/>
		</Switch>
		</>
	);
}

export default App;
