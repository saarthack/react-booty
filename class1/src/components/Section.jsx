import React from 'react'
import Left from './Left'
import Right from './Right'

const Section = () => {
    return (
        <div className='h-[80vh] flex bg-blue-200 w-full'>
            <Left />
            <Right />
        </div>
    )
}

export default Section