import React, {useState} from 'react';
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import './Todo.css';

const Todo = ({todo, removeTodo}) => {
    // Set the initial state of the todo element
    // const [edit, setEdit] = useState({id: null, value: ''});

    // Set the initial state of the removedTodo (boolean for determining when to trigger css animation)
    const [removedTodo, setRemovedTodo] = useState(false);

    return (
        <div
            className={removedTodo ? "todo-row removed" : "todo-row"}
            onAnimationEnd={() =>  removeTodo(todo.id)}
        >
            <div>{todo.text}</div>
            <div className="icons">
                {/* Icon for removing todo */}
                <RiCloseCircleLine
                    onClick={() => setRemovedTodo(true)}
                    className="delete-icon"
                />

                {/* Icon for editing todo */}
                <TiEdit className="edit-icon"/>
            </div>
        </div>
    );
};

export default Todo;
