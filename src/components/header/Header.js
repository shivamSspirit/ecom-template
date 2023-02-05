import React from 'react'
import './header.css'
import { useProducts } from '../../productContext'

function Header() {
    const { allcategories, setCurrentCategory, currentCategory, handlesearchChange, searchquery, slideToggle, setSlideToggle } = useProducts()

    const onCategoryChange = (e) => {
        setCurrentCategory(e.target.value)
    }

    return (
        <div className='header-container'>
            <div className='header-box'>

                <span className='toggle-box'>
                    <img onClick={() => setSlideToggle(!slideToggle)} src='/toggle-icon.png' className='toggle-bar' alt='toggle' />
                </span>

                <span className='cat-drop-box'>
                    <select onChange={onCategoryChange} className='cate-select' id='cate-selector' name='categories' value={currentCategory}>
                        <option selected={true} value={'all cate'}>All Category</option>
                        {allcategories?.map((category) => (
                            <option value={`${category}`}>{category}</option>
                        ))}
                    </select>
                </span>

                <span className='search-box'>
                    <input value={searchquery} onChange={handlesearchChange} className='search-input' type={'text'} placeholder="search product here" />
                    <span className='search-icon-box'>
                        <img className='search-icon' alt='search-icon' src='/search-icon.png' />
                    </span>
                </span>

                <span className='lan-drop-box'>
                    <select className='lan-select' value={'language'}>
                        <option value={'english'}>English</option>
                    </select>
                </span>

                <span className='title-box'>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className='func-title'>cart</span>
                </span>

                <span className='title-box'>
                    <img className='func-icon' src='/user-icon.png' alt='user-icon' />
                    <span className='func-title'>user</span>
                </span>

            </div>
        </div>
    )
}

export default Header
