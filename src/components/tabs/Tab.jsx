import React from "react";
import Counter from "../counter/Counter";
import Todo from "../todo/Todo";
import Fetch from "../fetch/Fetch";
import Search from "../search/Search";
import Debouncing from "../debouncing/Debouncing";

const Tab = ({ tabData, activeTab, setActiveTab }) => {
  const TabData = () => {
    switch (activeTab) {
      case "Counter":
        return <Counter />;
      case "Todo":
        return <Todo />;
      case "Fetch":
        return <Fetch />;
      case "Search":
        return <Search />;
      case "Debouncing":
        return <Debouncing />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="tabs">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.value ? "active" : ""}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.value}
          </button>
        ))}
      </div>
      <div>
        <TabData />
      </div>
    </>
  );
};

export default Tab;
