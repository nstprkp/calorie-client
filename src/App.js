import './App.css';
import React from 'react';
import GetAllCalorie from './GetAllCalorie'
import CreateCalorie from './CreateCalorie'
import DeleteCalorie from './DeleteCalorie'
import UpdateFood from './UpdateFood'

const App = () => {
  return (
    <div className="App">
      <h1 className='App-header'>
          <br />
          Welcome to CalorieLife! <br />
      </h1>
      <GetAllCalorie />
      <CreateCalorie />
      <DeleteCalorie />
      <UpdateFood />
    </div>
  );
}

export default App;
