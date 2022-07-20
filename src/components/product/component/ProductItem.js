import React,{useState} from 'react'
import './ProductItem.scss'
import { FormatMoney } from '../../../utils/untils'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/action/ProductAction'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../Loading/Toast'

const ProductItem = (props) => {
  const ToastOject = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000
  }
  const ToastId = React.useRef(null)
   const dispatch = useDispatch()
   const handleCart = (pro)=>{
    dispatch(addToCart(pro))
    if (!toast.isActive(ToastId.current)) {
      ToastId.current = toast.success("Đã thêm sản phẩm vào giở hàng", ToastOject)
    }
   }
    const item = props.pro
  return (
    <>
    <Toast/>
    <div className="product__contain__item">
      <Link to={`/detail/${item._id}`}>
        <div className="product-img">
            <img src={item.image} alt="name"/>
            <span className="sale">{item.percentDiscount}%</span>
        </div>
        </Link>
        <h3>{item.name}</h3>
        <div className="price">
            <span>{FormatMoney(item.price)}đ</span><del>{item.salePrice} đ</del>
        </div>
        <button className="btn buy" onClick={()=>handleCart(item)}>Mua ngay</button>
    </div>
    </>
  )
}

export default ProductItem