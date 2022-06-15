import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        {/* <h3>Updates</h3>
        <Updates /> */}
      </div>
      <div>
        <h1>Avis client</h1>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
