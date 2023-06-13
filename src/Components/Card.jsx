import React, { useState } from 'react'


export default function Card({data}) {

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  let options = data.options[0]
  let priceOptions = Object.keys(options).slice(1)

  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '420px' }}>
        <img
          src={data.img}
          height={210}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <div className="container ">
            <select className="m-2 h-100  bg-success rounded" onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                )
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded" onChange={(e)=> setSize(e.target.value)}>
              {
                priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })
              }
            </select>
            <div className="d-inline fs-5 h-100">Total Price</div>
            <hr />
            <div className='btn btn-success text-white justify-center ms-5'>Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  )
}
