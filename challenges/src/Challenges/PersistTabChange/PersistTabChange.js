import React, { useEffect, useState } from "react";
import "./style.css";
import Profile from "./Profile";
import Settings from "./Settings";
import Interest from "./Interest";

function PersistTabChange() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          age: "",
          email: "",
          interests: [],
          theme: "",
        };
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabConfig = [
    {
      name: "Profile",
      component: Profile, // Remove JSX brackets
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabConfig[activeTab].component;
  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  console.log(data, "parentdata");
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);
  return (
    <div className="Tab-wrapper">
      {tabConfig.map((tab, index) => (
        <button
          className={index === activeTab ? "activeTab" : ""}
          key={index}
          onClick={() => handleTabChange(index)}
        >
          {tab.name}
        </button>
      ))}
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div>{activeTab === tabConfig.length - 1 && <button>Submit</button>}</div>
    </div>
  );
}

export default PersistTabChange;
