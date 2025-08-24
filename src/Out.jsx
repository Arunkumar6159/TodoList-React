import { useState } from "react"; 
export default function Out()
{
    let [count,setCount]=useState({Arun:0,Chandana:0,Akshith:0,Vaibhav:0});
    let inc=(name)=>{
        setCount((prev)=>({
            ...prev,
            [name]:prev[name]+1
        }));
    };
    return(
        <div>
            <p>Arun {count.Arun}</p>
            <button onClick={()=>inc('Arun')}>+1</button>
            <p>Chandana {count.Chandana}</p>
            <button onClick={()=>inc('Chandana')}>+1</button>
            <p>Akshith {count.Akshith}</p>
            <button onClick={()=>inc('Akshith')}>+1</button>
            <p>Vaibhav {count.Vaibhav}</p>
            <button onClick={()=>inc('Vaibhav')}>+1</button>
        </div>
    );
}