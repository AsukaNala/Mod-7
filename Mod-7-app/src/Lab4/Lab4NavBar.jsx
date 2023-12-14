import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";

export default function Lab4NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/logIn">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoin">Bitcoin Rate</NavLink>
        </li>
      </ul>
    </nav>
  );
}
