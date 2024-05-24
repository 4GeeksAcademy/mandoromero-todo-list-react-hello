import React, {useState} from "react";
import TodoDeleteButton from "./todoDeleteButton";


function ToDoList() {
        const [list, setList] = useState = {[]};
        const [input, setInput] =useState = ("");

        return(
            <div class="input">
                <input type="text" value="input" onchange={(e) => setInput(e.target.value)} />
            </div>   
        ) 
};


        


export default ToD0List;