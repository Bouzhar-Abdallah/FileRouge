import React from "react";
import { ListGroup } from "flowbite-react";
import Game from "./Game";
export default function Week({ date_limit, week_number, games }) {
  return (
    <>
      <div class="relative my-3">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="px-2 bg-white text-sm text-gray-500"> 
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
            console.log(game);
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
