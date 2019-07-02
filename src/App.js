import React from 'react';

import Header from './component/Header/Header';
import TaskManager from './container/TaskManager/TaskManager';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskManager />
    </div>
  );
}

export default App;
