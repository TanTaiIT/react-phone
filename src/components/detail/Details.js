import React from 'react'
import './Details.scss'
const Details = (props) => {
    const {detail} = props
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
                            <span>Gia niem yet: <del>{detail.salePrice}</del></span>
                            <p>Sản phẩm thuộc chương trình HOT SALE CUỐI TUẦN - Nhanh tay thanh toán!</p>
                        </div>
                        <button type="button" className="btn btn-sell">
                            <h4>Mua ngay</h4>
                            <p>(Giao hang tan noi hoac lay tu cua hang)</p>
                        </button>
                        <div className="sell__group">
                            <button type="button" className="btn btn-blue">Tra gop 0%(xet duyet qua dien thoai)</button>
                            <button type="button" className="btn btn-blue">Tra gop qua the(visa, Master, JCB)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Details