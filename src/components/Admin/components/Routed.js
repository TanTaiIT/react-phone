import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminCreate from './AdminProduct/AdminCreate'
import AdminUpdate from './AdminProduct/AdminUpdate'
import AdminOrder from './AdminOrder/AdminOrder'
import AdminUser from './AdminUser/AdminUser';
import AppChat from './AppChat/AppChat'
import ReviewProduct from './AdminProduct/ReviewProduct/ReviewProduct';
import DataFilterProduct from './AdminProduct/DataFilterProduct/DataFilterProduct';

function Routed(props) {
    return (
        <Routes>
            <Route path='/' exact element={<Dashboard/>}/>
            <Route path='/customer' element={<AdminUser/>}/>
            <Route path='/product/create' element={<AdminCreate/>}/>
            <Route path='/admin/product/update/info' element={DataFilterProduct}/>
            <Route path='/product/update/:id' element={<AdminUpdate/>}/>
            <Route path='/product/reviewProduct/:id' element={<ReviewProduct/>}/>
            <Route path='/product' element={<AdminProduct/>}/>
            <Route path='/order/*' element={<AdminOrder/>}/>
            <Route path='/admin/chat' element={AppChat}/>
        </Routes>
    );
}

export default Routed;