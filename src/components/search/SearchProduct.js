import React from 'react'
import ProductItem from '../product/component/ProductItem'
import './Search.scss'
const SearchProduct = (props) => {
    const {productSale} = props
  return (
    <>
        <div className="product__contain1">
            <div className="container">
                <div className="product__contain__cover">
                {
          productSale.map((item,index)=>{
              return(
                  <ProductItem pro={item} key={index} />
              )
                })
            }
                </div>
            
            </div>
        </div>
    </>
  )
}

export default SearchProduct