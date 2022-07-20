import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/detail/Details'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Loading from '../components/Loading/Loading'
import { getProductDetail } from '../redux/action/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
const Detail = () => {
    window.scrollTo(0,0)
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    const details = useSelector(state=>state.getAllProduct)
    const {product} = details
    useEffect(()=>{
        const getDetail = ()=>{
            dispatch(getProductDetail(id))
            setLoading(false)
        }
        getDetail()
    },[id,dispatch])
    
  return (
   <>
   
   <Header/>
   {
    loading ? <Loading/> : (<>{product ? <Details detail={product}/> : "" }</>)
   }
  
   <Footer/>
   </>
    
  )
}

export default Detail