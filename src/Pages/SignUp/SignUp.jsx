import React from 'react'
import SignUpForm from './SignUpForm'
import '../../App.css'

const SignUp = ({count}) => {
  return (
    <div className={`${count === 1 ? 'slide-notvisible' : 'slide-visiblee'}`}>
        <SignUpForm></SignUpForm>
    </div>
  )
}

export default SignUp