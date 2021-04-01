import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import Header from './components/header/Header'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUp from './pages/singin-and-singup/SignInAndSignUp'
import CheckoutPage from './pages/checkout/Checkout'

import { setCurrentUser } from './redux/user/user.actions'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'

import {
	auth,
	createUserProfileDocument,
	// addCollectionAndDocuments **
} from './firebase/firebase.utils'
// import { selectCollectionsForPreview } from './redux/shop/shop.selector' **

class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const {
			setCurrentUser,
			// collectionsArray **
		} = this.props

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
			// addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items }))) **
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
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/signin"
						render={() => this.props.currentUser ?
							(<Redirect to='/' />)
							:
							(<SignInAndSignUp />)}
					/>
				</Switch>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	// collectionsArray: selectCollectionsForPreview, **
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



// ** these lines of code programmaticlly add the store data into firebase (at once). So after that's done, there is no reason to keep them