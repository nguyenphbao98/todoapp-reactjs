import React from 'react'
import deleteLogo from'../../assets/delete-bin.png';

function index() {
    return (
        <div className="todo">
            <div className="todo__input">
                <input type="text" id="task" placeholder=" "/>
                <label>Task</label>
                <button>Add Task</button>
            </div>

            <div className="todo__content">
                <ul className="todo__wrapper">
                    <li className="todo__item">
                        <label>
                            <input type="checkbox" name="item1" />
                            This is item 1
                            
                        </label>
                        <img src={deleteLogo} alt="delete icon"/>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default index
