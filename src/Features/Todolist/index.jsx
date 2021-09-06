import React, { useState } from 'react'
import deleteLogo from'../../assets/delete-bin.png';

function TodoList() {

    const [checkedTasks,setCheckedTasks] = useState([
        {
            id: '1',
            content: 'This is my task 1',
            checked: true,
        },

        {
            id: '2',
            content: 'This is my task 2',
            checked: false,
        },

        {
            id: '3',
            content: 'This is my task 3',
            checked: false,
        }
    ])

    const handleAddTask = (e) => {
        e.preventDefault();

        console.log(e.target);
    }

    const handleCheckedTask = (id) => {
        
        // remove
        // const newCheckedTask = checkedTasks.filter(item => item.id !== id)
        const index = checkedTasks.findIndex(item => item.id === id)
        if(index < 0)
            return;

        const newCheckedTask = [...checkedTasks];
        newCheckedTask[index].checked = !newCheckedTask[index].checked;
        setCheckedTasks(newCheckedTask);
    }

    const handleRemoveTask = (id) => {
        const newCheckedTask = checkedTasks.filter(item => item.id !== id)

        setCheckedTasks(newCheckedTask);
    }

    // item {
    //     key,
    //     content,
    //     checked,
    // }

    return (
        <div className="todo">
            <form className="todo__input" onSubmit={(e) => handleAddTask(e)}>
                <input type="text" id="task" placeholder=" "/>
                <label>Task</label>
                <button>Add Task</button>
            </form>

            <div className="todo__content">
                <ul className="todo__wrapper">

                    {
                        checkedTasks.length > 0 ?
                            checkedTasks.map(({id, content, checked}) => (
                                <li className={ `todo__item ${checked ? "text-through" : ""}`} key={id}>
                                    <label onClick={() => handleCheckedTask(id)}>
                                        { content }
                                        
                                    </label>
                                    <img src={deleteLogo} alt="delete icon" onClick={() => handleRemoveTask(id)}/>
                                    
                                </li>
                            ))
                        : <p>Oops, You need to add more tasks</p>
                    }

                    
                </ul>
            </div>
        </div>
    )
}

export default TodoList
