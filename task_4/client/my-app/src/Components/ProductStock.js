import React from 'react'

function ProductStock() {

    const post = async () => {
    const res = await fetch('http://localhost:5000/api/products/:id/units', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
         });
}

     return (
        <div>
            <h1>Our Stock</h1>
            <input type="text"></input>
            <br></br>
            <br></br>
            <button onClick ={post}>post</button>
           </div>
    )
}

export default  ProductStock;