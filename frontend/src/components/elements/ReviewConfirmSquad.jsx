import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveSelectedPlayers } from "../../features/fantazy/squadSlice";
import { previousStep } from "../../features/fantazy/squadSlice";
export default function ReviewConfirmSquad() {
  const dispatch = useDispatch();
  const { name, logo, step, TotaleValue, players } = useSelector(
    (state) => state.squad
  );
  function getBgColor(posteName) {
    switch (posteName) {
      case "Goalkeeper":
        return { d: "bg-black", e: "bg-gray-200" };
      case "Defender":
        return { d: "bg-blue-700", e: "bg-blue-200" };
      case "Midfielder":
        return { d: "bg-green-700", e: "bg-green-200" };
      case "Forward":
        return { d: "bg-red-700", e: "bg-red-200" };
      default:
        return "bg-gray-100";
    }
  }

  const goalKeepers = players.filter(
    (player) => player.poste.name === "Goalkeeper"
  );
  const defenders = players.filter(
    (player) => player.poste.name === "Defender"
  );
  const midfielders = players.filter(
    (player) => player.poste.name === "Midfielder"
  );
  const forwards = players.filter((player) => player.poste.name === "Forward");

  return (
    <>
      <div className="mx-5 bg-white relative block overflow-hidden rounded-lg border border-gray-100 p-2 sm:p-2 lg:p-4">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl capitalized">
              {name ? name : "Squad Name"}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              Budget :
              <span className="border border-green-400 ml-2 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {10000 - TotaleValue}
              </span>
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              src={logo.url}
              alt="logo"
              className="h-16 w-16 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        <div className="mt-4">
          {step === 2 && (
            <>
              <p className="mb-1 text-center text-sm text-gray-500">
                Select 16 players to form your squad
              </p>
              <p className="mb-3 text-center text-sm text-gray-500">
                {players.length} players selected
              </p>
            </>
          )}
        </div>
        <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2">
          <div className="p-3 border-2 border-gray-200">
            {goalKeepers.map((player) => {
              return (
                <div
                  key={player.id}
                  className="flex justify-between shadow-md border-b-2 mb-1 "
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div
                        className={`w-1 h-8 right-0 -top-4 absolute ${
                          getBgColor(player.poste.name).d
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`px-1 ${
                        getBgColor(player.poste.name).e
                      } h-full flex items-center`}
                    >
                      <h1 className="text-xs w-6 text-center">
                        {player.poste.name.substring(0, 3)}
                      </h1>
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
                  </div>
                  {/* <div className="hidden">
                <div className="bg-blue-700"></div>
                <div className="bg-blue-200"></div>
                <div className="bg-green-200"></div>
                <div className="bg-green-700"></div>
                <div className="bg-red-700"></div>
                <div className="bg-red-200"></div>
                <div className="bg-black"></div>
                <div className="bg-gray-200"></div>
              </div> */}
                </div>
              );
            })}
          </div>
          <div className="p-3 border-2 border-blue-200">
            {defenders.map((player) => {
              return (
                <div
                  key={player.id}
                  className="flex justify-between shadow-md border-b-2 mb-1 "
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div
                        className={`w-1 h-8 right-0 -top-4 absolute ${
                          getBgColor(player.poste.name).d
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`px-1 ${
                        getBgColor(player.poste.name).e
                      } h-full flex items-center`}
                    >
                      <h1 className="text-xs w-6 text-center">
                        {player.poste.name.substring(0, 3)}
                      </h1>
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
                  </div>
                  {/* <div className="hidden">
                <div className="bg-blue-700"></div>
                <div className="bg-blue-200"></div>
                <div className="bg-green-200"></div>
                <div className="bg-green-700"></div>
                <div className="bg-red-700"></div>
                <div className="bg-red-200"></div>
                <div className="bg-black"></div>
                <div className="bg-gray-200"></div>
              </div> */}
                </div>
              );
            })}
          </div>
          <div className="p-3 border-2 border-green-200">
            {midfielders.map((player) => {
              return (
                <div
                  key={player.id}
                  className="flex justify-between shadow-md border-b-2 mb-1 "
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div
                        className={`w-1 h-8 right-0 -top-4 absolute ${
                          getBgColor(player.poste.name).d
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`px-1 ${
                        getBgColor(player.poste.name).e
                      } h-full flex items-center`}
                    >
                      <h1 className="text-xs w-6 text-center">
                        {player.poste.name.substring(0, 3)}
                      </h1>
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
                  </div>
                  {/* <div className="hidden">
                <div className="bg-blue-700"></div>
                <div className="bg-blue-200"></div>
                <div className="bg-green-200"></div>
                <div className="bg-green-700"></div>
                <div className="bg-red-700"></div>
                <div className="bg-red-200"></div>
                <div className="bg-black"></div>
                <div className="bg-gray-200"></div>
              </div> */}
                </div>
              );
            })}
          </div>
          <div className="p-3 border-2 border-red-200">
            {forwards.map((player) => {
              return (
                <div
                  key={player.id}
                  className="flex justify-between shadow-md border-b-2 mb-1 "
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div
                        className={`w-1 h-8 right-0 -top-4 absolute ${
                          getBgColor(player.poste.name).d
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`px-1 ${
                        getBgColor(player.poste.name).e
                      } h-full flex items-center`}
                    >
                      <h1 className="text-xs w-6 text-center">
                        {player.poste.name.substring(0, 3)}
                      </h1>
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
                  </div>
                  {/* <div className="hidden">
                <div className="bg-blue-700"></div>
                <div className="bg-blue-200"></div>
                <div className="bg-green-200"></div>
                <div className="bg-green-700"></div>
                <div className="bg-red-700"></div>
                <div className="bg-red-200"></div>
                <div className="bg-black"></div>
                <div className="bg-gray-200"></div>
              </div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-4 flex justify-center">
          <div className="flex gap-5 flex-row-reverse flex-wrap m-auto">
            <button onClick={()=> dispatch(saveSelectedPlayers())} className="rounded px-5 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800 text-white">
              Save
            </button>
            <button
              onClick={() => dispatch(previousStep())}
              className="rounded px-5 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
