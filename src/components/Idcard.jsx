import React from 'react'


export default function Idcard({lastName, picture,firstName,gender, height,birth}) {
  
  return (
    <div>
        <div className='card'>
            <span>
                <img src={picture} alt="" />   
            </span>
            <span>
              <p>Last Name : <b>{lastName}</b></p>  
                <p>First Name : <b>{firstName}</b> </p>
                <p>Gender : <b>{gender}</b></p>
                <p>Height : <b>{height}</b> </p>
                <p>Birth : <b>{birth.toDateString()}</b></p>  
            </span>            
        </div>
       
        
       
        
          
    </div>
  )
}
