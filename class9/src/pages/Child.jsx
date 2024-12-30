import React from 'react'
import { useParams } from 'react-router-dom'

const Child = () => {

    const {id} = useParams()
    
    return (
        <div>
            <h1>{id}'s Collection</h1>
        </div>
    )
}

export default Child