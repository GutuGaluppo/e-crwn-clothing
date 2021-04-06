import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton'

import { CheckoutPageContainer, CheckoutHeader, Total, TestWarning} from './checkout.styles'

const Checkout = ({ cartItems, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				<div><span>Product</span></div>
				<div><span>Description</span></div>
				<div><span>Quantity</span></div>
				<div><span>Price</span></div>
				<div><span>Removed</span></div>
			</CheckoutHeader>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total><span>TOTAL: ${total}</span></Total>
			<TestWarning>
				* Please use the following test credit card for payment *
				<br />
				4242 4242 4242 4242 - Exp: 01/"current year + 1" - CVV: 123
			</TestWarning>
			<StripeCheckoutButton price={total} />
		</CheckoutPageContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
