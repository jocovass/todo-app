import React from 'react';

import './TaskInputModal.css';

const TaskInputModal = (props) => {
    const cancelClickHandler = () => {
        props.history.goBack();
    }

    const addClickHandler = () => {
        props.click();
        cancelClickHandler();
    }

    return (
        <React.Fragment>
            <div className='TaskInputModal'>
                <h2 className='TaskInputModal__title'>Add your next task!</h2>
                <input type='text' 
                       placeholder='Start typing here...' 
                       className='TaskInputModal__input' 
                       value={props.value}
                       onChange={props.change}/>
                <button className='TaskInputModal__add TaskInputModal__btn'
                        onClick={addClickHandler}>Add Task</button>
                <button className='TaskInputModal__cancel TaskInputModal__btn'
                        onClick={cancelClickHandler}>Cancel</button>
            </div>
        </React.Fragment>
    );
};

export default TaskInputModal;