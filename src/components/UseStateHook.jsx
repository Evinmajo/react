import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {

   const [count,setCount] = useState(0)

   const CountButton =  () => {
    setCount(count+1)
   }
  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={CountButton}>Click Me</button>
    </div>
  )
}

export default UseStateHook