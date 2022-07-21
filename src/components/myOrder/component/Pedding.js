import React from 'react'
import { FormatMoney } from '../../../utils/untils';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderPenddingByUser } from '../../../redux/action/OrderAction';
import { cancelOrder } from '../../../redux/action/OrderAction';



export const ParentOrder = (props)=>{
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user);
  const handleCancelOrder = async (item) => {
    await dispatch(cancelOrder(item._id));
    dispatch(getOrderPenddingByUser(userInfo._id));
  };
  return(
      <div className="parentOrder">
          <div className="parentOrder__contain">
              <OrderItem item={props.order.orderItems}/>
          </div>
          <div className="parentOrder__footer">
          {
            props.order.paymentMethod==="payOnline" ? ( 
            <span>Đã thanh toán</span>
        ) : (
              <><span>Tong so tien:</span><h3>{FormatMoney(props.order.totalPrice) }d</h3></>
          )
          }
          <div className="order-cancel">
            {
              props.order.cancelOrder ?  (<span>Đang yêu cầu hủy đơn</span>) : (<span onClick={() => handleCancelOrder(props.order)}>Hủy đơn hàng</span>)
            }
          </div>
          </div>
          
          
          
          
      </div>
  )
}

export const OrderItem = (props)=>{
  return (
      <div className="order-list">
      <div className="container">
          <div className="order-list__contain">
              {
                  props.item.map((ite,index)=>{
                      return(
                  <div className="order-list__contain__item" key={index}>
                      <div className="order-list__contain__item__left">
                          <img src={ite.image} alt=""/>
                          <div className="order-title">
                              <h4>{ite.name}</h4>
                              <span>X {ite.qty}</span>
                          </div>
                      </div>
                          <div className="order-list__contain__item__right">
                              <span className="price">{FormatMoney(ite.salePrice)} d</span>
                          </div>
                   </div>
                      )
                  })
              }
              
          </div>
      </div>

  </div>
  )
}
const Pedding = () => {
    const { myOrdersPendding } = useSelector((state) => state.getOrderOfUser);
    return (
      <div className="allorder">
      {
          myOrdersPendding && myOrdersPendding.length > 0 ?  myOrdersPendding.map((order1,index)=>{
              return(
                  <ParentOrder order={order1} key={index}/>
              )
          }) : "Bạn không có đơn hàng nào"
      }
      
  </div>
      );
}

export default Pedding