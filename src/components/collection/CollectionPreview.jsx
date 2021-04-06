import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../collectionItem/CollectionItem'

import { CollectionPreviewContainer, PreviewDiv } from './collecttion-preview.styles'

const CollectionPreview = ({ title, items, history, match, routeName }) => {

	return (
		<CollectionPreviewContainer>
			<h1 onClick={() => history.push(`${match.path}/${routeName}`)}>
				{title.toUpperCase()}
			</h1>
			<PreviewDiv>
				{items
					.filter((item, idx) => idx < 4) // filtering to display only 4 items
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewDiv>
		</CollectionPreviewContainer >
	)
	
}

export default withRouter(CollectionPreview)