import { useState } from "react";
export default function Arr()
{
    let [arr,setArr]=useState(['arun']);
    let inc=()=>{
        setArr((prev)=>([...prev,'arunkumar']));
        setArr((prev)=>([...prev,'nikhil']));
    }
    return(
        <>
        <ul>
            {arr.map((ele)=>(
                <li>{ele}</li>
            ))}
        </ul>
        <button onClick={inc}>click me!!!</button>
        </>
    );
}