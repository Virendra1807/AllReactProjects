import React from 'react'

function DiffBetnForEachAndMap() {

    const arr = [1,2,3,4,5];

    console.log(arr.map( x => x*x ).sort( function(a, b){
        return b-a
    }))

  return (
    <div>
        <h1>Difference Between forEach ad Map method</h1>
        <p>Using forEach : {arr.forEach( x => x*x )}</p>
        <br />
        <p>Using Map : {arr.map( x => x*x )}</p>
    </div>
  )
}

export default DiffBetnForEachAndMap