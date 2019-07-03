import React from 'react';

import TaskInputModal from '../TaskInputModal/TaskInputModal';;

const Backdrop = (props) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,.75)',
            zIndex: '10',
            perspective: '1000px'
        }}>
            <TaskInputModal {...props}/>
        </div>
    );
};

export default Backdrop;