import React from 'react'
import ProductItem from '../product/component/ProductItem'

export const ProductList = (props) => {
    const {productSale,loading} = props
    
  return (
    <div className="product__contain">
                {
                    productSale.map((item,index)=>{
                        return(
                            <ProductItem pro={item} key={index} loading={loading}/>
                        )
                    })
                }
    </div>
  )
}
