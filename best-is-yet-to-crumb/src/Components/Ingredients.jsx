import React from "react";
import HM from "../Images/HM.webp";
import TJ from "../Images/TJ.jpg";
import WF from "../Images/WF.png";

function Ingredients(props) {
  return (
    <div className="ing-container">
      <h3>Y’all bready for this?</h3>
      <div className="ing-logos">
        <a href="https://www.traderjoes.com/" target="blank" rel="noreferrer">
          <img src={TJ} alt="" height="100px" />
        </a>

        <a href="https://www.wholefoods.com/" target="blank" rel="noreferrer">
          <img src={WF} alt="" height="100px" />
        </a>

        <a
          href="https://www.handymarketburbank.com/"
          target="blank"
          rel="noreferrer"
        >
          <img src={HM} alt="" height="100px" />
        </a>
      </div>
    </div>
  );
}

export default Ingredients;
