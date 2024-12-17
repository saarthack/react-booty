import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newArr = [...allUsers,{name,details,imageUrl}]

    setAllUsers(newArr)

    setName('')
    setDetails('')
    setImageUrl('')
  }


  const deleteHandler = (i)=>{

    const copyUsers = [...allUsers]

    copyUsers.splice(i,1)

    setAllUsers(copyUsers)

  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='p-5'>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className='border-2 w-[49%] border-black px-4 py-2 text-xl rounded font-medium'
          type="text"
          placeholder='Enter your name' />

        <input
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          className='border-2 w-[49%] ml-2 border-black px-4 py-2 text-xl rounded font-medium'
          type="text"
          placeholder='Enter your Details' />

        <input
          value={imageUrl}
          onChange={(e)=>{
            setImageUrl(e.target.value)
          }}
          className='border-2 mt-2 w-full border-black px-4 py-2 text-xl rounded font-medium'
          type="text"
          placeholder='Enter Image URL' />

        <button className='bg-black font-medium text-white px-4 py-2 rounded text-xl mt-2'>Submit</button>
      </form>

      <div className='bg-gray-200 p-5'>
          {allUsers.map(function(elem,i){
            
            return <div key={i} className='inline-block text-center m-3 w-60 p-4 rounded bg-white'>
            <img className='h-32 mx-auto w-32 rounded-full object-cover mb-3' src={elem.imageUrl} alt="" />
            <h2 className='text-xl font-semibold'>{elem.name}</h2>
            <p className='font-medium text-sm text-gray-500 px-6 '>{elem.details}</p>
            <button onClick={()=>{
              deleteHandler(i)
            }} className='px-3 py-1 bg-red-600 text-white text-xs rounded font-medium mt-2'>Delete</button>
        </div>
          })}
      </div>
    </div>
  )
}

export default App