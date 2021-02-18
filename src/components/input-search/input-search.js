import React, { Component } from 'react';
import './input-search.scss';


export default class InputSearch extends Component {
    state = {
        searchVal: ''
    }

    onSearchItem = (e) => {
        const searchVal = e.target.value;
        this.setState({searchVal})
        this.props.serSearchVal(searchVal)
    }

    render() {
        const { searchVal } = this.state;

        return (
            <input
                onChange={this.onSearchItem}
                value={searchVal}
                className='form-control input-search'
                type="text"
                placeholder='search'/>
        )
    }
}
