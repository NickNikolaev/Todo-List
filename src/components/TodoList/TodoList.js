import React, {useState} from 'react';
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Function to add new todo
    const addTodo = todo => {
        // Validate the todo's text
        if(!todo.text || /^\s*$/.test(todo.text)) return;

        // Add the new todo to "todos" and update the state
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log('new todos', newTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today ?</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    );
};

export default TodoList;
