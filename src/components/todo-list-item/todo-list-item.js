import React, { Fragment } from 'react';
import './list-items.scss';

const TodoListItem = ({label, important, done, onToggleImportant, onToggleDone, onDelete}) => {
    let classes = 'list-item-label';

    if (important) {
        classes += ' important'
    }
    if (done) {
        classes += ' done'
    }

    return (
        <Fragment>
            <div className="todo-item">
                <span
                    onClick={onToggleDone}
                    className={classes}>
                {label}
            </span>
                <div className='btn-group'>
                    <button
                        onClick={onToggleImportant}
                        className='btn btn-primary'
                    >Important</button>
                    <button
                        onClick={onDelete}
                        className='btn btn-danger'
                    >Delete</button>
                </div>
            </div>
        </Fragment>
    )
}

export default TodoListItem;
