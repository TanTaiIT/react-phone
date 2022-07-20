import React from 'react'
import './MyOrder.scss'
import Menu from './Menu'
import MyOrderRoute from './MyOrderRoute'
const MyOrderPage = () => {
  return (
    <div className="orderUser">
      <div className="container">
      <div className="order_filter">
        <Menu/>
      </div>
      <div className="myorder">
        <MyOrderRoute></MyOrderRoute>
      </div>
      </div>
      
    </div>
  )
}

export default MyOrderPage