import { useState } from "react";
import useFormInput from "./hooks/useFormInput";

export default function LoginForm() {
  const [status, setStatus] = useState("");

  const [emailInputProps, resetEmail] = useFormInput("");
  const [passwordInputProps, resetPassword] = useFormInput("");

  const handleSubmit = (e) => {
    //e.preventDefault();
    if (!passwordInputProps.includes([/[A-Z]/])) {
      setStatus("Must include at least one capital letter");
    } else if (
      !passwordInputProps.includes("!") &&
      !passwordInputProps.includes("@") &&
      !passwordInputProps.includes("#") &&
      !passwordInputProps.includes("%")
    ) {
      setStatus("Must include at least one of these - !, @, #, $, % ");
    } else {
      setStatus("Successful login.");
    }
  };

  const handleLogin = () => {
    resetEmail();
    resetPassword();
    setStatus(handleSubmit);
  };

  return (
    <div className="LoginForm componentBox">
      <h3>Log In</h3>
      <form>
        <label>
          Email: <input {...emailInputProps} />
        </label>{" "}
        {"  "}
        <label>
          Password: {"  "}
          <input type="password" {...passwordInputProps} />
        </label>{" "}
        {"  "}
        <button onClick={handleLogin}>Log in</button>
        <p>{status}</p>
      </form>
    </div>
  );
}
