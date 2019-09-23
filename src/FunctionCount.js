import React,{useState} from 'react'

  function FunctionCount() {
      const[count,setcount]=useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>increment</button>
            <button onClick={()=>setcount(count-1)}>decrement</button>
        </div>
    )
}
export default FunctionCount;