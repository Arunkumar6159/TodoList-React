
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
export default function TodoList(){
    let [Arr,setArr]=useState([{Task:'simple',id:uuidv4()}]);
    let [Todo,setTodo]=useState('');
    let addTask=()=>{
        setArr((prev)=>([...prev,{Task:Todo,id:uuidv4()}]));
        setTodo('');
    }
    let update=(event)=>{
        setTodo((event.target.value));
    }
    return(
        <div>
        <h1>Welcome</h1>
        <input type="text" placeholder="Add a task" value={Todo}onChange={update}/>
        <button onClick={addTask}>Add a Task</button>
        <h3>TodoList</h3>
         <ul>
            {Arr.map((ele)=>(
                <li key={ele.id}>{ele.Task}</li>
            ))}
        </ul>
        </div>
    );
}