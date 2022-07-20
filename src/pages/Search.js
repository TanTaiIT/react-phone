import React from 'react'
import Header from '../components/header/Header'
import SearchProduct from '../components/search/SearchProduct'
import { useSelector } from 'react-redux'
import { percentSale } from '../utils/untils'

const Search = () => {
    const searchPro = useSelector(state=>state.searchProduct.product)
    // const errors = useSelector(state=>state.searchPro.error)
    
    
    
  return (
    <>
        <Header/>
        {searchPro && searchPro.length > 0 ?  <SearchProduct productSale={percentSale(searchPro)}/> : <div className="error container"><span style={{display:"block",marginTop:"100px",color:"#d70018",fontSize:"1.3rem"}}>Khong tim thay san pham</span>
            </div>}
    </>
  )
}

export default Search