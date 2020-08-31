import React from 'react'
import { ListItem, ListItemText, List } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './Todo.css';
import db from './firebase';
import firebase from "firebase";

function Todo(props) {
    return (
        <List>
            <ListItem >
                <ListItemText 
                    primary = {props.todo.todo} 
                    secondary = {'likes: ' + props.todo.likes}
                />
            </ListItem>
            <DeleteIcon  
                onClick = { event => db.collection('todos').doc(props.todo.id).delete() }
            />
            <ThumbUpIcon  
                onClick = { event => db.collection('todos').doc(props.todo.id).update({
                    likes:props.todo.likes + 1,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            }
            />
        </List>
    )
}

export default Todo
