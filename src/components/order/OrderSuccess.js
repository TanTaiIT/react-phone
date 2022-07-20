import React from 'react'
import './OrderSuccess.scss'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const OrderSuccess = () => {
  return (
    <div className="success">
        <div className="container">
            <div className="success_contain">
                <AiOutlineCheckCircle/>
                <h2>Đặt hàng thành công</h2>
                <div className="payment_btn">
                    <Link to="/myOrder">Xem lại đơn hàng</Link>
                    <Link to="/">Trang chủ</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default OrderSuccess