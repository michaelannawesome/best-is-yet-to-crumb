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
          Cook
        </button>
      </form>
      <form onSubmit={handleRandom}>
        <button className="button" type="submit">
          Choose for me!{" "}
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
