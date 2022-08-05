import React,{useState} from 'react';

const LikeButton = () => {
    const [count, setCount]= useState(0)
    const color =['purple','blue','green','yellow','orange','red','grey']

    const add = () =>{
        if(count < 6  ){
            return  setCount(count => count+1)
        }
    }
    const subt = () =>{
        if(count > 0 ){
            return  setCount(count => count-1)
        }
    }       
    return (
        <div className="likesCard">
            <button onClick={()=>add()} style={{backgroundColor:color[count]}}>👍</button>
            <div>{count} Likes</div>    
            <button onClick={()=>subt()} style={{backgroundColor:color[count]}} >👎</button>        
        </div>
    );
}

export default LikeButton;
