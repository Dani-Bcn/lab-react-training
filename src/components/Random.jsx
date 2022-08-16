import React from 'react'

export default function Random({min,max}) {
   const random =Math.floor(Math.random() * (max - min) )
  return (
    <div className='cards'>
        <p> Random value between {min} and {max} = <b>{random}</b></p>
    </div>
  )
}
