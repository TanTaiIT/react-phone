import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constranst/UserContranst";

export const UserReducer = (state= {},action) =>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                ...state,loading:true
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,userInfo:action.payload,loading:false
            }
        case USER_LOGIN_FAIL:
            return{
                ...state,error:action.payload
            }
        default:
            return state
    }
}