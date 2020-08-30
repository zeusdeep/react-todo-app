import React, { useState } from 'react';
import './App.css';

function App() {
  
  // local state to hold tasks
  const [todos, setTodos] = useState(
    [
      'Task 1', 
      'Task 2', 
      'Task 3'
    ]);

  const [inputTodo, setInputTodo] = useState('');

  const addTodo = (event) => {
    // function which fires off when input button tapped
    
    // prevents refreshing of entire page when form is submitted
    event.preventDefault();
    
    // pushes inputted todo to end of todos array
    setTodos([...todos, inputTodo]);

    //reset input
    setInputTodo('');
  }

  return (
    <div className="App">
      <h1>Hello world</h1>

      <form>
        <input 
          value = { inputTodo }
          onChange = { event => setInputTodo(event.target.value) }
        />
      
        <button 
          type = "submit" 
          onClick = {addTodo}> 

          Add Todo 

        </button>

      </form>
      
      

      <ul>
        { todos.map(
          todo => ( 
            <li> {todo} </li>
            )
          ) 
        }
      </ul>
    </div>
  );
}

export default App;
