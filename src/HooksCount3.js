import React,{useState} from 'react'

export default function HooksCount3() {
    const[items,setItems]=useState([])
   const addItem =()=>{
    setItems([...items,
        {
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>add a Number</button>
            <ul>
                {
                    items.map(item =><li key={item.id}>{item.value}</li>)
                }
            </ul>
            
        </div>
    )
}
