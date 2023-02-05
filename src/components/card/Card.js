import React from 'react'
import './card.css'

function Card({product}) {
  console.log("pro",product)
  return (
    <div className='card-container'>
        <div className='card-box'>
            <h4 className='item-txt'>{product.title.length>20?`${product.title.slice(0,20)}...`:product.title}</h4>
            <span className='price-block'><p className='p-title'>Price</p><span className='prices'>{`$${product.price}`}</span></span>
            <div className='c-img-block'>
                <img className='pro-img' alt='product-image' src={product.image}/>
            </div>
            <div className='c-btns'>
                <button className='buy-btn'>Buy Now</button>
                <button className='see-btn'>See More</button>
            </div>
        </div>
    </div>
  )
}

export default Card
