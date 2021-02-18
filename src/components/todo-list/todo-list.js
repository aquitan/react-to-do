import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.scss';

const TodoList = ({ todos, onToggleImportant, onToggleDone, onDelete }) => {
    const listItem = todos.map(todoItem => {
        const {id, ...todoItemProps} = todoItem;
        return (
            <li className='list-group-item list-item' key={id}>
                <TodoListItem
                    onDelete={() => onDelete(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    {...todoItemProps}
                />
            </li>
        )
    })
    return(
        <ul className='list-group'>
            {listItem}
        </ul>
    )
}

export default TodoList;