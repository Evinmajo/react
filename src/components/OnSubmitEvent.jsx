import React from 'react'
import { useState } from 'react'

const OnSubmitEvent = () => {
    const [name,setName] = useState("")

    const DisplayName = (e)=> {
        e.preventDefault();
        const data = {
            name
        }
        console.log("data :",data);
    }
  return (
    <div>
        <form onSubmit={DisplayName}>
            <label htmlFor="">Enter Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default OnSubmitEvent