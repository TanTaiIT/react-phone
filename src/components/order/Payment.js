import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../redux/action/OrderAction'
import VnPay from './VnPay'
const Payment = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [choosePay, setChoosePay] = useState({
    payLater:false,
    payOnline:false
  })
  const payLaterHandler = () =>{
    setChoosePay({payOnline:false,payLater:true})
  }
  const payOnlineHandler = () =>{
    setChoosePay({payLater:false,payOnline:true})
  }
  const OrderState = useSelector(state=>state.orderReducer)
  const {order} = OrderState
  const payMentLaterHandler = ()=>{
    const OrderPaid={
      ...order,
      status:"pendding",
      paymentMethod:"payLater"
    }
    dispatch(createOrder(OrderPaid))
    navigate('/success')
  }
  return (
    <>
        <h3>Chọn phương thức thanh toán</h3>
              <div className="form-group">
                <button type="button" className={`${choosePay.payLater ? 'active' : ''}`} onClick={payLaterHandler}>
                  Thanh toán khi nhận hàng
                </button>
                <button type="button" className={`${choosePay.payOnline ? 'active' : ''}`} onClick={payOnlineHandler}>
                  Thanh toán online
                </button>
              </div>
              {
                choosePay.payLater ? 
                <div className="paymentFull">
                  <button type="button" className="payfull" onClick={payMentLaterHandler}>Đạt hàng</button>
                </div> : ''
              }
              {
                choosePay.payOnline ? 
                  <div className="paypal">
                    <VnPay></VnPay>
                  </div> : ""
              }
              
    </>
  )
}

export default Payment