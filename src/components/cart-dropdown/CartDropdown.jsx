import React from 'react'
import { connect } from 'react-redux'
// import './cartDropdown.scss'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { CartDropdownContainer, CartItemContainer, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {

	return (
		<CartDropdownContainer>
			<CartItemContainer>
				{cartItems.length ?
					cartItems.map(cartItem =>
						<CartItem key={cartItem.id} item={cartItem} />
					) : (
						<EmptyMessage>Your cart is empty</EmptyMessage>
					)
				}
			</CartItemContainer>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden())
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</CartDropdownContainer>
	)

}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))