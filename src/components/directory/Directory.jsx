import React from 'react'
import MenuItem from '../menu-items/MenuItem'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selector'

import { DirectoryMenuContanier } from './directory.styles'

const Directory = ({ sections }) => {
	return (
		<DirectoryMenuContanier>
			{sections.map(({ id, ...otherSectionsProps }) => (
				<MenuItem
					key={id}
					{...otherSectionsProps}
				/>
			))}
		</DirectoryMenuContanier>
	)
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);