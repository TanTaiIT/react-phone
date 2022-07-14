import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ProductList} from '../components/ProductList/ProductList'
import { percentSale } from '../utils/untils'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Loading from '../components/Loading/Loading'


const Product = () => {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const getProduct = async() =>{
      const response = await axios.get('/products')
      setProduct(response.data)
      setLoading(false)
    }
    getProduct()
    
  },[])
  return (
    <>
    <Header/>
    <div className="main">
        <div className="product_list">
          {
            loading ? <Loading/> : (<><div className="container">
            {
              product && <ProductList productSale={percentSale(product)}/>
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