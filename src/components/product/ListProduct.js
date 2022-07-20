import React, { useEffect, useState } from 'react'
import './ListProduct.scss'
import axios from 'axios'
import ProductItem from './component/ProductItem'
import { percentSale } from '../../utils/untils'
import Loading from '../Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
const ListProduct = (props) => {
    const [product,setProudct] = useState([])
    const [loading,setLoading] = useState(true)
    const name = props.title
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        const fetPro = async()=>{
            const response = await axios(`/products/${name}`)
            setProudct(response.data)
            setLoading(false)
           
        }
        fetPro()
       
    },[name,dispatch])
  return (
       <div className="product">
            <div className="container">
            <h2>{props.title}</h2>
            {
                loading ? <Loading/> : (<><div className="product__contain">
                {
                    percentSale(product).map((item,index)=>{
                        return(
                            <ProductItem pro={item} key={index} loading={loading}/>
                        )
                    })
                }
            </div></>)
            }
                
            </div>
        </div>
   
  )
}

export default ListProduct