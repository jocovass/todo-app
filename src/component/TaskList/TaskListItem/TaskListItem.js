import React from 'react';

import './TaskListItem.css'

const TaskListItem = (props) => {

    return (
        <li className='TaskListItem'>
            <div className='TaskListItem__indicator'></div>
            <p className='TaskListItem__name'>
                <span className='TaskListItem__radio-button TaskListItem__radio-button--inner'></span>
                {props.name}
            </p>
            <button className='TaskListItem__remove'>Remove</button>
        </li>
    );
};

export default TaskListItem;