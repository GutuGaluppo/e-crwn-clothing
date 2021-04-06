import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/WithSpinner'
import CollectionsOverview from '../collections-overview/CollectionOverview'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer

