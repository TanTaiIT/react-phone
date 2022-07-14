export const AddToCard = (state = {cartItem : []},action)=>{
    switch(action.type){
        case "ADD_TO_CARD":{
           let newList = [...state.cartItem] 
           const exist = newList.find(item => item._id === action.payload._id)
           if(exist){
            newList = newList.map((news)=> news._id === action.payload._id ? {...exist,qty : exist.qty + 1} : news)
           }else{
            const product = {
                ...action.payload,qty:1
            }
            newList.push(product)
           }
           localStorage.setItem('cartItems',JSON.stringify(newList))
            return {
                ...state,cartItem: newList
            }
        }
        case "REMOVE_CART":{
            let newList = [...state.cartItem]
            newList = newList.filter((item)=> item._id !== action.payload)
            localStorage.setItem('cartItems',   JSON.stringify(newList))
            return{
                ...state,cartItem:newList
            }
        }
            
        case "REMOVE_ITEM":{
            let newList = [...state.cartItem] 
            const exist = newList.find((news)=> news._id === action.payload)
            if(exist.qty === 1){
                newList = newList.filter((fil)=> fil._id !== exist._id)
            }else{
                newList = newList.map((news)=> news._id === exist._id ? {...exist,qty:exist.qty-1} : news)
            }
            return {
                ...state,cartItem: newList
            }
        }
                
        default : 
            return state
        
    }
}