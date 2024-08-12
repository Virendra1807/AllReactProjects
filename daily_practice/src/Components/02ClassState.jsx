import React from "react";


class ClassState extends React.Component{

    constructor(){
        super();

        this.state={
            count : 0,
            sout : 5
        }
    }

    addCount(){
        // this.setState({
        //     count : this.state.count + 1
        // })


        // Using previous state we can add it by 2 for each click
        this.setState((prevState)=>{
            return (
                {count: prevState.count + 1}
            )
        })

        this.setState((prevState)=>{
            return (
                {count: prevState.count + 1}
            )
        })

    }

    subCount(){
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <h1>Hey Class Component</h1>
                <p>{this.state.count}</p>
                <button onClick={()=> this.addCount()}>Add</button>
                <button onClick={()=> this.subCount()}>Sub</button>
            </div>
        )
    }

}

export default ClassState;
