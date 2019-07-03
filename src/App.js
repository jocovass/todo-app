import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './component/Header/Header';
import TaskManager from './container/TaskManager/TaskManager';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <TaskManager />
      </div>
    </BrowserRouter>
  );
}

export default App;
