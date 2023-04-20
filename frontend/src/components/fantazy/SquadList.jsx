import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePlayer } from "../../features/fantazy/squadSlice";
export default function SquadList() {
  const { players } = useSelector((state) => state.squad);
  const dispatch = useDispatch();
  function getBgColor(posteName) {
    switch (posteName) {
      case "Goalkeeper":
        return {"d":"bg-black","e":"bg-gray-200"};
      case "Defender":
        return {"d":"bg-blue-700","e":"bg-blue-200"};
      case "Midfielder":
        return {"d":"bg-green-700","e":"bg-green-200"};
      case "Forward":
        return {"d":"bg-red-700","e":"bg-red-200"};
      default:
        return "bg-gray-100";
    }
  }
  
  return players.map((player) => (
    
    <div
      key={player.id}
      className="flex justify-between shadow-md border-b-2 mb-1 "
    >
      <div className="flex items-center">
        <div className="relative">
          <div className={`w-1 h-8 right-0 -top-4 absolute ${getBgColor(player.poste.name).d}`}></div>
        </div>
        <div className={`px-1 ${getBgColor(player.poste.name).e} h-full flex items-center`}>
          <h1 className="text-xs w-6 text-center">{player.poste.name.substring(0,3)}</h1>
        </div>
        <div className="pl-2 text-xs">
          <h1>{player.name}</h1>
        </div>
      </div>
      <div className="flex  items-center">
        <div className="px-2 h-8 flex flex-col items-center bg-gray-200 text-xs font-thin">
          <span>price</span>
          <span>{player.price}</span>
        </div>
        <button
          onClick={() => {
            dispatch(removePlayer(player));
          }}
          className="w-8 h-8 text-gray-100 rounded-sm opacity-1 focus:outline-none bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" bg-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="hidden">
      <div className="bg-blue-700"></div>
      <div className="bg-blue-200"></div>
      <div className="bg-green-200"></div>
      <div className="bg-green-700"></div>
      <div className="bg-red-700"></div>
      <div className="bg-red-200"></div>
      <div className="bg-black"></div>
      <div className="bg-gray-200"></div>
      </div>
    </div>
  ));
}
