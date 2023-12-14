import { useState, useContext } from "react";
import { useUserContext } from "../../context/UserContext";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (password === email)
      setSubmitResult("Password must not match email address");
    else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ name: name, email: email, password: password });
    }
  };

  if (currentUser.email || currentUser.name)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

  return (
    <div className="componentBox">
      <h3>Lab 4 Log In</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{"  "}
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        {"  "}
        <label>
          Password: {"  "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>{" "}
        {"  "}
        <button>Log in</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}
