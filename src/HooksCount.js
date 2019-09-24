import React,{useState} from 'react'

export default function HooksCount() {
    const intailCount =0;
    const[count,setCount]=useState(intailCount)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(intailCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
