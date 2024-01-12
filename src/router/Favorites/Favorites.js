import React from 'react'
import heart from '../../assets/heart-removebg-preview.png'
import './Favorites.css'

function Favorites() {
  return (
    <div className='favorites'>
      <div className="favorites-container container">
        <img src={heart} alt="" />
        <h3>Sevimli mahsulotlar yo'q</h3>
        <p>Mahsulotdagi ❤ belgisi bilan qo'shing️</p>
      </div>
    </div>
  )
}

export default Favorites