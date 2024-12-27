import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [allProducts, setAllProducts] = useState([])

  const [cartData, setCartData] = useState([])

  const getData = async () => {

    const response = await axios.get('https://fakestoreapi.com/products')

    setAllProducts(response.data)
  }

  const btnClicked = (idx)=>{
    const copyProduct = [...allProducts]
    const clickedProduct = copyProduct.splice(idx,1)
    
    setCartData([...cartData,clickedProduct[0]])

    console.log(cartData);

  }


  return (
    <div className='p-5'>
      <button onClick={getData} className='bg-black px-5 py-2 rounded text-white text-xl font-medium'>Get Data</button>
      <div className='flex mt-2'>
        <div className='w-3/4 bg-gray-100 p-5 flex flex-wrap justify-center gap-6'>
          {allProducts.map(function (elem, idx) {
            return <div key={idx} className='bg-white rounded p-3 text-center w-48'>
              <img className='h-32 mx-auto' src={elem.image} alt="" />
              <h2 className='my-4 h-16 text-sm font-medium'>{elem.title}</h2>
              <h1 className='mt-3 text-2xl font-bold'>${elem.price}</h1>
              <button onClick={()=>{
                btnClicked(idx)
              }} className='mt-5 rounded w-full py-3 text-white font-medium bg-emerald-600'>Add to Cart</button>
            </div>
          })}
        </div>
        <div className='w-1/4 bg-gray-300'>
          {cartData.map(function(elem){
            
            
            return <h1>{elem.title}</h1>
          })}
        </div>
      </div>
    </div>
  )
}

export default App