import React, { useEffect } from "react";

import Pitch from "../../components/fantazy/Pitch";
import PlayersC from "../../components/fantazy/PlayersC";
import { useDispatch } from "react-redux";
import { getSquad } from "./squadSlice";
import { getCompetition } from "./competitionSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Squad from "../../components/fantazy/Squad";
import CreateSquad from "../../components/fantazy/CreateSquad";
import Home from "../../components/fantazy/Home";
import HomeHeader from "../../components/fantazy/HomeHeader";

export default function Fantazy() {
  const { isLoading, hasSelection } = useSelector((state) => state.squad);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSquad());
    //dispatch(getCompetition());
  }, []);

  if (isLoading) {
    return (
      <>
        <HomeHeader path="Guest" />
        <Loading />
      </>
    );
  }

  if (hasSelection) {
    return (
      <>
        <Home />
      </>
    );
  } else {
    return (
      <>
        <HomeHeader path="Guest" />
        <CreateSquad />
      </>
    );
  }
}
