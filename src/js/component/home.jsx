import React from "react";
import TodoList from "./todoList";




const Home = () => {
	return(
		<div>
			<div className="container">
            <h1>todos</h1>
				<TodoList />
			</div>
		</div>	
	)
};

export default Home;
