import React from 'react';

import './TaskInputModal.css';

const TaskInputModal = (props) => {
    const clickHandler = () => {
        props.history.goBack();
    }

    return (
        <React.Fragment>
            <div className='TaskInputModal'>
                <h2 className='TaskInputModal__title'>Add your next task!</h2>
                <input type='text' placeholder='Start typing here...' className='TaskInputModal__input'/>
                <button className='TaskInputModal__add TaskInputModal__btn'>Add Task</button>
                <button className='TaskInputModal__cancel TaskInputModal__btn'
                        onClick={clickHandler}>Cancel</button>
            </div>
        </React.Fragment>
    );
};

export default TaskInputModal;