import React from 'react'

import StripeCheckout from 'react-stripe-checkout'
import logo from '../../assets/crown.svg'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100 // stripe calculates the price in cents
	const publishableKey = 'pk_test_51IYpwRJjip46s49AtKth5WmLY9KSDFcuvnYzAIqa4EukbeBBjPd9zgfb8IvoYAQ2eTzpZr6hOo1RtsBwH4Q1f6Oz00ZIeeV1kn'

	const onToken = (token) => {
		console.log(token)
		alert(`Successful payed - Token: ${JSON.stringify(token)}`)
	}

	return (
		<StripeCheckout
			name="CRWN Clothing Ltd." // the pop-in header title
			label="Pay Now" // text inside the Stripe button
			description={`Your total amount is $ ${price}`} // the pop-in header subtitle
			image={logo} // the pop-in header image (default none)
			shippingAddress
			billingAddress
			amount={priceForStripe} // cents
			panelLabel="Pay Now" // prepended to the amount in the bottom pay button
			token={onToken} // submit callback
			stripeKey={publishableKey}
		// ComponentClass="div"
		// currency="USD"
		// locale="zh"
		// email="info@vidhub.co"
		// // Note: Enabling either address option will give the user the ability to
		// // fill out both. Addresses are sent as a second parameter in the token callback.
		// // Note: enabling both zipCode checks and billing or shipping address will
		// // cause zipCheck to be pulled from billing address (set to shipping if none provided).
		// zipCode={false}
		// alipay // accept Alipay (default false)
		// bitcoin // accept Bitcoins (default false)
		// allowRememberMe // "Remember Me" option (default true)
		// opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
		// closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
		// // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
		// // you are using multiple stripe keys
		// reconfigureOnUpdate={false}
		// // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
		// // useful if you're using React-Tap-Event-Plugin
		// triggerEvent="onTouchTap"

		/>
	)
}

export default StripeCheckoutButton

// react-stripe-checkout github address
// https://github.com/azmenak/react-stripe-checkout
