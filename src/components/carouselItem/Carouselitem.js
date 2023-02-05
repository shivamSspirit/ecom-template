import React from 'react'
import './caroselitem.css'

function Carouselitem({ctext,btntext}) {
  return (
    <div className='carouselitem-container'>
        {ctext}
        <button className='c-btn'>{btntext}</button>
    </div>
  )
}

export default Carouselitem
