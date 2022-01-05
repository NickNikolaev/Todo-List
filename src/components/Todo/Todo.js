import React, {useState} from 'react';
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import './Todo.css';

const Todo = props => {
    console.log('text inside todo', props.todo);
    // Set the initial state of the todo element
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: ''
    // });

    return (
        <div className="todo-row">
            <div>{props.todo.text}</div>
            <div className="icons">
                <RiCloseCircleLine className="delete-icon" />
                <TiEdit className="edit-icon" />
            </div>
        </div>
    );
};

export default Todo;
