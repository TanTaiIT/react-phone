export const Address = (state={},action)=>{
    switch(action.type){
        case "GET_PROVINCE":{
            return{
                ...state,province:action.payload
            }
        }
        case "GET_DISTRICT":{
            return{
                ...state,district:action.payload
            }
        }
        case "GET_WARD":{
            return{
                ...state,ward:action.payload
            }
        }
        default:
            return state
    }
}