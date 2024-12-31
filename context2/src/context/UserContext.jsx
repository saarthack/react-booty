import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {

    const [brand, setBrand] = useState('Sheryians')

    return (
        <div>
            <UserDataContext.Provider value={[brand, setBrand]}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext