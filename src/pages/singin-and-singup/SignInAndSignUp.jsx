import React from 'react'
import { SignInSingUpContainer } from './signin-signup.styles'

import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signup/SignUp'


const SignInAndSignUp = () => {
	return (
		<SignInSingUpContainer>
			<SignIn />
			<SignUp />
		</SignInSingUpContainer>
	)
}

export default SignInAndSignUp
