import React from 'react'
import {Link} from 'react-router-dom'
const RegisterPage = () => {
  return (
    <div className="main">
        <div className="login-form">
            <div className="container">
                <h2>Dang ky</h2>
                <form>
                    <input type="name" placeholder='Email'/>
                    <input type="email" placeholder='Password'/>
                    <input type="password" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button type="submit" className="btn-submit">Dang ky</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage