import React, { useEffect } from "react";

import Pitch from "../../components/fantazy/Pitch";
import PlayersC from "../../components/fantazy/PlayersC";
import { useDispatch } from "react-redux";
import { getSquad } from "./squadSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Squad from "../../components/fantazy/Squad";
import CreateSquad from "../../components/fantazy/CreateSquad";

export default function Fantazy() {
  const { name, isLoading, hasSquad, TotaleValue } = useSelector(
    (state) => state.squad
  );
  //console.log(TotaleValue)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSquad());
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <CreateSquad />;
    /* return <Squad />; */
  }
}
