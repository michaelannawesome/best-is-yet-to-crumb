import React from "react";

import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <strong>Home</strong>
      </Link>
      <Link to="/ingredients">
        <strong>Ingredients</strong>
      </Link>
      <Link to="/supplies">
        <strong>Supplies</strong>
      </Link>
    </div>
  );
}

export default Nav;
