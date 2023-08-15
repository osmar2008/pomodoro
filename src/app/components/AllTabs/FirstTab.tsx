import React from "react";
import Outlet from "../Outlet";

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <Outlet value={25 * 60} />
    </div>
  );
};
export default FirstTab;
