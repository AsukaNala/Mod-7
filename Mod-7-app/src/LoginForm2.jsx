import { useState, useContext } from "react";
import { useUserContext } from "./context/UserContext";
import { MyThemeContext } from "./context/MyThemeContext";
import SwitchThemes from "./SwitchThemes";

function LoginForm2() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  //destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext(); //custom hook
  const { theme } = useContext(MyThemeContext);

  //alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} =useContext(userContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail, name: userName }); //context function. returns setCurrentUser(user)<- email here
    }
  };
  // if the user is already logged in, show msg instead of form

  if (currentUser.email || currentUser.userName)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );
  // otherwise render same form as previously, no changes
  return (
    <div
      className="LoginForm2 componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <h3>Log In 2</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>{" "}
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>{" "}
        {"  "}
        <label>
          Password: {"  "}
          <input
            type="password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>{" "}
        {"  "}
        <button>Log in</button>
        <p>{submitResult}</p>
      </form>
      <SwitchThemes />
    </div>
  );
}

export default LoginForm2;

// Either use values our custom hook for UserContext:  import {useUserContext} from 'react'
//and use the values provided by the context: const {currentUser} =useUserContext();

//OR  import {useContext} from 'react' import {UserContext} from '../context/UserContext'
//and const {currentUser} =useContext(UserContext)

//THEN use/display the context values as needed
{
  /* display the current user from any component */
}
//<p>Welcome {currentUser.email}</p>

// ++ Display the current user's email from another component * used SubscribeForm and SubscribeForm2
// ++ Add a 'name' field to the login form and include it in the user object stored in context, then display it too*  add name property in handleUpdate and state. Also change to display the current user's firstName from ubscribeForm and SubscribeForm2 components
