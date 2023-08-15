import React, { useState } from "react";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecoundTab";
import ThirdTab from "./AllTabs/ThirdTab";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <div className="Tabs ">
      <ul className="nav flex flex-row justify-center">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Pomodoro
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Pequena Pausa
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Longa Pausa
        </li>
      </ul>
      <div className="outlet flex justify-center">
        {activeTab === "tab1" ? (
          <FirstTab />
        ) : activeTab === "tab2" ? (
          <SecondTab />
        ) : (
          <ThirdTab />
        )}
      </div>
    </div>
  );
}
