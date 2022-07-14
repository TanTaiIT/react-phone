export const addToCart = (data)=>{
    return {
        type:"ADD_TO_CARD",
        payload: data
    }
}

export const removeCart = (id) =>{
    return {
        type:"REMOVE_CART",
        payload:id
    }
}

export const removeItem = (id)=>{
    return{
        type:"REMOVE_ITEM",
        payload:id
    }
}