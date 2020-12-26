import React from 'react'
import SignUpForm from './SignUpForm'

interface Props {}

const Auth = (props: Props) => {
    return (
        <div className="auth-page">
            <SignUpForm />
        </div>
    )
}

export default Auth
