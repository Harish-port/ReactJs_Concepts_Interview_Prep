import React from "react";
import { UserContext } from "./userContext";

const MyProvider = ({ children }) => {
    const [userName, setUserName] = React.useState("Harish");

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
};

export default MyProvider;
