import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()

    console.log('Title -',title);
    console.log('Description -',desc);

    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        value={title}
        required
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        placeholder='Enter Title' 
        type="text" />

        <input 
        value={desc}
        required
        onChange={(e)=>{
        setDesc(e.target.value)
        }}
        placeholder='Enter Description' 
        type="text" 
        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default App