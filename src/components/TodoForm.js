import React, {useState} from 'react';

const TodoForm = () => {
    const [input, setInput] = useState('input');

    return (
        <form className="todo-form">
            <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-form-input"/>
            <button className="todo-form-button">Add todo</button>
        </form>
    );
};

export default TodoForm;
