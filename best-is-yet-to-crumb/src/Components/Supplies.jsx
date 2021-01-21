import React from "react";
import SR from "../Images/surla.jpg";
import CB from "../Images/CB.png";
import WS from "../Images/WS.png";

function Supplies(props) {
  return (
    <div className="sup-container">
      <h3>It Will All Pan Out!</h3>
      <div className="ing-logos">
        <a
          href="https://www.surlatable.com/products/kitchen-tools/"
          target="blank"
          rel="noreferrer"
        >
          <img src={SR} alt="" height="100px" />
        </a>

        <a
          href="https://www.crateandbarrel.com/kitchen-and-food/cookware-bakeware/?st=cookware"
          target="blank"
          rel="noreferrer"
        >
          <img src={CB} alt="" height="100px" />
        </a>

        <a
          href="https://www.williams-sonoma.com/shop/cookware/?cm_type=gnav"
          target="blank"
          rel="noreferrer"
        >
          <img src={WS} alt="" height="100px" />
        </a>
      </div>
    </div>
  );
}

export default Supplies;
