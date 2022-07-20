import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ProductList} from '../components/ProductList/ProductList'
import { percentSale } from '../utils/untils'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Loading from '../components/Loading/Loading'
import ProductFilter from '../components/ProductList/ProductFilter'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../redux/action/ProductAction'

const Product = () => {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(true)
  const pro = useSelector(state=>state.allProduct.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    const getProduct = async() =>{
      dispatch(getAllProduct())
      // const response = await axios.get('/products')
      // setProduct(response.data)
      setLoading(false)
    }
    getProduct()
    
  },[dispatch])
  return (
    <>
    <Header/>
    <div className="main">
        <div className="product_list">
        
          {
            loading ? <Loading/> : (<><div className="container">
              <ProductFilter/>
            {
              pro && <ProductList productSale={percentSale(pro)}/>
            }
          </div></>) 
          }
          
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Product