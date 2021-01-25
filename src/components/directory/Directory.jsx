import React from 'react'
import MenuItem from '../menu-items/MenuItem'
import "./directory.scss"
import DIRECTORY from './directory.data'

class Directory extends React.Component {
	constructor() {
		super()
		this.state = {
			sections: DIRECTORY
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionsProps }) => (
					<MenuItem
						key={id}
						{...otherSectionsProps}
					/>
				))}
			</div>
		)
	}
}

export default Directory;