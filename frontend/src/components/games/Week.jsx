import React from "react";
import { ListGroup } from "flowbite-react";
import Game from "./Game";
export default function Week({ date_limit, week_number, games }) {
  // test if games is not empty
  if(games.length === 0) return null
  return (
    <>
      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500"> 
          {date_limit} <span className="mx-2">   </span> journee {week_number}
          
           </span>
        </div>
      </div>
      <div className="bg-white  overflow-hidden rounded-md">
        <div className="hidden bg-blue-500 flex justify-between shadow overflow-hidden px-4 py-4 sm:px-6 ">
          <h1>{date_limit}</h1>
          <h1>journee {week_number}</h1>
        </div>
        <ul role="list" className="divide-y divide-gray-300 my-5">
          {games.map((game) => {
            return (
              <li key={game.id}>
                <Game {...game} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
