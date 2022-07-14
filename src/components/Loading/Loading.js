import React from 'react'
import ReactLoading from "react-loading";
import './Loading.scss'
const Loading = () => {
  return (
    <div className="loading">
        <ReactLoading type="bars" color="#d70018"/>
    </div>
    
  )
}

export default Loading