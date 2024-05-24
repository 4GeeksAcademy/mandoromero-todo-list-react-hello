import React, {useState} from "react";
import TodoDeleteButton from "./todoDeleteButton";


function ToDoList() {
        const [list, setList] = useState = {[]};
        const [input, setInput] =useState = ("");

        const addTodo = (todo) => {
            const newTodo = {
             id: Math.randoom(),
             todo: todo  
            };

        setList([...list, newTodo]);    
        setInput("");

        }



        return(
            <div class="input">
                <input type="text" value="input" onchange={(e) => setInput(e.target.value)} />
                <button.onClick = {() => addTodo}
            </div>   
        ) 
};


        


export default ToD0List;