import React from 'react'

function TernaryOperator() {

    const student = [
        {
            name: 'Peter',
            id: 1,
            show: true
        },
        {
            name: 'Iron Man',
            id: 2,
            show: true
        },
        {
            name: 'Loki',
            id: 3,
            show: false
        },
        {
            name: 'Thor',
            id: 4,
            show: true
        },
        {
            name: 'Captain America',
            id: 5,
            show: false
        }
    ]
  return (
    <div>
        <h1>Ternary Operator</h1>
        <ul>
            { student.map( (data) =>(
                <li key={data.id}>
                    { data.show ? <small>{data.name} is passed</small> : <span>{data.name} is Failed</span> }
            </li>
            )) }
        </ul>

    </div>
  )
}

export default TernaryOperator