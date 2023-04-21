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
import PrivateRoutes from "./utilities/PrivateRoutes";
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
/*   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwOTAvYXBpL2xvZ2luIiwiaWF0IjoxNjgxMDU5NjY2LCJleHAiOjE2ODEwNjMyNjYsIm5iZiI6MTY4MTA1OTY2NiwianRpIjoiNDRkWkN2eW5yNzh1MmxrYiIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.BZzyk9kfiFNBNfXRMjNZnzQVm5cQMK87ucixn9RPOAM';
encryptData({
  user: {
    name: "test",
    role: {
      name: "user",
    }
  },
  token: token,
}) */

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarComp />

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/fantazy" element={<Fantazy />} />
        </Route>
        <Route path="/" element={<Standings />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
