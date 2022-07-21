import React,{useState,useRef} from 'react'
import './Header.scss'
import {Link, useNavigate} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../../redux/action/ProductAction'
import {AiOutlineBars} from 'react-icons/ai'
import {AiOutlineCloseSquare} from 'react-icons/ai'
const Header = () => {
    const state = useSelector(state=> state.cartReducer)
    const userState = useSelector(state => state.user)
    const {userInfo} = userState
    const {cartItem} = state
    const logoutUser = (e) =>{
        e.preventDefault()
        localStorage.removeItem("userInfo")
        window.location.href='/'
    }
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(searchProduct(search))
        navigate('/search')
    }
    const linkRef = useRef(null)
    const cartRef = useRef(null)
    const handleRef = () =>{
        linkRef.current.classList.add('active')
        cartRef.current.classList.add('active')
    }
    const handleClose = ()=>{
        linkRef.current.classList.remove('active')
        cartRef.current.classList.remove('active')
    }
    
  return (
    <div className="header">
        <div className="container">
            <div className="header__contain">
                <div className="header__contain-brand">
                    <Link to='/'>CELLPHONES</Link>
                </div>
                <div className="header__contain__right">
                    <form className="header__contain__right__search" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Tìm kiếm' onChange={((e)=>setSearch(e.target.value))} /> 
                        <BsSearch/>
                    </form>
                    <ul className="header__contain__right__link" ref={linkRef}>
                        <AiOutlineCloseSquare onClick={handleClose} className="close"/>
                        <li className="header__contain__right__link-item">
                            <Link to='/'>Trang chủ</Link>
                        </li>
                        <li className="header__contain__right__link-item">
                            <Link to='/product'>sản phẩm</Link>
                        </li>
                        {
                            userInfo !== null ? (<li className="header__contain__right__link-item">
                            <Link to='/login'>{userInfo.name}<AiOutlineArrowDown/></Link>
                            <div className="dropdown">
                                <ul>
                                    {
                                        userInfo.isAdmin ? <li><Link to='/admin'>Admin</Link></li> : ''
                                    }
                                    
                                    <li><Link to='/myorder'>Đơn hàng</Link></li>
                                    <li><Link to='' onClick={logoutUser}>Đăng xuất</Link></li>
                                </ul>
                            </div>
                        </li>) : (<li className="header__contain__right__link-item">
                            <Link to='/login'>Tài khoản <AiOutlineArrowDown/></Link>
                            <div className="dropdown">
                                <ul>
                                    <li><Link to='/register'>Đăng ký</Link></li>
                                    <li><Link to='/login'>Đăng nhập</Link></li>
                                </ul>
                            </div>
                        </li>)
                        }
                        
                    </ul>


                    
                    <div className="header__contain__right__cart" ref={cartRef}>
                        <div className="cart__contain">
                            <Link to='/cart'>
                                <AiOutlineShoppingCart/>
                                <span className="badge">{cartItem.reduce((a,b)=> a + b.qty,0)}</span>
                            </Link>
                            
                        </div>
                    </div>

                   
                    
                </div>

                <div className="header__contain__right__first">
                    <AiOutlineBars onClick={handleRef}/>
                </div>
               
            </div>
        </div>
    </div>
    
  )
}

export default Header