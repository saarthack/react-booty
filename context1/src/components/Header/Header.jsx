import React from 'react'
import Slider from './Slider'
import Navbar from './Navbar'

const Header = (props) => {
    
    return (
        <div>
            
            <Slider />
            <Navbar changeBrand={props.changeBrand} brand={props.brand} />
        </div>
    )
}

export default Header

