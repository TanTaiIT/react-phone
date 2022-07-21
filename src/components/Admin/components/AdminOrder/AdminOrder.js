import React from "react";
import "./AdminOrder.css";
import AdminOrderMenu from "./AdminOrderMenu/AdminOrderMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";


function AdminOrder(props) {

  return (
      <div className="order">
        <span>Orders</span>
        <AdminOrderMenu></AdminOrderMenu>
        <AdminOrderAll/>
        {/* <Routes>
          <Route path="/order" exact element={} />
        </Routes> */}
      </div>
  
  );
}

export default AdminOrder;
