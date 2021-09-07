import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import deleteLogo from'../../assets/delete-bin.png';
import { handleRemove, handleChecked, handleAdd } from './todoSlice';

function TodoList() {

    const dispatch = useDispatch();

    const inputRef = useRef('')

    const [searchTerm,setSearchTerm] = useState('')

    const checkedTasks = useSelector((state) => state.tasks.tasks)

    const handleAddTask = (e) => {
        e.preventDefault();

        if(searchTerm){

            const item = {
                id: (Math.random() * 1000).toString(),
                // maybe need to clear the string first
                content: searchTerm,
                checked: false
            }

            dispatch(handleAdd(item))
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
        dispatch(handleChecked(id))
    }

    const handleRemoveTask = (id) => {
        dispatch(handleRemove(id))
        //setCheckedTasks(newCheckedTask);
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
