import React, { Component } from 'react'

 class ClassCount extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     incrementCount= () =>{
         this.setState({
             count:this.state.count + 1
         })

     }
     decrementCount= () =>{
         this.setState({
             count:this.state.count-1
         })
     }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>increment</button>
                <button onClick={this.decrementCount}>decrement</button>
            </div>
        )
    }
}

export default ClassCount
