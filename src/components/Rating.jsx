import React from 'react'
import StarWhite from '../assets/images/star.png';
import StarBlack from '../assets/images/starBlack.png';


export default function Rating(rating) {

    const stars = Math.round(rating.children)
    const starsPaint=[]
    const arrayStars=[StarWhite, StarWhite, StarWhite, StarWhite, StarWhite]      
   
    for (let i = 0; i < stars; i++) {    
        starsPaint.push(1)
    }   
    starsPaint.map((e,i)=>{
       return arrayStars.splice(i,1,StarBlack) 
    })   
    return (
        <div className='cards'>            
            {arrayStars.map((e, i)=>{
                return <img  key={i} src={arrayStars[i]} alt="" />
            })
            }      
        </div>
    )
}
