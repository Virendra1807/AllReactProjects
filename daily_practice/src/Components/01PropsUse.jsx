import React from 'react'
import PropTypes from "prop-types"


function PropsUse(props) {    //{name, age} PROPS Destructuring
  // We can not change props bcoz props are immutable
  //props.heading = "Props Can't change";`


PropsUse.propTypes = {
  name : PropTypes.string,
  age: PropTypes.number
}

  return (
    <div>
      <h1>{props.heading}</h1>
      <h3>My name is {props.name} and i'm {props.age} years old.</h3>
      <p><small>'Jayesh' is default prop and 'Age' is passed from App component</small></p>
    </div>

  )
}


  // Default PRops in react
  PropsUse.defaultProps={
    name : 'Jayesh',
    age : 27
  }
  


export default PropsUse