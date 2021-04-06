import React from 'react'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoading } from '../../redux/shop/shop.selector'

import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import CollectionPage from '../collection/Collection'

import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/WithSpinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props
		fetchCollectionsStartAsync()
	}

	render() {

		const { match, isCollectionFetching, selectIsCollectionsLoading } = this.props

		return (
			<div className="shop-page">
				<Route
					exact path={`${match.path}`}
					render={(props) =>
						<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
					}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) =>
						<CollectionPageWithSpinner isLoading={!selectIsCollectionsLoading} {...props} />
					}
				/>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	selectIsCollectionsLoading: selectIsCollectionsLoading
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)