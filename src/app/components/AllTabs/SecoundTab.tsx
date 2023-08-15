import React from "react";
import Outlet from "../Outlet";

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <Outlet value={5 * 60} />
    </div>
  );
};
export default SecondTab;
