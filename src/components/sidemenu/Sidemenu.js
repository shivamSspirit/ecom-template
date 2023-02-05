import React from 'react'
import './sidemenu.css'
import {useProducts} from '../../productContext'

function Sidemenu() {
    const {slideToggle, setSlideToggle} = useProducts()
    let slidevisi = 'hide'

    if (slideToggle) {
        slidevisi = 'show'
    }

    return (
        <div className='sidemenu'>
            <div id="flyoutMenu" className={slidevisi}>
                <ul className='side-menu-items'>
                    <li onMouseUp={() => setSlideToggle(!slideToggle)} className='menu-item'>click to close</li>
                    <li className='menu-item'>Best seller</li>
                    <li className='menu-item'>Gift ideas</li>
                    <li className='menu-item'>New Realse</li>
                    <li className='menu-item'>Todays deals</li>
                    <li className='menu-item'>Cart</li>
                    <li className='menu-item'>User</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidemenu
