import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

import { CollectionPreviewContainer, PreviewDiv } from './collecttion-preview.styles'

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<h1>{title.toUpperCase()}</h1>
			<PreviewDiv>
				{items
					.filter((item, idx) => idx < 4) // filtering to display only 4 items
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewDiv>
		</CollectionPreviewContainer>
	)
}

export default CollectionPreview