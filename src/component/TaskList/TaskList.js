import React from 'react';

import TaskListItem from './TaskListItem/TaskListItem';
import './TaskList.css';

const TaskList = (props) => {

    const taskList = props.tasks.map(element => {
        return <TaskListItem key={element.id}
                             id={element.id}
                             name={element.task}
                             isDone={element.done}
                             click={props.click}
                             delete={props.delete}/>
    })

    return (
        <ul className='TaskList__ul'>
            {taskList}
        </ul>
    );
};

export default TaskList;