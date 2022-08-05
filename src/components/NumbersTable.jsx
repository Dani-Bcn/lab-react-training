import React , {useState}from 'react';

const NumbersTable = ({limit}) => {
    const count=[]   
    for(let i=0; i<limit; i++){
        count.push(i)
    }   
    return (
        <div className="containerTable">
            {count.map(ele=>{
                if(ele%2 === 0){
                    return   <div key={ele}className="tableBackWhite">{ele+1}</div>
                }else{
                    return  <div key={ele}className="tableBackRed">{ele+1}</div>
                }
            })}                      
        </div>
    );
}
export default NumbersTable;
