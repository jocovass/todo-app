import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import TaskList from '../../component/TaskList/TaskList';
import './TaskManager.css';
import Backdrop from '../../component/Backdrop/Backdrop';

class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem('tasks')) || [],
            input: '',
        }
    }

    onChangeHandler = (e) => {
        this.setState({ input: e.target.value });
    }

    addTaskHandler = () => {
        const tasks = [...this.state.tasks];
        const newTask = {
            task: this.state.input,
            id: this.state.tasks.length === 0 ? 1 : this.state.tasks[this.state.tasks.length - 1].id + 1,
            done: false,
        };

        tasks.unshift(newTask);
        this.setState({tasks: tasks});
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    taskDoneHandler = (e) => {
        const tasks = [...this.state.tasks];
        tasks.forEach(el => {
            if(el.id == e.target.parentElement.parentElement.id) {
                el.done = !el.done;
            }
        });

        this.setState({tasks: tasks});
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    deleteTaskHandler = (e) => {
        const tasks = [...this.state.tasks];
        const newTasks = tasks.filter(el => {
            return el.id != e.target.parentElement.id;
        });

        this.setState({tasks: newTasks});
        localStorage.setItem('tasks', JSON.stringify(newTasks));        
    }

    render() {
        return (
            <div>
                <Route path='/input-modal' render={(props) => <Backdrop change={this.onChangeHandler} 
                                                                        {...props} 
                                                                        value={this.state.value}
                                                                        click={this.addTaskHandler}/>}/>
                <h2 className='TaskManager__subtitle'>Add atleast 5 tasks per day to make sure 
                    <span>you are productive every day!</span>
                </h2>
                <TaskList tasks={this.state.tasks}
                          click={this.taskDoneHandler}
                          delete={this.deleteTaskHandler}/>
                <Link to='/input-modal' className='TaskList__add-button'>
                    <span>+</span>
                </Link>
            </div>
        );
    }
}

export default TaskManager;