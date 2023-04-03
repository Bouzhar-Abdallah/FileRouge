import React from "react";
import { ListGroup } from "flowbite-react";
export default function Week({ date_limit, week_number, games }) {
  return (
    <div className="bg-white border border-gray-300 overflow-hidden rounded-md">
      <div className="bg-blue-500 flex justify-between shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md mb-2">
        <h1>{date_limit}</h1>
        <h1>journee {week_number}</h1>
      </div>
      <ul role="list" className="divide-y divide-gray-300">
        {games.map((game) => {
          console.log(game);
          return (
            <li key={game.id}>
              <div className="flex w-full items-center">
                <div className="w-1/2 flex justify-between items-center">
                  <div className="w-20 h-20 bg-gray-200"></div>
                  <h1>team 1</h1>
                </div>
                <div className="w-1/5 bg-yellow-300 h-full"> t</div>
                <div className="w-1/2 flex justify-between items-center">
                  <h1>team 1</h1>
                  <div className="w-20 h-20 bg-gray-200"></div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
