import React, { Component, useCallback } from 'react';
import './search.css'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    callback = () => {
        console.log('behind', this.state.input)
    }

    onChange = (e) => {
        const {getSearch} = this.props;
        const state = {input: e.target.value};
        this.setState(state,() => {
            getSearch(this.state.input)
        });
    }
    render(){
        return <input value={this.state.input} onChange={this.onChange} className="search" placeholder="Search..." />
    }
}

export default Search