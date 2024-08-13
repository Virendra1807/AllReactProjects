import React from 'react'

function Arrays() {

    const arr = ['Apple', 'Orange', 'Banana'];
    // const items = [];
    // for (let index = 0; index < arr.length; index++) {
    //         items.push(<li>{arr[index]}</li>);   
    // }
    const users = [
        {first: 'Viren', last: 'Mali'},
        {first: 'Richa', last: 'Arora'},
        {first: 'Gladden', last: 'Rumao'}
    ];

    const obj = {
        name: 'viraj',
        blame: 'Siraj'
    }
  return (
    <div>
        {/* {items} */}
        <h1>Map method in React</h1>
        <h3>Example of Array : </h3>
        {arr.map((data, ind)=>{
            return(
            <>
            <li> {ind}, {data}</li>
            </>
        )
        })}

        <h3>Example of Object :</h3>
        {users.map((data, i)=>{
                console.log(i);
                console.log(data);
                return(
                    <li key={i}>
                        {data.first} 
                        {data.last}
                    </li>
                )
            })}

        {Object.keys(obj).map((ind)=>{
            return(
                <li>{ind} : {obj[ind]}</li>
            )
        })}
    </div>
  )
}

export default Arrays