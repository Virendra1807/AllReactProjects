import React, { Component } from 'react'

export default class ClassState extends Component{

    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    update(){
        this.setState({
            count : this.state.count + 1
        })
    }

    delete(){
        this.setState({
            count : this.state.count - 1
        })
    }
    

    render(){
        return(
            <>
            <h1>HEllo Class Component</h1>
            <p>Count is {this.state.count}</p>
            <button onClick={()=>this.update()}>Add</button>
            <button onClick={()=>this.delete()}>Sub</button>
            </>
        )
    }
}