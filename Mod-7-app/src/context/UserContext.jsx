import React from "react";
import { useState, useContext } from "react";

// 1. Create the context
const UserContext = React.createContext(); // returns a new Context object

//Custom provider component for this context
//Use it in App.jsx like <UserProvider></UserProvider>
export const UserProvider = (props) => {
  //store the current user in state at the top level
  const [currentUser, setCurrentUser] = useState({});

  //set user object in state,shared via context
  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };
  // 2. Provide the context.
  //The Provider component of any context (UserContext.Provider) sends data via its value prop to all children at every level.
  //We are sending both the current user and an update function
  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

// 3.Use the context. This custom hook allows easy access of this particular context from any child component
export const useUserContext = () => {
  return useContext(UserContext);
};

// useContext takes one argument -- Context object created via React.createContext().
//returns whatever custom data has been defined in the value prop of Context.Provider.

//Context---pass data through the entire component tree without passing props down manually at any level
//context provider component --- provides data in context to all its children

//1. Create a context ---React.createContext()
//2.Provide the context ---<contextname.Provider value={}></contextname.Provider>
//3.Use that context ---useContext(contextname)

//* used in LoginForm2
