import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import TaskList from '../../component/TaskList/TaskList';
import './TaskManager.css';
import Backdrop from '../../component/Backdrop/Backdrop';

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
                <Route path='/input-modal' component={Backdrop}/>
                <h2 style={{textAlign: 'center', fontWeight: 'normal'}}>Add atleast 5 tasks per day to make sure 
                    <span style={{display: 'block'}}>you are productive every day!</span>
                </h2>
                <TaskList tasks={this.state.tasks}/>
                <Link to='/input-modal' className='TaskList__add-button'>
                    <span>+</span>
                </Link>
            </div>
        );
    }
}

export default TaskManager;