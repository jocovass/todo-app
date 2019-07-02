import React, { Component } from 'react';

import TaskList from '../../component/TaskList/TaskList';
import './TaskManager.css';
import TaskInputModal from '../../component/TaskInputModal/TaskInputModal';

class TaskManager extends Component {
    state = {
        tasks: [
            {task: 'Kiss your lovely girlfriend', id: 1, done: false},
            {task: 'Finish the ToDoApp design', id: 2, done: true},
            {task: 'Go to the gym', id: 3, done: true}
        ]
    }

    render() {
        return (
            <div>
                <TaskInputModal />
                <h2 style={{textAlign: 'center', fontWeight: 'normal'}}>Add atleast 5 tasks per day to make sure 
                    <span style={{display: 'block'}}>you are productive every day!</span>
                </h2>
                <TaskList tasks={this.state.tasks}/>
                <button className='TaskList__add-button'>+</button>
            </div>
        );
    }
}

export default TaskManager;