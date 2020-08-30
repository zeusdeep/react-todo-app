import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2']);


  return (
    <div className="App">
      <h1>Hello world</h1>
      <input />
      
      <button> Add Todo </button>

      <ul>
        { todos.map(todo => (
          <li> {todo} </li>
          )
        ) }
      </ul>
    </div>
  );
}

export default App;
