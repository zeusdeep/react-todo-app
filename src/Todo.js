import React from 'react'
import { ListItem, ListItemText, List } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './Todo.css';

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
                //onClick = { event => }
            />
            <ThumbUpIcon  
                //onClick = { event => }
            />
        </List>
    )
}

export default Todo
