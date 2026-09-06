import React, { useState } from "react";
import Tab from "../tabs/Tab";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Counter");
  const tabData = [
    { id: 1, value: "Counter" },
    { id: 2, value: "Todo" },
    { id: 3, value: "Fetch" },
    { id: 4, value: "Search" },
  ];
  return (
    <>
      <Tab
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export default Home;
