import React from 'react'

const Nav = () => {
    return (
        <div className='bg-emerald-600 text-white font-medium text-xl px-10 py-5 flex items-center justify-between'>
            <h2>Sheryians</h2>
            <div className='flex gap-10'> 
                <h4>About</h4>
                <h4>Work</h4>
                <h4>Services</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Nav