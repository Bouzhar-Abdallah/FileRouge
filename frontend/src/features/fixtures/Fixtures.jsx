import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "flowbite-react";
import Week from "../../components/games/Week";
import { getFixtures } from "./fixturesSlice";

export default function Fixtures() {
  const { weeks, isLoading } = useSelector((state) => state.fixtures);
  //filter weeks remove weeks with no games
  
  const filteredWeeks = weeks.filter((week) => week.games.length > 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFixtures());
  }, []);
  //!isLoading && console.log(weeks);
  const path = "Fixtures";
  return isLoading ? (
    <>
      <div className="mt-4 h-32 flex bg-gradient-to-r from-lightGray to-gradient1">
        <div className="pt-5 flex justify-between items-center">
          <div className="md:px-10 px-3">
            <h1 className="font-bold text-2xl md:text-3xl text-darkBlue">
              {path}
            </h1>
          </div>
        </div>
      </div>
      <ul role="list" className="space-y-5 md:mx-6">
        <li className="bg-white shadow overflow-hidden  sm:rounded-md">
          <div className="relative my-3">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-sm text-gray-500">
                loading
              </span>
            </div>
          </div>
          <div className="bg-white  overflow-hidden rounded-md">
            <ul role="list" className="divide-y divide-gray-300 my-5">
              <li className="mx-5 flex justify-center">
                <Spinner aria-label="Extra large spinner example" size="xl" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  ) : (
    <>
      <div className="mt-4 h-32 flex bg-gradient-to-r from-lightGray to-gradient1">
        <div className="pt-5 flex justify-between items-center">
          <div className="md:px-10 px-3">
            <h1 className="font-bold text-2xl md:text-3xl text-darkBlue">
              {path}
            </h1>
          </div>
        </div>
      </div>
      <ul role="list" className="space-y-5 md:mx-6">
        {weeks.map((week) => {
          return (
            <li
              key={week.id}
              className="bg-white shadow overflow-hidden  sm:rounded-md"
            >
              <Week {...week} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
