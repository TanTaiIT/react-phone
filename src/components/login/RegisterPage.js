import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Register } from '../../redux/action/UserAction';
const RegisterPage = () => {
  const [password,setPassword] = useState('')
  const [repassword,setRepassword] = useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (data)=>{
    if(password === repassword){
      dispatch(Register(data))
      navigate('/')
    }else{
      alert('password khong khop')
    }
  }
  return (
    <div className="main">
        <div className="login-form">
            <div className="container">
                <h2>Dang ky</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type="text" placeholder='name'/>
                    <input {...register("email")} type="email" placeholder='email'/>
                    <input {...register("password")} type="password" onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
                    <input {...register("repassword")} type="password" onChange={(e)=>setRepassword(e.target.value)} placeholder='Password'/>
                    <button type="submit" className="btn-submit">Dang ky</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage