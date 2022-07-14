import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
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
  return (
    <div className="header">
        <div className="container">
            <div className="header__contain">
                <div className="header__contain-brand">
                    <Link to='/'>CELLPHONES</Link>
                </div>
                <div className="header__contain__right">
                    <div className="header__contain__right__search">
                        <input type="text" placeholder='Tim kiem'/> 
                        <BsSearch/>
                    </div>
                    <ul className="header__contain__right__link">
                        <li className="header__contain__right__link-item">
                            <Link to='/'>Trang chu</Link>
                        </li>
                        <li className="header__contain__right__link-item">
                            <Link to='/product'>san pham</Link>
                        </li>
                        {
                            userInfo !== null ? (<li className="header__contain__right__link-item">
                            <Link to='/login'>{userInfo.name}<AiOutlineArrowDown/></Link>
                            <div className="dropdown">
                                <ul>
                                    <li><Link to='/register'>Don hang</Link></li>
                                    <li><Link to='' onClick={logoutUser}>Dang xuat</Link></li>
                                </ul>
                            </div>
                        </li>) : (<li className="header__contain__right__link-item">
                            <Link to='/login'>Tai khoan <AiOutlineArrowDown/></Link>
                            <div className="dropdown">
                                <ul>
                                    <li><Link to='/register'>Dang ky</Link></li>
                                    <li><Link to='/login'>Dang nhap</Link></li>
                                </ul>
                            </div>
                        </li>)
                        }
                        
                    </ul>
                    <div className="header__contain__right__cart">
                        <div className="cart__contain">
                            <Link to='/cart'>
                                <AiOutlineShoppingCart/>
                                <span className="badge">{cartItem.reduce((a,b)=> a + b.qty,0)}</span>
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
               
            </div>
        </div>
    </div>
    
  )
}

export default Header