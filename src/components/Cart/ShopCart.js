import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import {Link, useNavigate} from 'react-router-dom'
import './ShopCart.scss'
import { FormatMoney } from '../../utils/untils'
const ShopCart = () => {
    const CartList = useSelector(state => state.cartReducer)
    const {cartItem} = CartList
    const total = cartItem.reduce((a,b) => a + b.qty * b.price,0)
    const navigate = useNavigate()
    const orderhandle = ()=>{
        navigate('/order')
    }
  return (
    <div className="cart">
        <div className="container">
            <div className="cart_contain">
                <div className="cart_contain__head">
                    <Link to='/'>Tiep tuc mua hang</Link>
                    <h2>Gio hang</h2>
                </div>
                <div className="cart_contain__body">
                    {
                        cartItem.map((cart,index)=>{
                            return(
                                <CartItem key={index} cart={cart}/>
                            )
                        })
                    }
                </div>
                <div className="cart_contain__footer">
                    <div className="flex"><span>Tong tien</span> <span className="total">{FormatMoney(total)} d</span></div>
                    <div className="order">
                        <button type="button" onClick={orderhandle} className="btn btn-sell">Dat hang</button>
                    </div>
                </div>
                

            </div>
        </div>
        

    </div>
  )
}

export default ShopCart