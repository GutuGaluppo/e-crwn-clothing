import React from 'react'

import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import CollectionPage from '../collection/Collection'

import { Route } from 'react-router-dom'

const ShopComponent = ({ match }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	)
}

export default ShopComponent