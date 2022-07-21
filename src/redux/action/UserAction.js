import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constranst/UserContranst"

export const Login = (data) => async(dispatch) =>{
    dispatch({type:USER_LOGIN_REQUEST})
    try {
        const response = await axios.post('/user/login',data)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:response.data
        })
        localStorage.setItem('userInfo',JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

export const Register = (user)=>async(dispatch,getState)=>{
    try {
        const {data} = await axios.post(`/user/register`,user)
        localStorage.setItem("userInfo",JSON.stringify(data))
        dispatch({type:"USER_SIGNUP_SUCCESS",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getAllUser = () => async (dispatch, getState) => {
    const {
      user: {userInfo},
    } = getState()
    try {
      const {data} = await  axios.get('http://localhost:5000/user')
      console.log(data)
      dispatch({type: 'GET_ALL_USER', payload: data})
    } catch (error) {
      dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
    }
  }

  export const deleteUser = (userId) => async (dispatch, getState) => {
    const {
      user: {userInfo},
    } = getState()
    try {
      const {data} = await axios.delete(`http://localhost:5000/user/delete/${userId}`)
      dispatch({type: 'DELETE_USER', payload: data})
    } catch (error) {
      dispatch({type: 'DELETE_USER_FAIL', error: error.message})
    }
  }