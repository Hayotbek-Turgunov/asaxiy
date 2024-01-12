import React from 'react'
import './Product.css'
import { FaStar } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";
import { Link } from 'react-router-dom'
import { SlBasketLoaded } from "react-icons/sl";


function Product({ data }) {
  console.log(data);
  return (
    <div className='product'>
      <div className="product-container container">
        <div className="product-card-wrapper">
          {
            data.map((value) => {
              return (
                <div key={value.id} className='product-card'>
                  <Link to={`/productt/${value.id}`}>
                    <img src={value.url[0]} alt="" />
                  </Link>
                  <p>{value.title}</p>
                  <div className="product-card-comment-icon-wrapper">
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
                  <h2 className='product-card-price'>{value.price} so'm</h2>

                  <div className="product-card-btn-wrapper">
                    <button className='product-card-btn-buy'>Hoziroq harid qiling</button>
                    <button className='product-card-btn-basket'><SlBasketLoaded /></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Product