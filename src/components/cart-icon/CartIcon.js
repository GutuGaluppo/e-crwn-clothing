import React from 'react'
import './cartIcon.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { toogleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CartIcon = ({ toogleCartHidden }) => {
	return (
		<div className="cart-icon" onClick={toogleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	toogleCartHidden: () => dispatch(toogleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)