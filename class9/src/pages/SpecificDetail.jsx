import React from 'react'
import { useParams } from 'react-router-dom'

const SpecificDetail = () => {

    const data = useParams()
    console.log(data);

    return (
        <div>
            <h1>{data.specific} Detail of {data.id}'s page</h1>
        </div>
    )
}

export default SpecificDetail