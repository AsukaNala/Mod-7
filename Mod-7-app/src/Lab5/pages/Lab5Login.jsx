import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Lab5Login() {
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
        <Button variant="contained" onClick={() => handleUpdateUser({})}>
          Log Out
        </Button>
      </>
    );

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Lab 4 Log In</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:{"  "}
            <TextField
              required
              value={name}
              id="outlined-required"
              label="Required"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:{" "}
            <TextField
              required
              id="outlined-required"
              label="Required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>{" "}
          {"  "}
          <label>
            Password: {"  "}
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>{" "}
          {"  "}
          <Button variant="contained">Log in</Button>
          <p>{submitResult}</p>
        </form>
      </Box>
    </div>
  );
}
