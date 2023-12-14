import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "./context/MyThemeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    //<NavLink></NavLink> for rendering links within navigation menues. Almost same as <Link> but will also include a class='active' attribute on the <a> element of the currently matched route
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      {/* ++ Add another page with route and component */}
    </nav>
  );
}

//NavBar component should be rendered before the AppRoutes component
