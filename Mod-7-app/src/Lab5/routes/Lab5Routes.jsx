import { Route, Routes } from "react-router-dom";
import Lab5Home from "../pages/Lab5Home";
import Lab5Login from "../pages/Lab5Login";
import Lab5Bitcoin from "../pages/Lab5Bitcoin";

export default function Lab5Routes(props) {
  return (
    <Routes>
      <Route index element={<Lab5Home {...props} />} />
      <Route path="/logIn" element={<Lab5Login />} />
      <Route path="/bitcoin" element={<Lab5Bitcoin />} />
    </Routes>
  );
}
