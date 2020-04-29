import React from 'react';
import './search.css'

const Search = (props) => {
    return <input value={props.value} onChange={props.getSearch} className="search" placeholder="Search..." />
}

export default Search