import React from 'react'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <h2>{props.brand}</h2>
        <div>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <h4 onClick={()=>{
                props.changeBrand()
            }}>Account</h4>
        </div>
    </div>
  )
}

export default Navbar