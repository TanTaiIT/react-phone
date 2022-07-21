import React from 'react'
import './Details.scss'
import { addToCart } from '../../redux/action/ProductAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Restart from './component/Rastart'
const Details = (props) => {
    const {detail} = props
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ByNowHandler = (detail)=>{
        dispatch(addToCart(detail))
        navigate('/cart')
    }
  return (
    <div className="main">
    <div className="productDetail">
     
        <div className="container">
        <h2>{detail.name}</h2>
            <div className="productDetail__contain">
                <div className="productDetail__contain__left">
                    <div className="detail__img">
                        <img src={detail.image} alt=""/>
                    </div>
                </div>
                <div className="productDetail__contain__right">
                    <div className="productDetail__contain__right__info">
                        <div className="price">
                            <span>{detail.price}</span>
                            <span>Giá niêm yết: <del>{detail.salePrice}</del></span>
                            <p>Sản phẩm thuộc chương trình HOT SALE CUỐI TUẦN - Nhanh tay thanh toán!</p>
                        </div>
                        <button type="button" className="btn btn-sell" onClick={()=>ByNowHandler(detail)}>
                            <h4>Mua ngay</h4>
                            <p>(Giao hàng tận nơi hoặc lấy từ cửa hàng)</p>
                        </button>
                        <div className="sell__group">
                            <button type="button" className="btn btn-blue">Trả góp 0%(xét duyệt qua điện thoại)</button>
                            <button type="button" className="btn btn-blue">Trả góp qua thẻ(visa, Master, JCB)</button>
                        </div>
                    </div>
                </div>
            </div>
            <Restart/>
    
        </div>
    </div>
</div>

  )
}

export default Details