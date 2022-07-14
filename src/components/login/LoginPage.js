import React from 'react'
import {Link} from 'react-router-dom'
import './Login.scss'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Login } from '../../redux/action/UserAction'
const LoginPage = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: {error},
  } = useForm()
  const onSubmit = (data)=>{
    dispatch(Login(data))
  }
  return (
    <div className="main">
        <div className="login-form">
            <div className="container">
                <h2>Dang nhap</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('email') } type="text" placeholder='Email'/>
                    <input {...register('password')} type="password" placeholder='Password'/>
                    <button type="submit" className="btn-submit">Dang nhap</button>
                    <Link to='/register'>Tao tai khoan</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage