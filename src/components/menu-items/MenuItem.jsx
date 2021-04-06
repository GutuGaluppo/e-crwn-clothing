import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer, BackgroundImageContainer, ContentContainer } from './menu-item.styles'

function MenuItem({ title, imageUrl, size, match, linkUrl, history }) {
	return (
		<MenuItemContainer size={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<BackgroundImageContainer
				className='background-image'
				imageUrl={imageUrl}
			/>
			<ContentContainer className="content">
				<h1>{title.toUpperCase()}</h1>
				<span>SHOP NOW</span>
			</ContentContainer>
		</MenuItemContainer>
	)
}

export default withRouter(MenuItem);