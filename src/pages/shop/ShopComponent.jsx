import React from 'react'
import CollectionPreview from '../../components/collection/CollectionPreview'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selector'

const ShopComponent = ({ collection }) => {
	return (
		<div className="shop-page">
			{
				collection
					.map(({ id, ...otherCollectionProps }) => (
						<CollectionPreview key={id} {...otherCollectionProps} />
					))
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collection: selectCollections
})
export default connect(mapStateToProps)(ShopComponent)