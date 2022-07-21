import React,{useState} from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import './Restart.scss'
import StarRatings from 'react-star-ratings'
import { useDispatch, useSelector } from 'react-redux'
import { reviewProduct } from '../../../redux/action/ProductAction'
import { useLocation, useParams } from 'react-router-dom'
import { AllProductReducer } from '../../../redux/reducer/ProductReducer'
const Rastart = () => {
    const [star,setStar] = useState(0)
    const [showRate,setShowRate] = useState(false)
    const [showEvaluate,setShowEvaluate] = useState(false)
    const [evaluate,setEvaluate] = useState('')
    const user = useSelector(state=>state.user.userInfo)
    
    const Pro = useSelector(state=>state.getAllProduct.product)
    if(user){
        var userExist = Pro.reviews.find((x)=>x.name === user.name)
    }
    const countReview = Pro.reviews.length
    const dispatch = useDispatch()
    const {id} = useParams()
    const changeRating = (value) =>{
        setStar(value)
        setShowEvaluate(true)
    }
    const onFinish = ()=>{
        const review = {
            name:user.name,
            star:star,
            comment:evaluate
        }
        dispatch(reviewProduct(id,review))
        setEvaluate('')
        setShowRate(false)
        setShowEvaluate(false)
    }
    let averageRate = Math.round(Pro.reviews.reduce((a,c) => a + c.star, 0) / countReview)
    const fiveStar = Math.round(Pro.reviews.filter(x => x.star === 5).length / countReview * 100)
    const fourStar = Math.round(Pro.reviews.filter(x => x.star === 4).length / countReview * 100)
    const threeStar = Math.round(Pro.reviews.filter(x => x.star === 3).length / countReview * 100)
    const twoStar = Math.round(Pro.reviews.filter(x => x.star === 2).length / countReview * 100)
    const oneStar = Math.round(Pro.reviews.filter(x => x.star === 1).length / countReview * 100)
  return (
    <div className="rateStar">
        <div className="container">
            <h3>{countReview} Đánh giá {Pro.name}</h3>
            <div className="rate">
                <div className="rate-info">
                    <div className="rate-info__left">
                    <h2>Sao trung bình</h2>
                        <div className="flex">
                            <span>{averageRate}</span><AiOutlineStar/>
                        </div>
                        
                    </div> 
                    <div className="rate-info__center">
                        <div className="rate-info__center__item">
                            <div className="item-star">
                                <span>5</span><AiOutlineStar/>
                            </div>
                            <div className="processes">
                                <span className="process" style={{maxWidth:`${fiveStar}%`}}></span>  
                            </div>
                           
                            {/* <span className="percen" >100%</span> */}
                        </div>

                        <div className="rate-info__center__item">
                            <div className="item-star">
                                <span>4</span><AiOutlineStar/>
                            </div>
                            <div className="processes">
                                <span className="process" style={{maxWidth:`${fourStar}%`}}></span>  
                            </div>
                        </div>
                        <div className="rate-info__center__item">
                            <div className="item-star">
                                <span>3 </span><AiOutlineStar/>
                            </div>
                            <div className="processes">
                                <span className="process" style={{maxWidth:`${threeStar}%`}}></span>  
                            </div>
                        </div>
                        <div className="rate-info__center__item">
                            <div className="item-star">
                                <span>2 </span><AiOutlineStar/>
                            </div>
                            <div className="processes">
                                <span className="process" style={{maxWidth:`${twoStar}%`}}></span>  
                            </div>
                        </div>
                        <div className="rate-info__center__item">
                            <div className="item-star">
                                <span>1 </span><AiOutlineStar/>
                            </div>
                            <div className="processes">
                                <span className="process" style={{maxWidth:`${oneStar}%`}}></span>  
                            </div>
                        </div>
                    </div>
                    {
                        userExist ? "" : 
                        <div className="rate-info__right">
                        <button type="button" onClick={()=>user ? setShowRate(true) : alert('ban chua dang nhap')}>Gửi đánh giá</button>
                        </div> 
                    }
                     
                    
                </div>
                {
                    showRate ? <div className="rating">
                    <span>Vui long danh gia: 
                        <StarRatings
                          rating={star}
                          starRatedColor="rgb(236, 197, 1)"
                          changeRating={changeRating}
                          numberOfStars={5}
                          name='rating'                  
                        />
                    </span>
            </div> : ""
                }
                {
                    showEvaluate ? <div className="review">
                    <div className="review__contain">
                        <span>Danh gia</span>
                        <textarea placeholder='Vui lòng đánh giá sản phẩm ở đây' onChange={(e)=>setEvaluate(e.target.value)}></textarea>
                        <button type="button" onClick={onFinish}>Gửi</button>
                    </div>
                </div> : ""
                }

                

            </div>
        </div>

        <div className="commentList">
        {
            Pro.reviews.map((p,index)=>{
                return(
                    <div className="commentList__item" key={index}>
                        <h5>{p.name}</h5>
                        <StarRatings rating={star} 
                          starEmptyColor="rgb(236, 197, 1)"
                          starRatedColor="rgb(236, 197, 1)"
                          numberOfStars={p.star}
                          name='rating'/>
                          <span style={{marginLeft:"20px"}}>{p.comment}</span>
                    </div>
                )
            })
        }
    </div>
        
    </div>
  )
}

export default Rastart