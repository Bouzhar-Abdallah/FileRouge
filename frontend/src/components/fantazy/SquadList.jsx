import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePlayer } from "../../features/fantazy/squadSlice";
export default function SquadList() {
  const { players } = useSelector((state) => state.squad);
  const dispatch = useDispatch();
  return (
    
    players.map((player) => (

    <div key={player.id}>
      <div className="container mx-auto bg-gray-50  antialiased">
        <div className="">
          <div className=" bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
            <div className="w-full relative flex  border-l-8 border-yellow-400">
              <div className="space-y-1 border-r-2 w-12 grid items-center">
                <img
                  className="w-8 mx-auto"
                  src={player.club.icon_logo_url}
                  alt=""
                />
              </div>
              <div className="space-y-1 border-r-2 px-3 ">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="">
                    {player.name}
                    </h1>
                </div>
              </div>

              <div className="border-r-2 pr-3">
                <div>
                  <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                    <div className=" text-xs text-center leading-4 font-normal">
                      Price
                    </div>
                    <div className="text-center  leading-4 font-semibold text-gray-800">
                      {player.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center ">
                <div className=" bg-yellow-400 p-1 w-16">
                  <div className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">
                    {player.poste.name}
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0">
                <button onClick={()=>{
                  dispatch(removePlayer(player))
                }} className="text-gray-100 rounded-sm opacity-1 focus:outline-none bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        ))
  );
}
