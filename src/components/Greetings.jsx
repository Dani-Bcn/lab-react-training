import React from 'react'

export default function Greetings({lang}) {      
    const language = {
        de : "Hallo",
        fr : "Bonjour",
        es : "Hola",
        en : "Hello", 
    }
    const greeting= language[lang]
  return (
    <div className='cards'>      
      <h3> {greeting} François</h3>   
    </div>
  )
}