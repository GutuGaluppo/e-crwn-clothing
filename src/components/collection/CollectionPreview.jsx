import React from 'react'
import './collectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
				.filter((item, idx) => idx < 4) // filtering to dusplay only 4 items
				.map(({id, ...otherItemProps}) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
			</div>
		</div>
	)
}

export default CollectionPreview