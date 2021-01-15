import React, { useState } from 'react';

function Layout({ handleSubmit, handleChange, searchString }) {
    return (
        <div>
            <h2>Layout</h2>
            <form onSubmit= {handleSubmit} className="form-horizontal">
            <input
          onChange={handleChange}
          value= {searchString}
          type="text"
          placeholder="Dish name or Ingredient"
        />
        <button type="submit">Cook!</button>
            </form>
        </div>
    );
}

export default Layout;