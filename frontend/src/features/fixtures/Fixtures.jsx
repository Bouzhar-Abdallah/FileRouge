import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getGames } from "./fixturesSlice";
import Week from "../../components/games/Week";

export default function Fixtures() {
  const { weeks, isLoading } = useSelector((state) => state.fixtures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, []);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
    <ul role="list" className="space-y-5 mx-20">
      {weeks.map((week) => {
       
        return (
          <li key={week.id} className="bg-white shadow overflow-hidden  sm:rounded-md">
            <Week {...week} />
          </li>
        );
      })}
    </ul>
    </>
  );
}
