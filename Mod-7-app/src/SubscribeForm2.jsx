import { useState } from "react";
import useFormInput from "./hooks/useFormInput";
import { useUserContext } from "./context/UserContext";

export default function SubscribeForm2() {
  const [status, setStatus] = useState(" ");
  const { currentUser, handleUpdateUser } = useUserContext();

  // use custom hook instead of useState directly
  const [nameInputProps, resetName] = useFormInput("Mary");
  const [lnameInputProps, resetLname] = useFormInput("Smith");
  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");

  function handleSubscribe() {
    resetName();
    resetLname();
    resetEmail();
    setStatus("Thanks for subscribeing!");
    handleUpdateUser({
      email: emailInputProps.value,
      name: nameInputProps.value,
    });
  }

  return (
    <div className="SubscribeForm componentBox">
      <h3>Subscribe Form 2 with custom hook</h3>
      <label>
        First Name: {"  "}
        <input {...nameInputProps} />
        {/*  const inputProps = {
    value: value,
    onChange: handleChange,
  }; copy with spread operator */}
      </label>{" "}
      {"  "}
      <label>
        Last Name: {"  "}
        <input {...lnameInputProps} />
      </label>
      <br />
      <label>
        Email: {"  "}
        <input {...emailInputProps} />
      </label>
      <br />
      <button onClick={handleSubscribe}>Subscribe</button>
      <p>{status}</p>
      <p>
        User: {currentUser.email} / {currentUser.name}
      </p>
    </div>
  );
}
