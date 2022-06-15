import React from "react";
import Cards from "../Cards/Cards";
import Table from "../../../components/Cards/Cards";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>_____Analytics____</h1>
      <Cards />
      <h1>_____Audience____</h1>
      <Table />
    </div>
  );
};

export default MainDash;
