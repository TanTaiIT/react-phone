import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderByUser } from '../../../redux/action/OrderAction'
import './AllOrder.scss'
import {FormatMoney} from './../../../utils/untils'
const AllOrder = () => {
    const user = useSelector(state => state.user.userInfo)
    const allorder = useSelector(state => state.getOrderOfUser.order)
    const {_id} = user
    const dispatch = useDispatch()
    useEffect(()=>{
        const getOrder = async()=>{
            dispatch(getOrderByUser(_id))
        }
        getOrder()
    },[dispatch,_id])

  return (
    <div className="allorder">
        {
            allorder && allorder.map((order,index)=>{
                return(
                    <ParentOrder order={order} key={index}/>
                )
            })
        }
        
    </div>
  )
}

export const OrderItem = (props)=>{
    return (
        <div className="order-list-l">
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

export default AllOrder