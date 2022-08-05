import React from 'react'
                                     
export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    let typeCard  
    type === 'Visa'?typeCard = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png":typeCard = "https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png"    
    const lastFourNums=number.slice(12,16)    
    let secretNumber=(`**** **** **** ${lastFourNums}`)   
    return (
      <div className='creditCard'>
        <span>
           <img src={typeCard} alt="" /> 
        </span>           
        <h3>{secretNumber}</h3>   
        <p>{expirationMonth} / {expirationYear} {bank}</p>
        <p>{owner}</p>
      </div>
    )
}
