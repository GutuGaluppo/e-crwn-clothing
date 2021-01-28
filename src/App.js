import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopComponent'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/singin-and-singup/SignInAndSignUp'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentUser: null
		}

	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					}, 
					// () => { console.log(this.state) }
					)
					// console.log(this.state)
				})
			} else {
				this.setState({
					currentUser: userAuth
				})
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); // to close subscription on the app to avoid any memory leak from the app
	}

	render() {
		return (
			<>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUp} />
				</Switch>
			</>
		);
	}
}

export default App;
