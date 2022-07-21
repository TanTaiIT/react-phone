import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllOrder from './component/AllOrder'
import Paid from './component/Paid'
import Pedding from './component/Pedding'
import Shipping from './component/Shipping'
const MyOrderRoute = () => {
  return (
    <Routes>
        <Route exact path="/" element={<AllOrder/>}/>
        <Route path='/pendding' element={<Pedding/>}/>
        <Route path='/shipping' element={<Shipping/>} />
        <Route path='/paid' element={<Paid/>}/>
    </Routes>
  )
}

export default MyOrderRoute