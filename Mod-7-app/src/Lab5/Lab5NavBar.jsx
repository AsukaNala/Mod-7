import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

export default function Lab5NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <nav className="NavBar">
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
      </Container>
    </AppBar>
  );
}
