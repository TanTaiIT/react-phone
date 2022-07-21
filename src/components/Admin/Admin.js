import React from "react";
import { useSelector } from "react-redux";
import "./Admin.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Sidebar from './components/sidebar/Sidebar'
import Routed from './components/Routed'

function Admin(props) {
  const userSignin = useSelector((state) => state.user);
  const { userInfo, error } = userSignin;

  return (
   
      
          <div className={`layout`}>
            <Sidebar />
            <div className="layout__content">

              <div className="layout__content-main">
                <Routed />
              </div>
            </div>
          </div>
        
      
    
    
  );
}

export default Admin;
