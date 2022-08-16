import React , {useState}from 'react';
import validator from 'validator'

const SignupPage = () => {
   const [email, setEmail]= useState("")
   const [password, setPassword]= useState("")
   const [nationality, setNationality]= useState("en")
   const [language, setLanguage] = useState("")
   const [showInfo, setShowInfo] = useState(false)
   const [colorCheckEmail,setColorCheckEmail] =useState("red")
   const [colorCheckPass,setColorCheckPass] =useState("red")
   const [textCheckEmail, setTextCheckEmail] =useState("invalid")
   const [textCheckPass, setTextCheckPass] =useState("invalid")

   const handleForm =(e) =>{
    e.preventDefault()    
        if (validator.isEmail(email) && validator.isStrongPassword(password)){             
   
            setShowInfo(true)
            if(nationality==="en"){
                setLanguage(language => language="Hello")
            }else if(nationality==="fr"){
                setLanguage(language => language="Bonjour")
            }else{
                setLanguage(language => language="Hola")
            }  
           
        } else{
            setShowInfo(false)  
            setPassword(password => password =""  )
        }              
   }    
    function checkEmail(e){
        setEmail(e.target.value)
            if(validator.isEmail(e.target.value)){
               setColorCheckEmail("green")
                setTextCheckEmail("valid")  
            }else{
                 setColorCheckEmail("red")   
                 setTextCheckEmail("invalid")  
            }               
    }   
    const checkPassword=(e)=>{
        setPassword(e.target.value)
        if(validator.isStrongPassword(e.target.value)){
            setColorCheckPass("green")
            setTextCheckPass("valid")
         
        }   else{
              setColorCheckPass("red")  
            setTextCheckPass("invalid") 
        }                                
    }             
    return (
        <div>
            <form className="containerSingPage" onSubmit={handleForm}>   
                <input type="email" value={email} placeholder="Email" onChange={(e)=>{checkEmail(e)}}/>                                        
                {!showInfo && (                                   
                <p style={{fontSize:"12px", color:colorCheckEmail}}>You typed a {textCheckEmail} email</p>

                )}
                  {showInfo && (                     
                <p style={{fontSize:"12px", color:colorCheckEmail}}>You typed a {textCheckEmail} email</p>
                )}                

                <input type="password" value={password}  placeholder="Password" onChange={(e)=> {checkPassword(e)}}/>               
                {!showInfo && (                                   
                <p style={{fontSize:"12px", color:colorCheckPass}}>You typed a {textCheckPass} password</p>

                )}
                  {showInfo && (                     
                <p style={{fontSize:"12px", color:colorCheckPass}}>You typed a {textCheckPass} password</p>
                )}
                <select value={nationality} onChange={(e)=> {setNationality(e.target.value)}}id="">
                    <option value="en">En</option>
                    <option value="fr">Fr</option>
                    <option value="es">Es</option>
                </select>
                <button type='submit'>Sing in</button>
                <hr/>  
                {showInfo && ( 
                    <span >
                        <h3>{language}</h3>
                        <h4>You email address is : {email}</h4>
                        <h4>You email address and password is correct</h4>
                    </span>                         
                )}   
            </form>
        </div>
    );
}
export default SignupPage;
