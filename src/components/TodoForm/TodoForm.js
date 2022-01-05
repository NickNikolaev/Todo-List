import React, {useState} from 'react';
import './TodoForm.css';

const TodoForm = props => {
    const [todo, setTodo] = useState('');

    // Function to handle onChange event
    const handleChange = event => setTodo(event.target.value);

    // Function to handle onSubmit event
    const handleSubmit = event => {
        // Prevent the default behaviour of the submit button
        event.preventDefault();

        // Add the new todo to all todos
        props.addTodo({
            id: Math.floor(Math.random() * 100000),
            text: todo
        })

        // Set the "todo" value to empty string
        setTodo('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={todo}
                name="text"
                className="todo-form-input"
                onChange={handleChange}
            />
            <button className="todo-form-button">Add todo</button>
        </form>
    );
};

export default TodoForm;
