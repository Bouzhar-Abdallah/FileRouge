import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decryptData } from "../../utilities/functions";
import { getCompetition } from "../../features/fantazy/competitionSlice";
export default function Home() {
 

  return (
    <>
      <HomeHeader path="Home"/>
<h1>home</h1>
    </>
  );
}
