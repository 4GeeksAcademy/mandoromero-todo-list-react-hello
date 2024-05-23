import React, {useState} from "react";
import TodoDeleteButton from "./todoDeleteButton";


const ToDoInput = () => {
    return(
        const [List, setList] = useState = {[]};
        const [input, setInput] =useState = ("");

        const addTodo = (todo) => {
            const newTodo (
                id: Math.random,
                todo: todo
            ) 
        };


        setList([...List, newTodo]);
        setInput("What needs to be done?")


            return(
                <div className="input">
                    <input className="inputList" type="text" value=(input) onChange={(e) => (e.target.value)}>
                        What needs to be done?
                    </input>
                onclick= {() => addtodo(input)} 
                </div>
            )
    )
};


export default ToDoInput: