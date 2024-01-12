import React from 'react'
import navbar__logo from '../../assets/asaxiy-logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <Link to={'product'}>
          <img className='navbar-logo-img' src={navbar__logo} alt="asaxiy-logosi" />
        </Link>

        <a className='navbar-open-menu' href="">
          <a className='navbar-open-hamburger' href="#"><RxHamburgerMenu /></a>
          <span className='navbar-open-text'>Bo'limlar</span>
        </a>


        <div className="navbar-search">
          <form className='navbar-search-form'>
            <input className='navbar-search-input' type="text" placeholder='Qidirish..' />
            <button className='navbar-search-btn'>Qidirish</button>
          </form>
        </div>

        {/* Payment */}
        <div className='navbar-icon-comp-wrapper'>
          <Link to={'payment'} className='navbar-icon-payment-wrapper'>
            <a className='navbar-icon-link' href="">{<MdPayment />}</a>
            <span className='navbar-icon-text'>To'lov</span>
          </Link>

          <Link to={'trak'} className='navbar-icon-payment-wrapper'>
            <a className='navbar-icon-link' href="">{<FaCarSide />}</a>
            <span className='navbar-icon-text'>Trek</span>
          </Link>

          <Link className='navbar-icon-payment-wrapper'>
            <a className='navbar-icon-link' href="">{<CiShoppingCart />}</a>
            <span className='navbar-icon-text'>Savatcha</span>
          </Link>

          <Link to={'favorites'} className='navbar-icon-payment-wrapper'>
            <a className='navbar-icon-link' href="">{<CiHeart />}</a>
            <span className='navbar-icon-text'>Sevimlilar</span>
          </Link>

          <Link className='navbar-icon-payment-wrapper'>
            <a className='navbar-icon-link' href="">{< CiUser />}</a >
            <span className='navbar-icon-text'>Kirish</span>
          </Link>
        </div>

      </div>

      <hr className='navbar-line' />


      <div className="navbar-bottom">
        <div className="navbar-bottom-container container">
          <Link className='navbar-bottom-container-links'>Chegirmalar</Link>
          <Link className='navbar-bottom-container-links'>Sport buyumlari</Link>
          <Link className='navbar-bottom-container-links'>Yangi kelganlar</Link>
          <Link className='navbar-bottom-container-links'>Kitoblar</Link>
          <Link className='navbar-bottom-container-links'>Telefonlar va gadjetlar</Link>
          <Link className='navbar-bottom-container-links'>Noutbuklar</Link>
          <Link className='navbar-bottom-container-links'>Maishiy texnika</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar