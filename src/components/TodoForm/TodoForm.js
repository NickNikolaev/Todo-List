import React, {useState} from 'react';

const TodoForm = props => {
    const [input, setInput] = useState('');

    // Function to handle onChange event
    const handleChange = event => setInput(event.target.value);

    // Function to handle onSubmit event
    const handleSubmit = event => {
        // Prevent the default behaviour of the submit button
        event.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })

        // Set the "input" value to empty string
        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-form-input"
                onChange={handleChange}
            />
            <button className="todo-form-button">Add todo</button>
        </form>
    );
};

export default TodoForm;
