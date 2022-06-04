function TodoList({title,id,status,handleToggle,handleDelete}) {
    return ( 
        <div>
            <h3>{title}</h3>
            <button onClick={()=>handleToggle(id)}>{status? "TRUE":"FALSE"}</button>
            <button onClick={(e)=>e.target.parentNode.remove()}>Delete</button>
        </div>
     );
}

export default TodoList;