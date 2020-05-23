import React from "react";
import UserContext from "./userContext";

const demoUser = {
  username: "test",
  first_name: "test",
  last_name: "mctest",
  email: "test@test.net",
  photo_url: null,
  jobs:[]
};

const UserProvider = ({ children, currentUser = demoUser, appliedIds = [] }) => (
  <UserContext.Provider value={{currentUser, appliedIds}}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
