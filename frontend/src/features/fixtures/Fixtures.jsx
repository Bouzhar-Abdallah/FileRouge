import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "flowbite-react";
import { getGames } from "./fixturesSlice";
import Week from "../../components/games/Week";

export default function Fixtures() {
  const { weeks, isLoading } = useSelector((state) => state.fixtures);
  const dispatch = useDispatch();

  
  return isLoading ? (
    <ul role="list" className="space-y-5 mx-20">
      <li className="bg-white shadow overflow-hidden  sm:rounded-md">
        <div className="relative my-3">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">loading</span>
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
  ) : (
    <>
      <ul role="list" className="space-y-5 mx-20">
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
