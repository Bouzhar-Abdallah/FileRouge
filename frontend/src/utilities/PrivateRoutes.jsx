import { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { decryptData } from "./functions";
import axios from "axios";
import Loading from "../components/Loading";
const url = "http://localhost:8090/api/";
const PrivateRoutes = () => {
    const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const creds = decryptData();
  const token = creds.token;

  const checkLogin = async () => {
   /*  if (!token) {
      navigate("/login");
    } */
    try {
        const response = await axios.get(url + "checkLogin", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        const data = await response.data;
        console.log("data", data);
        setLoading(false);
        
      } catch (error) {
        setLoading(false);
        navigate('/login');
      }
  };

  
  useEffect(() => {
    setLoading(checkLogin())
     
  }, []);

  
  //return <Loading />
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoutes;
