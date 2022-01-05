import React, {useState} from 'react';
import './TodoList.css';

import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Function to add new todo
    const addTodo = todo => {
        // Validate the todo's text
        if (!todo.text || /^\s*$/.test(todo.text)) return;

        // Add the new todo to "todos" and update the state
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log('todos', newTodos)
    }

    return (
        <div>
            <h1>What's the Plan for Today ?</h1>
            <TodoForm addTodo={addTodo} todos={todos}/>

            {/* Pass all todos to the Todo React Component */}
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodoList;
