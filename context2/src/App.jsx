import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useContext } from 'react'
import { UserDataContext } from './context/UserContext'

const App = () => {

  const [brand,setBrand] = useContext(UserDataContext)
  
  
  return (
    <div>
      <h1>This is APP - {brand}</h1>
      <button onClick={()=>{
        setBrand('hey')
      }}>click</button>
      <Navbar />
      <Footer />
    </div>
  )
}

export default App