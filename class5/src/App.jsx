import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(name,position);

    const newUser = [...allUsers,{name,position}]
    setAllUsers(newUser)


    setName('')
    setPosition('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-5'>

        <input
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        className='border-2 border-zinc-700 px-4 py-2 text-xl rounded' 
        type="text" 
        placeholder='Enter your name' />

        <input 
        className='border-2 ml-2 border-zinc-700 px-4 py-2 text-xl rounded' 
        type="text" 
        placeholder='Enter Position' 
        value={position}
        onChange={(e)=>{
          setPosition(e.target.value)
        }}
        />

        <button className='px-4 py-2 text-white bg-black text-xl rounded mt-4'>Submit</button>
      </form>

      <div className='bg-blue-200 p-5'>
        {allUsers.map(function(elem){
          
          return <div className='flex justify-between items-center p-2'>
            <h1>{elem.name}</h1>
            <h2>{elem.position}</h2>
          </div>
        })}
      </div>
    </div>
  )
}

export default App