import { useState } from "react";
import './todo.css';
function TodoInput({onClick}) {
    const [title,setTitle]=useState("")

       
    return ( 
        <div>
             <button className="btn" onClick={()=>onClick(title)}>+</button>
            <input 
            placeholder=" Add a to-do..." value={title} onChange={(e)=>setTitle(e.target.value)}/>
           
        </div>
     );
}

export default TodoInput;