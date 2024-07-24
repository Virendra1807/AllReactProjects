import React from 'react'

const Props = (props) => {
  return (
    <div>
        <h1>Welcome to {props.title}</h1>
        <p>Name is {props.name}</p>
    </div>
  )
}

Props.defaultProps={
    title:"Hello",
    name : "Kiran"
}

export default Props