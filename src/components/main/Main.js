import React from 'react'
import './main.css'
import Headertop from '../minihead/Headertop'
import Header from '../header/Header'
import Carousel from '../carousel/Carousel'
import Cardlist from '../cardlist/Cardlist'
import Sidemenu from '../sidemenu/Sidemenu'
import Loader from '../loader/Loader'
import { useProducts } from '../../productContext'

function Main() {
    const { loading } = useProducts()
    return (
        <div className='main-container'>
            <Sidemenu />
            <div className='upper-part'>
                <Headertop />
                <div className='logo-file'>
                    <img className='eflyer-logo' alt='eflyer' src='/logo.png' />
                </div>
                <Header />
                <Carousel />
            </div>
            <div className='lower-part'>
                <div className='gen-title-box'>
                    <span className='gen-title'>Man & Woman Fashion</span>
                </div>
                <div className='product-cards'>
                    {loading ? <Loader /> : <Cardlist />}
                </div>
            </div>
        </div>
    )
}

export default Main
