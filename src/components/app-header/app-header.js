import React from 'react';

const AppHeader = ({ todo, done }) => {
    return(
        <div>
            <h1>Todo App</h1>
            <span>{todo} more to do, {done} done</span>
        </div>
    )
}

export default AppHeader;