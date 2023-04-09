import NavbarComp from "./components/NavbarComp";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Fixtures from "./features/fixtures/Fixtures";
import Standings from "./features/standings/Standings";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLoginState } from "./features/login/loginSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoginState())
  }, [])
  

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarComp />
      <Routes>
        <Route path="/standings" element={<Standings />} />
        <Route path="/" element={<Fixtures />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
