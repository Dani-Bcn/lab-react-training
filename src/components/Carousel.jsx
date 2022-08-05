import React , {useState} from 'react';
const Carousel = ({images}) => {
    let num =0
    const [img, setImg] = useState(images)
    const [count, setCount] = useState(num)
    const changeImgRight=()=>{
        if(count > 0){
           setCount(count => count - 1 ) 
        }       
    }
    const changeImgLeft=()=>{
        if(count < 3) {
           setCount(count => count + 1 )  
        }      }
    return (
        <div className="card">
            <button onClick={()=>changeImgRight()}>Left</button>
            <img src={img[count]} alt=""/> 
            <button onClick={()=>changeImgLeft()}>Rigth</button>
        </div>
    );}
export default Carousel;
