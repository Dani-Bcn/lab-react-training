import React, {useState} from 'react';
const ChooseColor = () => {
    const [rValue, setRvalue] =useState("0") 
    const [gValue, setGvalue] =useState("0") 
    const [bValue, setBvalue] =useState("0") 

    const handleCountR=(e)=>{
        setRvalue(e.target.value)
    }
    const handleCountG=(e)=>{
        setGvalue(e.target.value)
    }
    const handleCountB=(e)=>{
        setBvalue(e.target.value)
    }    
    return (
        <div className='containerColor'> 
            <span> 
                <div className="chooseColor"style={{backgroundColor:`rgb(${rValue},0,0)`}}></div>    
                <h2> R : &nbsp;</h2>
                <input type="number" max={255} min={0} onChange={(e)=>{handleCountR(e)}}></input>          
            </span>
            <span>  
                <div className="chooseColor"style={{backgroundColor:`rgb(0,${gValue},0)`}}></div>    
                <h2>  G : &nbsp;</h2>
                <input type="number" max={255} min={0} onChange={(e)=>{handleCountG(e)}}></input>          
            </span>
            <span>
                <div className="chooseColor"style={{backgroundColor:`rgb(0,0,${bValue})`}}></div>   
                <h2>B : &nbsp;</h2>
                <input type="number" max={255} min={0} onChange={(e)=>{handleCountB(e)}}></input>                           
            </span>   
            <span>
                <div className="chooseColor"style={{backgroundColor:`rgb(${rValue},${gValue},${bValue})`}}></div>   
                <h2> &nbsp; &nbsp; &nbsp; RGB </h2>     
            </span>
                

        </div>
    );
}
export default ChooseColor;
