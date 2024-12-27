import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const oggyRef = useRef(null)

  const [xValue, setXValue] = useState(0) 
  const [yValue, setYValue] = useState(0)
  const [rotate, setRotate] = useState(0)


  useEffect(function(){
    oggyRef.current.style.left = xValue+'%'
    oggyRef.current.style.top = yValue+'%'
    oggyRef.current.style.rotate = rotate+'deg'

  },[xValue,yValue,rotate])

  return (
    <div>
      <img ref={oggyRef} src="https://i.pinimg.com/474x/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.jpg" alt="" />
      <button onClick={()=>{
        setXValue(Math.random()*90)
        setYValue(Math.random()*70)
        setRotate(Math.random()*360)
      }}>Click here</button>
    </div>
  )
}

export default App