import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__contain">
          <div className="footer__contain__item">
            <Link to='/'><h2>CELLPHONES</h2></Link>
          </div>
          <div className="footer__contain__item">
            <h2>ABOUT</h2>
            <ul>
              <li><Link to='/'>Ve chung toi</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/'>Co hoi nghe nghiep</Link></li>
              <li><Link to='/'>Cua hang</Link></li>

            </ul>
          </div>
          <div className="footer__contain__item">
            <h2>ALWAYS-ON SUPPORT</h2>
            <p>Support 028.71.087.088 (07:00-21:00)</p>
            <p>Delivery 1800 6936 (07:00-21:00)</p>
          </div>
          <div className="footer__contain__item">
            <h2>DELIVERY</h2>
            <ul>
              <li><Link to='/'>Shipping method</Link></li>
              <li><Link to='/'>Payment</Link></li>
              <li><Link to='/'>cash voucher</Link></li>
              <li><Link to='/'>shipping methods</Link></li>

            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer