import React from 'react'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collectionItem/CollectionItem'

import { CollectionPageContainer, CollectiosItem } from './collection_page.styles'

const CollectionPage = ({ collections }) => {
	const { title, items } = collections
	return (
		<CollectionPageContainer>
			<h2>{title}</h2>
			<CollectiosItem>
				{items.map(item =>
					<CollectionItem key={item.id} item={item} />
				)}
			</CollectiosItem>
		</CollectionPageContainer>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)