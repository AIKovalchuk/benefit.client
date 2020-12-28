import React from 'react'
import SignUpForm from './SignUpForm'
import AcceptProfile from './AcceptProfile'
import RegisterProvider, { registerContext } from '../../../providers/RegisterProvider'

interface Props {}

const SignUp = (props: Props) => {
    return (
        <div className="auth-page">
            <RegisterProvider>
                <Inner />
            </RegisterProvider>
        </div>
    )
}

const Inner = () => {
    const { person } = React.useContext(registerContext)
    return (
        <div className="reg-form">
            {console.log(person)}
            {person === null ? (
                <>
                    <div className="title"></div>
                    <SignUpForm />
                </>
            ) : (
                <>
                    <div></div>
                    <AcceptProfile />
                </>
            )}
        </div>
    )
}

export default SignUp
