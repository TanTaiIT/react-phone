import React from 'react'
import './Banner.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'
const Banner = () => {

    const Next = ()=>{
        return(
                <div className="slide-control__prev">
                    <GrFormPrevious/>
                </div>  
        )
      }
      const Prev = () =>{
        return (
        <div className="slide-control__next">
            <GrFormNext/>
        </div>
        )
      }
    const settings = {
        loop:true,
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Next/>,
        prevArrow: <Prev/>,
      };
      
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__contain">
                <div className="hero__contain__left">
                    <div className="hero__contain__left__top">
                    <Slider {...settings}>
                        <div className="img">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png" alt=""></img>
                        </div>
                        <div className="img">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png" alt=""></img>
                        </div>
                        <div className="img">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png" alt=""></img>
                        </div>
                        <div className="img">
                            <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png" alt=""></img>
                        </div>
                    </Slider>
                    <div className="slide-control">
                        <Next/>
                        <Prev/>
                    </div>
                    </div>
                    <div className="hero__contain__left__bottom">
                        <div className="container">
                            <div className="hero__contain__left__bottom__cover">
                                <Slider 
                                        slidesToShow={4}>
                                    <div className="hero__contain__left__bottom__cover__item">
                                        <h4>NOTE 20 ULTRA 5G</h4>
                                        <p>Hotsale giam sap san</p>
                                    </div>
                                    <div className="hero__contain__left__bottom__cover__item">
                                        <h4>NOTE 20 ULTRA 5G</h4>
                                        <p>Hotsale giam sap san</p>
                                    </div>
                                    <div className="hero__contain__left__bottom__cover__item">
                                        <h4>NOTE 20 ULTRA 5G</h4>
                                        <p>Hotsale giam sap san</p>
                                    </div>
                                    <div className="hero__contain__left__bottom__cover__item">
                                        <h4>NOTE 20 ULTRA 5G</h4>
                                        <p>Hotsale giam sap san</p>
                                    </div>
                                    <div className="hero__contain__left__bottom__cover__item">
                                        <h4>NOTE 20 ULTRA 5G</h4>
                                        <p>Hotsale giam sap san</p>
                                    </div>

                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="hero__contain__right">
                    <div className="hero__contain__right__item">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png" alt=""></img>
                    </div>
                    <div className="hero__contain__right__item">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png" alt=""></img>
                    </div>
                    <div className="hero__contain__right__item">
                        <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/RB_S21.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner