import React, { useEffect } from 'react'

function Footer() {

  useEffect(()=>{
    let randColor = "#";
    let str = "abcdefgth0123456789"
  
    for(let i=1; i<=6; i++){
      randColor += str[Math.floor(Math.random()*10)]
    }
    document.body.style.backgroundColor = randColor;
    console.log(randColor)
  }, [])
  

  return (
    <div>
        <main>
            <h3>Company T&C</h3>
            <li>Open For EMp</li>
            <li>Detail</li>
            <li>No-Refund</li>
        </main>
    </div>
  )
}

export default Footer