import React, { useState } from 'react';


function SearchForm({ handleSubmit, handleChange, searchString }) {
    return (
        <form onSubmit={handleSubmit} className= "form">
            <input
            className="bar"
            placeholder="search"
            type= "text"
            name= "searchString"
            
            onChange={handleChange}
            value= {searchString}
            />
            <button className="button" type="submit" >Cook</button>
            <button className="random">Choose for me! </button>
        </form>
    );
}
   
    

export default SearchForm;
    