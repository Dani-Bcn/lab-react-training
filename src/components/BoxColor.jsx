import React from 'react'

export default function BoxColor({r,g,b}) {
  return (
    <div>
        <div  className='cards' style={{backgroundColor:`rgb(${r},${g},${b})`}}><b>BackgroundColor : rgb({r},{g},{b})</b> </div>
    </div>
  )
}
