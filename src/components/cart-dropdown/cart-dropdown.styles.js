import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 260px;
	height: 40vh;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	& > button {
		margin-top: auto;
	}
`

export const CartItemContainer = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	overflow: auto;
`

export const EmptyMessage = styled.span`
	font-size: 20px;
	margin: 50px auto;
`