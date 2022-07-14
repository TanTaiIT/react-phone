import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeCart, removeItem } from '../../redux/action/ProductAction'
import { FormatMoney } from '../../utils/untils'
export const CartItem = (props) => {
    const cart = props.cart
    const dispatch = useDispatch()
    const delCartHandle = (Id) =>{
        dispatch(removeCart(Id))
    }
    const handleDel = (Id) =>{
        dispatch(removeItem(Id))
    }
    const handleAdd = (Id)=>{
        dispatch(addToCart(Id))
    }
  return (
    <div className="cartItem">
        <div className="cartImg">
            <img src={cart.image} alt=""/>
        </div>
        <div className="cartInfo">
            <p>{cart.name}</p>
            <span>{FormatMoney(cart.price)} d</span>
        </div>
        <div className="cartAction">
            <div className="Action">
                <span className="subtract" onClick={()=>handleDel(cart._id)}> - </span>
                <span className="display">{cart.qty}</span>
                <span className="plus" onClick={()=>handleAdd(cart)}> + </span>
            </div>
            
            <p onClick={()=>delCartHandle(cart._id)}>Xoa khoi gio hang</p>
        </div>
    </div>
  )
}
