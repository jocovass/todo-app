import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import './TaskInputModal.css';

const TaskInputModal = (props) => {
    return (
        <React.Fragment>
            <Backdrop />
            <div className='TaskInputModal'>
                <h2 className='TaskInputModal__title'>Add your next task!</h2>
                <input type='text' placeholder='Start typing here...' className='TaskInputModal__input'/>
                <button className='TaskInputModal__add'>Add Task</button>
                <button className='TaskInputModal__cancel'>Cancel</button>
            </div>
        </React.Fragment>
    );
};

export default TaskInputModal;