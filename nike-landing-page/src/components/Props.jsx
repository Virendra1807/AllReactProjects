import React from 'react'
import propTypes from "prop-types"
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
    name : "Jay"
}

Props.propTypes = {
  title: propTypes.string,
  name : propTypes.string
}

export default Props