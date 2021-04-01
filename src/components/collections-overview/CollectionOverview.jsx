import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection/CollectionPreview'

import { CollectionOverviewContainer } from './collections-overview.styles'

const CollectionOverview = ({ collections }) => {
	return (
		<CollectionOverviewContainer>
			{
				collections
					.map(({ id, ...otherCollectionProps }) => (
						<CollectionPreview key={id} {...otherCollectionProps} />
					))
			}
		</CollectionOverviewContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)