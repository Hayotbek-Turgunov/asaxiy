import React from 'react'
import './Track.css'
import traking from '../../assets/trakcing.png'


function Track() {
  return (
    <div className='trak'>
      <div className="container">
        <div className="trak-container">
          <div className="trak-form-info">
            <h2 className='trak-form-info-heading'>Buyurtma holati</h2>
            <p className='trak-form-info-text'>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>

            <form className='trak-form' >
              <label>
                <span className='trak-form-deck'>Buyurtma raqami</span>
                <br />
                <input className='trak-form-input' type="text" />
              </label>

              <br />
              <label>
                <span className='track-form-deck'>Buyurtma berilgandagi telefon raqami</span>
                <br />
                <input className='trak-form-input' type="text" />
              </label>
              <br />

              <button className='trak-form-btn'>Ko'rish</button>
            </form>
          </div>

          <div className="trak-img">
            <img src={traking} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track