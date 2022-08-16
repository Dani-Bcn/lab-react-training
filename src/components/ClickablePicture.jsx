import React ,{useState}from 'react';


const ClickablePicture = ({img,imgClicked}) => {
    const [state,setState] =useState(true)
    const [picture, setPicture] = useState(img)
    const changePicture =()=>{
        setState(state => !state)
        state?setPicture(picture => imgClicked):setPicture(picture=> img)        
    }
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <button onClick={changePicture}>Click mee!!</button>
        </div>
    );
}

export default ClickablePicture;
