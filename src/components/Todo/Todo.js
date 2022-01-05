import React, {useState} from 'react';
import { RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

const Todo = todo => {
    // Set the initial state of the todo element
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: ''
    // });

    return (
        <div key={todo.id}>
            {todo.text}
        </div>
    );
};

export default Todo;
