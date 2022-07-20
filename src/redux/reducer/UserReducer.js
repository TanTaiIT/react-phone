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

export const UserSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_SUCCESS':
            return {...state, userInfo: action.payload };
        default:
            return state;
    }
};

export const getAllUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_USER':{
            return {...state, user: action.payload}
        }

        case 'DELETE_USER':{
            return {...state}
        }

        default: return state
    }
}