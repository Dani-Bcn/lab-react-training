import React ,{useState} from 'react';
import profiles from '../data/berlin.json';
const FaceBook = () => {
    let styl= "card"
    let contries = [];
    const[profile,setProfile]=useState(profiles) 
    const [showInfo,setShowInfo] = useState(false)
    const [country, setCountry] = useState("USA")
 
      profile.map(ele=>{ 
        if(!contries.includes(ele.country)){    
            contries.push(ele.country)                  
        }  
    })  
    const handleClickImage=()=>{
        setShowInfo(current => !current)
    }
    return ( 
        <div>     
           <div className='containerButtonsContries'>
            {contries.map((e,i)=>{               
                return <button onClick={(e)=> setCountry(country => country = contries[i])}>{e}</button> 
            })}
           </div>                         
            {profile.map(ele=>{                                                                     
                return(                     
                   <div key={ele.name}>    
                       {ele.country === country? styl="cardBgBlue" :styl="card"}
                     <div className={styl}> 
                        <span>
                            <img src={ele.img} alt="" onClick={()=> {handleClickImage()}} /> 
                        </span>
                        {showInfo && (
                        <span className={showInfo}>
                            <h3> {ele.firstName}</h3> 
                            <h3> {ele.lastName}</h3>
                            <h3> {ele.country}</h3>                           
                            {ele.isStudent? <h3>Studen</h3>:<h3>Teacher</h3>}                            
                        </span>
                        ) }                      
                    </div> 
                   </div>              
                 )                   
            })}
        </div>
    );
}
export default FaceBook;
