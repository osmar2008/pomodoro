import React from "react";
import Outlet from "../Outlet";

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <Outlet value={15 * 60} />
    </div>
  );
};
export default ThirdTab;
