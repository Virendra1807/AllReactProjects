import React, { useState } from 'react'
import axios from "axios"

function CatFacts() {

    const [fact, setFact] = useState('');

    function GetFacts(){
        axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response =>{
        setFact(response.data[0].url)
        
    })
    }
    
  return (
    <div>

        <button onClick={GetFacts}>Click</button>
        <br />  
        <br />
        <img width={500} src={fact} alt="catimg" />
    </div>
  )
}

export default CatFacts