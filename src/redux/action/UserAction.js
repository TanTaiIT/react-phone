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