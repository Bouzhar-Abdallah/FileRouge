import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStandings } from "./standingsSlice";
import { Spinner } from "flowbite-react";
export default function Standings() {
  const { standings, isLoading } = useSelector((state) => state.standing);

  return isLoading ? (
    <ul role="list" className="space-y-5 md:mx-20">
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
    <ul>
      <li
            
            className="bg-white shadow overflow-hidden  "
          >
            <div className="flex justify-between items-center">
              
              <h1 className="flex justify-between text-center pl-5">Clubs</h1>
              <div className="ml-auto border-l-2 p-1 w-10">Pts</div>
            </div>
          </li>
      {standings.map((standing) => {
        return (
          <li
            key={standing.club_id}
            className="bg-white shadow overflow-hidden  "
          >
            <div className="flex justify-between items-center">
              <img
                className="w-5 h-5 mr-3 ml-3"
                src={standing.club.icon_logo_url}
                alt=""
              />
              {standing.club_name}
              <div className="ml-auto p-2 border-l-2 w-10">{standing.points}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
