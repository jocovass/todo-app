import React from 'react';

import './TaskListItem.css'

const TaskListItem = (props) => {
    const checkedButton = ['TaskListItem__radio-button'];
    const taskStyle = ['TaskListItem__name'];
    const taskIndicator = ['TaskListItem__indicator'];
    if(props.isDone) {
        checkedButton.push('TaskListItem__radio-button--inner');
        taskStyle.push('TaskListItem__name--crossed');
        taskIndicator.push('TaskListItem__indicator--done');
    }

    const fadeOutFunc = (e) => {
        e.persist();
        setTimeout(props.delete.bind(null, e), 500);
        e.target.parentElement.classList.add('FadeOut');

        // setTimeout((e) => props.delete(e), 700);
    }

    return (
        <li className='TaskListItem' id={props.id}>
            <div className={taskIndicator.join(' ')}></div>
            <p className={taskStyle.join(' ')}>
                <span className={checkedButton.join(' ')}
                      onClick={props.click}></span>
                {props.name}
            </p>
            <button className='TaskListItem__remove'
                    onClick={fadeOutFunc}>Remove</button>
        </li>
    );
};

export default TaskListItem;