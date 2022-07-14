import React from 'react'
import './Order.scss'
const OrderPage = () => {
  return (
    <div className="order">
      <div className="container">
        <div className="order__contain">
          <form>
            <h3>Thong tin khach hang</h3>
            <div className="form-group">
              <input type="text" placeholder='Ho va ten' />
              <input type="text" placeholder='So dien thoai'/>
            </div>
            <h3>Chon dia chi</h3>
              <div className="form-group">
                <select>
                  <option>tai</option>
                </select>
                <select>
                  <option>dat</option>
                </select>
                </div>
                <div className="form-group">
                <select>
                  <option>hai</option>
                </select>
                <input type="text" placeholder='So nha,duong'/>
                </div>
          
              <h3>Chon phuong thuc thanh toan</h3>
              <div className="form-group">
                <button type="button" className="payment">
                  Thanh toan khi nhan hang
                </button>
                <button type="button" className="payment">
                  Thanh toan online
                </button>
              </div>
              <div className="paymentFull">
                <button type="button" className="payfull">dat hang</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderPage