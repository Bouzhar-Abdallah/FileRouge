import NavbarComp from "./components/NavbarComp";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Fixtures from "./features/fixtures/Fixtures";
import Standings from "./features/standings/Standings";
import Fantazy from "./features/fantazy/Fantazy";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./features/login/loginSlice";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { decryptData, encryptData } from "./utilities/functions";
import { getClubs } from "./features/clubs/clubsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
    dispatch(getClubs());
  }, []);
  //console.log(decryptData()?.token);
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Standings />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fantazy" element={<Fantazy />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
