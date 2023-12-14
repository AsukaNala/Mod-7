import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bitcoin from "../pages/Bitcoin";

export default function Lab4Routes(props) {
  return (
    <Routes>
      <Route index element={<Home {...props} />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/bitcoin" element={<Bitcoin />} />
    </Routes>
  );
}
