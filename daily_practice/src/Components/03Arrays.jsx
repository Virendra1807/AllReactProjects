import React from 'react'

function Arrays() {

    const arr = ['Apple', 'Orange', 'Banana'];
    const items = [];
    for (let index = 0; index < arr.length; index++) {
            items.push(<li>{arr[index]}</li>);   
    }
  return (
    <div>
        {items}
    </div>
  )
}

export default Arrays