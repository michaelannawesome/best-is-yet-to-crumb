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
            <button type="submit" >Cook</button>
        </form>
    );
}
   
    

export default SearchForm;
    