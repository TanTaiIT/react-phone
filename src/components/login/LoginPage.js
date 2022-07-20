import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.scss'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../redux/action/UserAction'
const LoginPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user.userInfo)
  const {
    register,
    handleSubmit,
    watch,
    formState: {error},
  } = useForm()
  const onSubmit = (data)=>{
    dispatch(Login(data))
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  })
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