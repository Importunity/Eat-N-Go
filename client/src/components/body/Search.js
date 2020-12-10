import { TextField } from '@material-ui/core';
import React from 'react';

function Search(props){
    const change = (event) => {
        props.handleSearchChange(event.target.value);
    }
    return(
        <TextField className="search" variant="outlined"  placeholder="example: kitchen" style={{width: "70%"}} onChange={change}/>
    )
}

export default Search;