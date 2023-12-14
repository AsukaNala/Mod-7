import { useState } from "react";
import { useUserContext } from "./context/UserContext";

export default function SubscribeForm() {
  const [status, setStatus] = useState(" ");
  const { currentUser, handleUpdateUser } = useUserContext();

  //similar state variables mapped to form inputs
  const [firstName, setFirstName] = useState("Mary");
  const [email, setEmail] = useState("mary@poppins.com");

  //similar hander function
  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  function handleSubscribe() {
    setFirstName(" ");
    setEmail(" ");
    setStatus("Thanks for subscribing!");
    handleUpdateUser({ email: email, name: firstName });
  }

  return (
    <div className="SubscribeForm componentBox">
      <label>
        First Name:{"  "}
        <input type="text" value={firstName} onChange={handleNameChange} />
      </label>
      {"  "}
      <label>
        Email :{"  "}
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
      <p>
        User: {currentUser.email} / {currentUser.firstName}
      </p>
    </div>
  );
}
