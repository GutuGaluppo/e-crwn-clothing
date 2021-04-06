import React from 'react'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import { CartIconContainer, ShoppingCartIcon, ItemCount } from './cart-item.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<CartIconContainer onClick={toggleCartHidden}>
			<ShoppingCartIcon />
			<ItemCount>{itemCount}</ItemCount>
		</CartIconContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)