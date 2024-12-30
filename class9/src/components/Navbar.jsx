import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex bg-pink-600 text-white font-medium py-4 px-7 items-center justify-between w-full top-0 left-0 fixed'>
            <h2>Brand Name</h2>
            <div className='flex gap-7'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Product'>Product</Link>

            </div>
        </div>
    )
}

export default Navbar