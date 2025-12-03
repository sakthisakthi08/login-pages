import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Singup from "./Singup";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/reset-password" element={<ResetPassword />} />

    </Routes>
  );
}

export default App;
