import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/detail/Details'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Loading from '../components/Loading/Loading'
const Detail = () => {
    window.scrollTo(0,0)
    const {id} = useParams()
    const [detail,setDetail] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const getDetail = async()=>{
            const response = await axios.get(`/products/detail/${id}`)
            setDetail(response.data)
            setLoading(false)
        }
        getDetail()
    },[id])
  return (
   <>
   
   <Header/>
   {
    loading ? <Loading/> : (<><Details detail={detail}/></>)
   }
  
   <Footer/>
   </>
    
  )
}

export default Detail