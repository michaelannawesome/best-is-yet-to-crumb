import React from "react";
// import "../App.css";
// import { Link, withRouter } from "react-router-dom";

function Nav(props) {
    const nStyle = {
        color: 'white'
    }
  return (
    <div>
      <ul className="nav">
        {/* <link style= {nStyle} to="/"> */}
          <li>Home</li>
        {/* </link> */}
        {/* <link style= {nStyle} to="/ingredients"> */}
          <li>Ingredients</li>
        {/* </link> */}
        {/* <link style= {nStyle} to="/supplies"> */}
          <li>Supplies</li>
        {/* </link> */}
      </ul>
    </div>
  );
}

export default Nav;
