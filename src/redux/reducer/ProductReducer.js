const initialState = {
    product:[],
    currentPage: 1
}
export const AllProductReducer = (state={},action)=>{
    switch(action.type){
        case "REVIEW_PRODUCT" :{
            return {...state,product:action.payload}
        }
        case "GET_PRODUCT_BY_ID":{
            return {...state,product:action.payload}
        }
        case 'REMOVE_PRODUCT_BY_ID':{
            return {}
        }
        case 'DELETE_PRODUCT':{
            return {...state, product: action.payload}
        }
        default:
            return state
    }
}
export const SearchProduct = (state={},action)=>{
    switch(action.type){
        case "SEARCH_PRODUCT":{
            return{
                ...state,product:action.payload
            }
        }
        case "SEARCH_PRODUCT_FAIL":{
            return{
                ...state,error:action.payload
            }
        }
        default:
            return state
    }
}

export const AllProduct = (state=initialState,action)=>{
    switch(action.type){
        case "GET_ALL_PRODUCT":{
            return{
                ...state,product:action.payload
            }
        }
        case "DESCENDING_PRODUCT":{
            let newList = [...state.product]
            newList = newList.sort((a,b)=> a.salePrice-b.salePrice)
            return{
                state,product:newList
            }

        }
        case "INCENDING_PRODUCT":{
            let newList = [...state.product]
            newList = newList.sort((a,b)=> b.salePrice - a.salePrice)
            return{
                state,product:newList
            }

        }
        case 'EDIT_CURRENT_PAGE':{
            return {...state, currentPage: action.payload}
        }
        case 'PAGINATION_PRODUCT':
            console.log(action.payload)
            return {...state, product: action.payload}
        
        default:
            return state
    }
}