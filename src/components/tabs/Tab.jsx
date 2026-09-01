import React from "react";
import Counter from "../counter/Counter";
import Todo from "../todo/Todo";

const Tab = ({ tabData, activeTab, setActiveTab }) => {
  const TabData = () => {
    switch (activeTab) {
      case "Counter":
        return <Counter />;
      case "Todo":
        return <Todo />;
      case "Tab 3":
        return <div>Tab 3</div>;
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
