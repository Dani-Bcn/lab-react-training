import React from 'react';
import Star from '../assets/images/star.png';
import StarWhite from '../assets/images/starWhite.png';


const DriverCard = ({name,rating, img, car}) => {
    const asessmet =Math.round(rating)
    const arrayStars=[Star, Star, Star, Star, Star]      
    const starsPaint =[]
    for (let i = 0; i < asessmet; i++) {    
        starsPaint.push(1)
    }
    starsPaint.map((e,i)=>{
        return arrayStars.splice(i,1,StarWhite) 
     })  
    return (
        <div className='driverCard'>
            <span>
               <img src={img} alt="" /> 
            </span> 
            <div>
                <h3>{name}</h3>
                {arrayStars.map((e, i)=>{
                  return   <img  key={i} src={arrayStars[i]}></img>
                })}
                <p>{car.model} - {car.licensePlate}</p>               
            </div>            
        </div>
    );
}

export default DriverCard;

