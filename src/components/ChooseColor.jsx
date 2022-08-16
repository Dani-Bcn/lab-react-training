import React, {useState} from 'react';
const ChooseColor = () => {
    const [rValue, setRvalue] =useState("0") 
    const [gValue, setGvalue] =useState("0") 
    const [bValue, setBvalue] =useState("0") 

    const handleCountR=(e)=>{
        console.log(e.target.value)
        setRvalue(e.target.value)
    }
    const handleCountG=(e)=>{
        console.log(e.target.value)
        setGvalue(e.target.value)
    }
    const handleCountB=(e)=>{
        console.log(e.target.value)
        setBvalue(e.target.value)
    }    
    return (
        <div className='containerColor'> 
            <span> 
                <div className="chooseColor"style={{backgroundColor:`rgb(${rValue},0,0)`}}></div>    
                <h2> R -</h2>
                <input type="number" max={255} min={0} onChange={(e)=>{handleCountR(e)}}></input>          
            </span>
            <span>  
                <div className="chooseColor"style={{backgroundColor:`rgb(0,${gValue},0)`}}></div>    
                <h2> G -</h2>
                <input type="number" max={255} min={0} onChange={(e)=>{handleCountG(e)}}></input>          
            </span>
            <span>
                <div className="chooseColor"style={{backgroundColor:`rgb(0,0,${bValue})`}}></div>   
                <h2>B -</h2>
                <input type="number" max={255} min={0} onChange={(e)=>{handleCountB(e)}}></input>                           
            </span>        
        </div>
    );
}
export default ChooseColor;
