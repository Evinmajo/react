import React from 'react'
import { useState } from 'react'

const ChangeName = () => {
    const [name,setName] = useState("")
  return (
    <div>
        <h1>{name}</h1>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>
    </div>
  )
}

export default ChangeName