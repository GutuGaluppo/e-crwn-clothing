import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopComponent'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/singin-and-singup/SignInAndSignUp'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				})
			}

			setCurrentUser(userAuth)
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); // to close subscription on the app to avoid any memory leak from the app
	}

	render() {
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
}

const mapStateToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapStateToProps)(App);
