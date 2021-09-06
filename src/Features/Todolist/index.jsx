import React, { useState, useRef, useEffect } from 'react'
import deleteLogo from'../../assets/delete-bin.png';

function TodoList() {

    const inputRef = useRef('')

    const [searchTerm,setSearchTerm] = useState('')

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

        if(searchTerm){

            const newTasks = [...checkedTasks];
            newTasks.push({
                id: (Math.random() * 1000).toString(),
                // maybe need to clear the string first
                content: searchTerm,
                checked: false
            })

            setCheckedTasks(newTasks);
            setSearchTerm('');
        }
    }

    const handleOnInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value)
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

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
                <input ref={inputRef} type="text" value={searchTerm} id="task" placeholder=" " onChange={(e) => handleOnInputChange(e)}/>
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
