import React from 'react'
import Login from './Login'
import '../../App.css'

const LoginPage = ({count}) => {
  return (
    <div className={`${count === 1 ? 'slide-notvisible' : 'slide-visiblee'}`}>
        <Login></Login>
    </div>
  )
}

export default LoginPage