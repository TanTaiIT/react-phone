import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import { getOrderPenddingByUser, getOrderShippingByUser,getOrderByUser, getOrderPaidByUser } from '../../redux/action/OrderAction'
import './Menu.scss'
const Menu = () => {
    const location = useLocation()
    const {pathname} = location
    const {_id} = useSelector(state=>state.user.userInfo)
    const {myOrdersShipping} = useSelector(state=>state.getOrderOfUser)
    const {myOrdersPendding} = useSelector(state=>state.getOrderOfUser)
    const {myOrdersPaid} = useSelector(state=>state.getOrderOfUser)
    const {order} = useSelector(state=>state.getOrderOfUser)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        const getAllOrderState = ()=>{
            dispatch(getOrderPaidByUser(_id))
            dispatch(getOrderByUser(_id))
            dispatch(getOrderPenddingByUser(_id))
            dispatch(getOrderShippingByUser(_id))
            
        }
        getAllOrderState()
    },[dispatch,_id])
  return (
    <div className="menu">
        <div className="menu_contain">
        <div className={`menu__item ${pathname === '/myorder' ? 'active' : ''}`}>
            <Link to='/myorder' >Tất cả</Link>
            
        </div>
        <span>{order && order.length}</span>
        </div>
        
        <div className="menu_contain">
        <div className={`menu__item ${pathname === '/myorder/pendding' ? 'active' : ''}`}>
            <Link to='/myorder/pendding' >Chờ xử lý</Link>
            
        </div>
        <span>{myOrdersPendding && myOrdersPendding.length}</span>
        </div>
        <div className="menu_contain">
        <div className={`menu__item ${pathname === '/myorder/shipping' ? 'active' : ''}`}>
            <Link to='/myorder/shipping' >Đang giao</Link>
            
        </div>
        <span>{myOrdersShipping && myOrdersShipping.length}</span>
        </div>
        <div className="menu_contain">
        <div className={`menu__item ${pathname === '/myorder/paid' ? 'active' : ''}`}>
            <Link to='/myorder/paid' >Đã giao</Link>
            
        </div>
        <span>{myOrdersPaid && myOrdersPaid.length}</span>
        </div>

    </div>
  )
}

export default Menu