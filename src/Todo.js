import React from 'react'
import { ListItem, ListItemText, List } from '@material-ui/core';
import './Todo.css';

function Todo(props) {
    return (
        <List>
            <ListItem >
                <ListItemText primary = {props.text.todo} />
            </ListItem>
        </List>
    )
}

export default Todo
