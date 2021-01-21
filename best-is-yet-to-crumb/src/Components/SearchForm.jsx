import React, { useState } from "react";

function SearchForm({
  handleSubmit,
  handleChange,
  searchString,
  handleRandom,
}) {
  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="bar"
          placeholder="search"
          type="text"
          name="searchString"
          onChange={handleChange}
          value={searchString}
        />
        <button className="button" type="submit">
          <strong>Cook</strong>
        </button>
      </form>
      <form onSubmit={handleRandom}>
        <button className="button" type="submit">
          <strong>Choose for me</strong>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
