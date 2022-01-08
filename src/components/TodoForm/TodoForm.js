import React, {useState, useEffect, useRef} from 'react';
import './TodoForm.css';

const TodoForm = ({edit, onSubmit}) => {
    const [todo, setTodo] = useState(edit ? edit.value : '');

    // Focus the input field
    const inputRef = useRef(null);
    useEffect(() => inputRef.current.focus());

    console.log('edit', edit);

    // Function to handle onChange event
    const handleChange = event => setTodo(event.target.value);

    // Function to handle onSubmit event
    const handleSubmit = event => {
        // Prevent the default behaviour of the submit button
        event.preventDefault();

        // Add the new todo to all todos
        onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: todo
        })

        // Set the "todo" value to empty string
        setTodo('');
    }

    // JSX when adding todo
    const addTodoJSX = (
        <div>
            <input
                type="text"
                placeholder="Add a todo"
                value={todo}
                name="text"
                className="todo-form-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-form-button">Add todo</button>
        </div>
    );

    // JSX when editing todo
    const editTodoJSX = (
        <div>
            <input
                type="text"
                placeholder="Update your item"
                value={todo}
                name="text"
                className="todo-form-input edit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-form-button edit">Update</button>
        </div>
    );

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {edit ? editTodoJSX : addTodoJSX}
        </form>
    );

};

export default TodoForm;
