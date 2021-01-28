import React from 'react'
import './signin-signup.styles.scss'

import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signup/SignUp'


const SignInAndSignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	)
}

export default SignInAndSignUp
