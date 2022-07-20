import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseProduct, increaseProduct } from '../../redux/action/ProductAction'
import './ProductFilter.scss'
const ProductFilter = () => {
  const dispatch = useDispatch()
  const handleChange = (e)=>{
    const val =e.target.value
    if(val === 'decrease'){
      increases()
     
      
    }else(
      decreases()
    )
  }
  const decreases = () =>{
    dispatch(decreaseProduct())
  }
  const increases = ()=>{
    dispatch(increaseProduct())
  }
  
  return (
    <div className="sort">
      <select onChange={handleChange}>
        <option disabled selected={true}>_____Sắp xếp theo giá_____</option>
        <option value="increase">Tăng dần</option>
        <option value="decrease">giảm dần</option>
      </select>
    </div>
  )
}

export default ProductFilter