import React, {useState} from 'react';
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import './Todo.css';
import TodoForm from "../TodoForm/TodoForm";

const Todo = ({todo, removeTodo, updateTodo}) => {
    // Set the initial state of the todo element
    const [edit, setEdit] = useState({id: null, value: ''});

    // Set the initial state of the removedTodo (boolean for determining when to trigger css animation)
    const [removedTodo, setRemovedTodo] = useState(false);

    // Function to submit the updated todo
    const submitUpdate = value => {
        // Update the todo value
        updateTodo(edit.id, value);

        // Reset the todo's state
        setEdit({id: null, value: ''});
    };

    // If the user has clicked the Edit Button -> show the input field for editing the todo's text
    if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate}/>

    return (
        <div
            className={removedTodo ? "todo-row removed" : "todo-row"}
            onAnimationEnd={() => removeTodo(todo.id)}
        >
            <div>{todo.text}</div>
            <div className="icons">
                {/* Icon for removing todo */}
                <RiCloseCircleLine className="delete-icon" onClick={() => setRemovedTodo(true)}/>

                {/* Icon for editing todo */}
                <TiEdit className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.text})}/>
            </div>
        </div>
    );
};

export default Todo;
