import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Todo from './Todo.js';
import './App.css';
import db from './firebase';
import firebase from "firebase";

function App() { 
  
  // local state to hold tasks
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  // fetch and observe todos from firebase db
  // useEffect runs on app load
  useEffect(() => {
    // this code here fires when app.js loads
    db
    .collection('todos')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => doc.data().todo))
      })
  }, [])

  const addTodo = (event) => {
    // function which fires off when input button tapped
    
    // prevents refreshing of entire page when form is submitted
    event.preventDefault();

    db.collection('todos').add({ 
      todo: inputTodo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //reset input
    setInputTodo('');
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      
      <form>
        <FormControl>
          <InputLabel> Add Todo </InputLabel>
          <Input 
            value = { inputTodo }
            onChange = { event => setInputTodo(event.target.value) } />
        </FormControl>

        <Button 
          // disable button when inputTodo is empty
          disabled = { !inputTodo }
          type = "submit" 
          variant="contained" 
          color="primary"
          onClick = {addTodo} >  

            Add Todo

        </Button>
      </form>
      
      <ul>
        { todos.map(
          todo => (
            <Todo text = {todo} />
            ) 
          ) 
        }
      </ul>

    </div>
  );
}

export default App;
