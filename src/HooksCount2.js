import React,{useState} from 'react'

export default function HooksCount2() {
    const[name,setName]=useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
                <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
                <h2>the firstName is-{name.firstName}</h2>
                <h2>the lastName is-{name.lastName}</h2>
                {/* <h2>{JSON.stringify(name)}</h2> */}
            </form>
        </div>
    )
}
