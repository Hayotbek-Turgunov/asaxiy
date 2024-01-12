import React from 'react';
import './Payment.css'

function Payment() {
  return (
    <div className='payment'>
      <div className="payment-container container">
        <div className="payment-card">
          <h2>To'lov</h2>
          <p>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>
          <input className='payment-card-input' type="text" placeholder='Namuna:A77 yoki B999 yoki M333' />
          <br />

          <button className='payment-card-btn'>Tasdiqlash</button>
          <p className='track-text'>B - buyurtma uchun</p>
          <p className='track-text'>A - akkount uchun</p>
          <p className='track-text'>M - rassrochkani so'ndirish uchun</p>
        </div>
      </div>
    </div>
  )
}

export default Payment