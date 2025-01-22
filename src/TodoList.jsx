import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample-task",id: uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo]=useState([""]);

    let addNewTask=()=>{
        setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
        setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=> todo.id != id));
    }
    let markDoneAll=()=>{
        setTodos(todos.map((todo)=>{
            return{...todo,isDone:true};
        }));
    }
    let markDone=(id)=>{
       setTodos(todos.map((todo)=>{
        if(todo.id==id)
        {
            return{...todo,isDone:true};
        }
        else
        {
            return todo;
        }
       }));
    };
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            &nbsp; &nbsp;
            <button onClick={addNewTask}>Add</button>
            <br></br><br></br>
            <hr></hr>
            <h4>TodoList</h4>
            <ul>
                {
                    todos.map((todo)=> (
                       <li key={todo.id}><span style={todo.isDone? {textDecorationLine:"line-through"} : {} }>{todo.task}</span>
                       &nbsp; &nbsp;
                       <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                       &nbsp; &nbsp;
                       <button onClick={()=>markDone(todo.id)}>Mark as Done</button>
                       </li>
                    ))
                }
            </ul>
            <button onClick={markDoneAll}>Mark all Done!!</button>
        </div>
    )
}