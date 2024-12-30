import React from 'react'
import { useParams } from 'react-router-dom'

const ChildDetails = () => {

    
    const data = useParams()

   
    

    return (
        <div>
            <h1>{data.id} Detail Page</h1>
        </div>
    )
}

export default ChildDetails