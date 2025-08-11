import React, { useEffect, useState } from "react";
import "./style.css";
import Profile from "./Profile";
import Settings from "./Settings";
import Interest from "./Interest";

const PersistTabChange = () => {
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
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  const tabConfig = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = pattern.test(data.email);
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid!!";
        }
        if (!data.age || data.age < 10) {
          err.age = "Age is not valid!!";
        }
        if (!data.email || !isEmailValid) {
          err.email = "Email is not valid!!";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabConfig[activeTab].component;
  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  const handleNextClick = () => {
    if (tabConfig[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleSubmitClick = () => {};

  console.log(data, "parentdata");
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);
  return (
    <div className="Tab-wrapper">
      <div className="tab-btns">
        {tabConfig.map((tab, index) => (
          <button
            className={index === activeTab ? "activeTab" : ""}
            key={index}
            onClick={() =>
              tabConfig[activeTab].validate() && handleTabChange(index)
            }
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="bottom-btns">
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabConfig.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabConfig.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default PersistTabChange;
