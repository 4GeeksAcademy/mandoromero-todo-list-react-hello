import React, {useState} from "react";
import TodoDeleteButton from "./todoDeleteButton";


function TodoList() {
    const [list, setList] = useState  ([]);
    const [input, setInput] =useState  ("");

    const addTodo = (todo) => {const newTodo = {
        id: Math.random(),
        todo: todo
        }

        setList([...list, newTodo]);    
        setInput("What needs to be done?");

    };



        return(
            <div class="input">
                <input type="text" placeholder="What needs to be done?" onchange={(e) => setInput(e.target.value)} />
                <button onClick = {() => addTodo(input)}>Add</button>
                <ul>
                    {list.map((todo) => (
                    <li key = {todo.id}>
                        {todo.todo} 
                        <TodoDeleteButton />  
                    </li>  ))}
                </ul>
            </div>   
        )
    };
    


        


export default TodoList;