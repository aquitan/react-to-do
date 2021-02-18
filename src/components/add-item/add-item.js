import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        inputVal: ''
    }

    addValue = (e) => {
        console.log(e.target.value)
        this.setState({
            inputVal: e.target.value
        })

    }

    onAddItem = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.inputVal)
        this.setState({
            inputVal: ''
        })
    }


    render() {
        const { inputVal } = this.state;

        return (

            <form action="#"
                onSubmit={this.onAddItem}
            >
                <div className='input-group'>
                    <input
                        placeholder={'What To do?'}
                        type="text" className='form-control'
                        onChange={this.addValue}
                        value={inputVal}
                    />
                    <button
                        className='btn btn-info'
                    >Add</button>
                </div>
            </form>
        )
    }
}