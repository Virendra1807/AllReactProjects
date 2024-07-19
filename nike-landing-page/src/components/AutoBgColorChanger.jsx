import React from 'react'
import { useEffect } from 'react';

function AutoBgColorChanger(props) {

    useEffect(()=>{
        let randColor = "#";
        
        let str = "abcdef0123456789"
      
        for(let i=1; i<=6; i++){
          randColor += str[Math.floor(Math.random()*15)]
        }
        document.body.style.backgroundColor = randColor;

      }, [props.count] )
      //Count down dependency 

  return (
    <div>
        <h1>Auto Backgroud Changer when we start the countdown</h1>
    </div>
  )
}

export default AutoBgColorChanger