import React from 'react'
import Banner from '../components/banner/Banner'
import ListProduct from '../components/product/ListProduct'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div className="main">
        <Header/>
        <Banner/>
        <ListProduct title="iphone"/>
        <ListProduct title="xiaomi"/>
        <ListProduct title="samsung"/>
        <Footer/>
    </div>
  )
}

export default Home