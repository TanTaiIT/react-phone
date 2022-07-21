export const OrderInfo = (state={},action)=>{
    switch(action.type){
        case "GET_ALL_ORDER": {
            return { ...state, order: action.payload };
          }
        case 'ORDER_INFO':{
            return{
                ...state,order:action.payload
            }
        }
        case "GET_ALL_ORDER_PENDDING": {
            return { ...state, orderPendding: action.payload };
          }
        

        default:
            return state
    }
} 

export const getAllOrderReducer = (state={},action)=>{
    switch(action.type){
        case "ORDER_CREATE_SUCCESS":{
            return{
                ...state,order:action.payload
            }
        }
        default:
            return state
    }
}

export const OrderOfUser = (state={},action)=>{
    switch(action.type){
        
        case "GET_ORDER_BY_USER":{
            return{
                ...state,order:action.payload
            }
        }
        case "GET_ORDER_PENDDING_BY_USER": {
            return { ...state, myOrdersPendding: action.payload };
          }
      
          case "GET_ORDER_SHIPPING_BY_USER": {
            return { ...state, myOrdersShipping: action.payload };
          }
          case "GET_ORDER_PAID_BY_USER": {
            return { ...state, myOrdersPaid: action.payload };
          }
          case "CANCEL_ORDER": {
            return { ...state, order: action.payload };
          }
        default:
            return state
    }
}

