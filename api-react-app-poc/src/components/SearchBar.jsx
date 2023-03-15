import React, { useState } from 'react'
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {

    const [term, setTerm] = useState('');

    const changeHandler = (event) => {
        setTerm(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        onSubmit(term);
    }


    return (
        <div className='search-bar'>
            <form onSubmit={submitHandler}>
                <label>Search For an Item</label>
                <input type="text" value={term} onChange={changeHandler} />
            </form>


        </div>
    )
}

export default SearchBar
