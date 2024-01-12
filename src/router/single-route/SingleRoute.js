import React from 'react'
import { useParams } from 'react-router-dom'
import PRODUCTS from '../../static/Static'
import NotFound from '../NotFound/NotFound'
import './SingleRoute.css'
import { FaStar } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";


function SingleRoute() {
  const params = useParams()
  const item = PRODUCTS.find(el => el.id === params.id)
  if (!item) {
    return <NotFound />
  }

  return (
    <div className='single'>
      <div className="single-container container">
        <div className="single-img-card">
          <img className='single-img' src={item.url[0]} alt="" />
        </div>

        <div className="single-product-info">
          <div className="single-product-info-card">
            <h2 className='single-product-info-card-heading'>{item.title}</h2>

            <div className="product-card-comment-icon-wrapper single-product-info-comment-icon-wrapper">
              <div className="product-card-icon-star">
                <FaStar className='product-card-icon-start-item' />
                <FaStar className='product-card-icon-start-item' />
                <FaStar className='product-card-icon-start-item' />
                <FaStar className='product-card-icon-start-item' />
                <FaStar className='product-card-icon-start-item' />
              </div>
              <div className="product-card-comment">
                <a className='product-card-comment-message' href=""><TiMessage /></a>
                <span>0 ta sharh</span>
              </div>
            </div>

            <p>Narxi: <strong>{item.price} so'm</strong></p>
            <p>Brend:<strong>{item.brend}</strong></p>

            <div className="product-btn-wrapper">
              <button className='product-card-btn'>Savatchaga Qo'shish</button>
              <button className='product-card-btn'>Hoziroq xardi qiling</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRoute