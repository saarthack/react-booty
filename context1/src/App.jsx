import React, { useState } from 'react'
import Header from './components/Header/Header'


const App = () => {

  const [brandName, setBrandName] = useState('Shery')

  const changeBrand = ()=>{
    setBrandName('Umesh Bhai')
  }

  
  return (
    <div>
      <Header changeBrand={changeBrand} brand={brandName} />
    </div>
  )
}

export default App
