import React, { Component } from 'react';
import AppHeader from "../app-header";
import InputSearch from "../input-search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";
import './app.scss';


export default class App extends Component {
    state = {
        todos: [
            {
                label: 'Alex',
                important: false,
                done: false,
                id: 1
            },
            {
                label: 'John',
                important: false,
                done: false,
                id: 2
            },
            {
                label: 'Mike',
                important: false,
                done: false,
                id: 3
            }
        ],
        searchVal: '',
        filter: 'all'
    }
    itemId = 100;

    createNewElem(inputVal) {
        return {
            label: inputVal,
            important: false,
            done: false,
            id: this.itemId++
        }
    }

    onAddItem = (inputVal) => {
        this.setState(({todos}) => {
            const newItem = this.createNewElem(inputVal);
            const oldArr = [...todos.slice()];
            const newArr = [...oldArr, newItem];

            return {
                todos: newArr
            }
        })
    }


    onDelete = (id) => {
        this.setState(({todos}) => {
            const index = todos.findIndex(el => el.id === id);
            const arr = todos;
            const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

            return {
                todos: newArr
            }
        })

    }


    changeItem(array, id, propName) {
        const index = array.findIndex(el => el.id === id);
        const arr = array;
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem.[propName]};
        return [
            ...arr.slice(0, index), newItem, ...arr.slice(index + 1)
        ]
    }

    // Старое решение с дубляжом кода

    // onToggleImportant = (id) => {
    //     this.setState(({todos}) => {
    //         const index = todos.findIndex(el => el.id === id);
    //         const arr = todos;
    //         const oldItem = arr[index];
    //         const newItem = {...oldItem, important: !oldItem.important};
    //         const newArr = [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    //
    //         return {
    //             todos: newArr
    //         }
    //     })
    // }

    onToggleImportant = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.changeItem(todos, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.changeItem(todos, id, 'done')
            }
        })
    }

    // Старое решение с дубляжом кода

    // onToggleDone = (id) => {
    //     this.setState(({todos}) => {
    //         const index = todos.findIndex(el => el.id === id);
    //         const arr = todos;
    //         const oldItem = arr[index];
    //         const newItem = {...oldItem, done: !oldItem.done};
    //         const newArr = [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    //
    //         return {
    //             todos: newArr
    //         }
    //     })
    // }

    serSearchVal = (searchVal) => {
        this.setState({searchVal})
    }

    searchElems(items, searchVal) {
        if (searchVal.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
        })
    }

    filterElems(items, filter) {

        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState(({filter}))
    }

    render() {
        const { todos, searchVal, filter } = this.state;

        const visibleItems = this.filterElems(this.searchElems(todos, searchVal), filter);


        const doneItems = todos.filter(el => el.done).length;
        const toDoItems = todos.filter(el => !el.done).length;
        return(
            <div className='app'>
                <AppHeader todo={toDoItems} done={doneItems}/>
                <ItemStatusFilter
                    onFilterChange={this.onFilterChange}
                    filter={filter}/>
                <InputSearch serSearchVal={this.serSearchVal}/>
                <TodoList
                    onDelete={this.onDelete}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    todos={visibleItems}
                />
                <AddItem
                    onAddItem={this.onAddItem}
                />
            </div>
        )
    }
}
