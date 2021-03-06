import React, { Component } from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import { SignInContainer, ButtonContainer } from './singin.styles'
class SignIn extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async e => {
		e.preventDefault()

		const { email, password } = this.state

		try {

			await auth.signInWithEmailAndPassword(email, password)
			this.setState({
				email: '',
				password: ''
			})

		} catch (error) {
			console.error(error)
		}


	}

	handleChange = e => {
		const { value, name } = e.target

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<SignInContainer>
				<h2>I already have an account</h2>
				<span>Sing in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<ButtonContainer>
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
					</ButtonContainer>
				</form>

			</SignInContainer>
		)
	}
}

export default SignIn