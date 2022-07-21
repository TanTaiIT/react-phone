import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderPaidByUser } from '../../../redux/action/OrderAction';
import { FormatMoney } from '../../../utils/untils';
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
export const ParentOrder = (props)=>{
  return(
      <div className="parentOrder">
          <div className="parentOrder__contain">
              <OrderItem item={props.order.orderItems}/>
          </div>
          <div className="parentOrder__footer">
         
              <span>Tong so tien:</span><h3>{FormatMoney(props.order.totalPrice) }d</h3>
          </div>
      </div>
  )
}
const Paid = () => {
  // const dispatch = useDispatch()
  const { myOrdersPaid } = useSelector((state) => state.getOrderOfUser);
  // const { userInfo } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(getOrderPaidByUser(userInfo._id));
  // }, [dispatch,userInfo]);
  return (
    <div className="allorder">
    {
        myOrdersPaid && myOrdersPaid.length > 0  ?  myOrdersPaid.map((order1,index)=>{
            return(
                <ParentOrder order={order1} key={index}/>
            )
        }) : "Bạn không có đơn hàng nào"
    }
    
</div>
    );
}

export default Paid